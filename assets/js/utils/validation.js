$("#valid").submit(function(event) {
    event.preventDefault();
    if ($('#correo').val() == "") {
        $('.valid-correo').text('este campo es requerido');
        $('.valid-correo').css('visibility', ' visible');
    } else {
        $('.valid-correo').empty();
    }
    if ($('#pass').val() == "") {
        $('.valid-pass').text('este campo es requerido');
        $('.valid-pass').css('visibility', ' visible');
    } else {
        $('.valid-pass').empty();
    }

    if ($('#pass').val() !== "" && $('#correo').val() !== "") {
        autentica();
    }


});
$('#correo').on("keyup", function(e) {
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (regex.test($(this).val().trim())) {
        $('.valid-correo').empty();
    } else {
        $('.valid-correo').text('ingrese un correo valido');
        $('.valid-correo').css('visibility', ' visible');
    }
});

$('#pass').on("keyup", function(e) {
    if ($('#pass').val() == "") {
        $('.valid-pass').text('este campo es requerido');
        $('.valid-pass').css('visibility', ' visible');
    } else {
        $('.valid-pass').empty();
    }
});
