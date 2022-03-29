// https://semantic-ui.com/views/item.html#vertical-alignment
// https://reader.tutors.dev/#/talk/website-development-2.netlify.app/topic-00-Assignments/unit-2-Assignment-2/talk-1/assignment-2a.pdf

$(document).ready(() => {
    console.log('main.js loaded');
    console.dir(news);

    const articles = news.articles;
    const articleNum = 5;
    // Use jQuery to iterate over the news variable and append the news to the div with id news
    for (let i = 0; i < (articleNum || articles.length); i++) {
        $('#news').append(`<div class="item">
            <div class="image">
                <img src="${articles[i].urlToImage}">
            </div>
            <div class="content">
                <h2 class="header">${articles[i].title}</h2>
                <div class="description">
                    <p>${articles[i].description}</p>
                </div>
                <button class="ui right floated primary button">
                    Read More
                    <i class="right chevron icon"></i>
                </button>
                <a href="${articles[i].url}">Read more</a>
            </div>
        </div>`);
    }
});