const cb = {
    email: null,
    pass: null,
};

const autentica = (e) => {

cb.email = $("#correo").val();
cb.pass = $("#pass").val();
const jqxhr = $.post('https://api.sandbox.urbaner.com/api/client/authenticate/jwt/', {
        email: cb.email,
        password: cb.pass
    })
    .done((data) => {
        $("#valid").empty().append('<div class=""><div class="logIn"><h3 class="text-center">BIENVENIDO</h3></div> <div class="text-center"><img src="assets/img/logoUrbanerBlackH.png"  alt=""><p class="text-center title__subSection">' + data.client.name + ' ' + data.client.last_name + '</p><p><strong>Phone :</strong>' + data.client.phone + '</p> <p><strong>Id :</strong>' + data.client.id + '</p> </div>');
    })
    .fail((e) => {
        $('.error').text(e.responseJSON.non_field_errors[0]);
        $('.error').css('visibility', ' visible');
    });

}
