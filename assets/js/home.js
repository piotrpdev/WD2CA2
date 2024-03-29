// https://semantic-ui.com/views/item.html#vertical-alignment
// https://reader.tutors.dev/#/talk/website-development-2.netlify.app/topic-00-Assignments/unit-2-Assignment-2/talk-1/assignment-2a.pdf

function readLessOrMore() {
    if ($(this).prev().hasClass('hiddenDescription')) {
        $(this).text("Hide Description");
        $(this).prev().fadeIn(600).removeClass('hiddenDescription');
    } else {
        $(this).text("Show Description");
        $(this).prev().fadeOut(300).addClass('hiddenDescription');
    }
}

function addArticles(articles = news.articles, articleStart = 5, articleEnd = articleStart + 5) {
    for (let i = articleStart; i < articleEnd; i++) {
        $('#news').append(`<div class="item">
            <div class="image">
                <img src="${articles[i].urlToImage || "/assets/img/wireframe.png"}" data-fancybox="thumbs">
            </div>
            <div class="content">
                <a class="header" href="${articles[i].url}" target="_blank">${articles[i].title}</a>
                <div class="meta">
                    <span>${articles[i].source.name || "JDN"} | ${articles[i].author || "Jane Doe"} | ${new Date(articles[i].publishedAt || Date.now()).toLocaleDateString("en-IE", {dateStyle: "medium"})}</span>
                </div>
                <div class="description hiddenDescription">
                    <p>${articles[i].description}</p>
                </div>
                ${articles[i].description ? '<button class="ui primary basic button descButton" onclick="readLessOrMore.call(this)">Show Description</button>' : '<button class="ui primary basic disabled button">No Description</button>'}
            </div>
        </div>`);
    }
}

function load() {
    Fancybox.bind('[data-fancybox="thumbs"]', {
        infinite: false,
        caption: function (_, carousel, slide) {
        return (
          `${slide.index + 1} / ${carousel.slides.length}`
        );
      },
    });

    articleStart = 5;

    Handlebars.registerHelper('formatDate', (date) => {
        return new Date(date || Date.now()).toLocaleDateString("en-IE", {dateStyle: "medium"});
    });

    let template = Handlebars.compile($('#newsTemplate').html())

    let output = template({ articles: news.articles.slice(articleStart, articleStart + 5) });

    $('#news').append(output);

    // addArticles(news.articles, articleStart); // Generate articles without handlebars

    $('#loadMore').on('click', () => {
        articleStart += 5;
        output = template({ articles: news.articles.slice(articleStart, articleStart + 5) });
        $('#news').append(output);
    });
}

$(document).ready(() => {
    console.log('main.js loaded');
});
  