$("#toggle").on("click", function(event) {
    event.preventDefault();
    $(".nav-main").toggleClass("toggle-nav");
    $(".nav-head").toggleClass("open");
    $(".list-nav").toggleClass('flex');
    $(".nav-items").toggleClass("toggle-menu");
});

$('.item-list').on('click', function(e) {
    $('.item-list').removeClass('active');
    $(this).toggleClass("active");

    const imagenCurrent = $('.img-active');
    const imgActive = $('.pc-img[alt=' + $(this).attr('id') + ']');

    imgActive.addClass('img-active').css('z-index', 10);
    imagenCurrent.removeClass('img-active').css('z-index', -10);
});
