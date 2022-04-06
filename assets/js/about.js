$(document).ready(() => {
    $('img').css('opacity', 0.8)

    const mouseListeners = {
        mouseenter:(evt) => {
         $(evt.currentTarget).stop().fadeTo(500, 1)
        },
     
        mouseleave:(evt) => {
         $(evt.currentTarget).stop().fadeTo(500, 0.8)
        }
      }

    $('img').on(mouseListeners)

    $('img').on('click', (evt) => {
        const imgPath = $(evt.currentTarget).attr('src').split('/');
        imgPath.splice(-1, 0, "bw");
        const newImage = $(`<img class="newImg" src=${imgPath.join('/')} >`)
        const oldImage = $(evt.currentTarget)
        oldImage.parent().prepend(newImage)
        $('img').off('mouseenter mouseleave')
        oldImage.stop().fadeOut(1000,(evt) =>{
             oldImage.remove()
             newImage.css('position', 'relative')
             $('img').on(mouseListeners)
        })
   })
});