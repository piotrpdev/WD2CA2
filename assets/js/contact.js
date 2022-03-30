$(document).ready(() => {
    $(".dropdown").dropdown();
    $('textarea#details').richText();

    // const wordCount = $('.richText-editor')[0].innerText.replace(/\n+/g, ' ').replace(' ', ' ').trim().split(' ').length

    $("form").submit((e) => {
      e.preventDefault();
      $(".ui.basic.modal")
        .modal("setting", "transition", "fade")
        .modal({
          onHide: function () {
            window.location = "index.html";
          },
        })
        .modal("show");
    });
  });