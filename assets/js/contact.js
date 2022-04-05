function autoFill() {
  $('#contactname').val('John Doe');
  $('#contactemail').val('john@doe.ie')
}

$(document).ready(() => {
    $('.special.cards .image').dimmer({
      on: 'hover'
    });

    $(".image .button").each(function () {
      $(this).click(function () {
        $(".image .button").parents(".card").removeClass("selectedCard");
        $(this).parents(".card").addClass("selectedCard").transition('pulse');
      });
    })

    $(".dropdown").dropdown();
    $('textarea#details').richText();

    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      autoFill()
    }

    const rand1 = Math.floor(Math.random() * 10) + 1;
    const rand2 = Math.floor(Math.random() * 10) + 1;

    $('[for="captcha"]').text(`Captcha (${rand1} + ${rand2})`);

    $('.richText-editor').keyup(() => {
      const words = $('.richText-editor')[0].innerText.replace(/\n+/g, ' ').replace(' ', ' ').trim();
      const wordCount = words === '' ? 0 : words.split(' ').length;
      $('[for="details"]').text(`Details (${wordCount} words)`);
    })

    let listenerSet = false;

    $("form").submit((e) => {
      e.preventDefault();

      console.log(`${rand1 + rand2}`);
      if ($('#captcha').val() === `${rand1 + rand2}`) {
        $(".ui.basic.modal")
          .modal("setting", "transition", "fade")
          .modal({
            onHide: function () {
              window.location = "index.html";
            },
          })
          .modal("show");
      } else {
        $('#captcha')[0].setCustomValidity('Incorrect answer!');
        $('#captcha')[0].reportValidity();

        if (!listenerSet) {
          $('#captcha').on('change', () => {
            $('#captcha')[0].setCustomValidity('');
            $('#captcha')[0].reportValidity();
          });
          
          listenerSet = true;
        }
      }
    });
  });