// https://semantic-ui.com/views/item.html#vertical-alignment
// https://reader.tutors.dev/#/talk/website-development-2.netlify.app/topic-00-Assignments/unit-2-Assignment-2/talk-1/assignment-2a.pdf

function readLessOrMore() {
    $(this).prev().toggle();
    $(this).text($(this).text() === "Show Description" ? "Hide Description" : "Show Description");
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
                <div class="description" style="display:none">
                    <p>${articles[i].description}</p>
                </div>
                <button class="ui primary basic button descButton" onclick="readLessOrMore.call(this)">Show Description</button>
            </div>
        </div>`);
    }
}

$(document).ready(() => {
    Fancybox.bind('[data-fancybox="thumbs"]', {
        infinite: false,
        caption: function (_, carousel, slide) {
        return (
          `${slide.index + 1} / ${carousel.slides.length}`
        );
      },
    });

    console.log('main.js loaded');

    articleStart = 5;

    addArticles();

    $('#loadMore').on('click', () => {
        articleStart += 5;
        addArticles(news.articles, articleStart);
    });
});
  