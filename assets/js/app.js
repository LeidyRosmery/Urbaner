console.log("leidy");

$(".link").click((event) => {
    event.preventDefault();
});

$('.item-list').on('click', function(e) {
    $('.item-list').removeClass('active');
    $(this).addClass('active');
    var imagenActual = $('.img-active');
    img = $('.pc-img[alt=' + $(this).attr('id') + ']');
    console.log(img);
    img.addClass('img-active').css('z-index', 10);
    imagenActual.removeClass('img-active').css('z-index', -10);
});
const cb = {
    email: "prueba@urbaner.pe",
    pass: "Urbaner",
};
/*postJSON('https://api.sandbox.urbaner.com/api/client/authenticate/jwt/', {
    "email":"prueba@urbaner.pe" ,
    "password": "Urbanerhggv"
}, (err, data) => {
    if (err) {
        console.log("mensaje de error de API" + err);
    }
    console.log(data);
});*/
