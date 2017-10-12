/*const postJSON = (url,data,cb) => {
  $.post(url,data,(response) => {
    if (response) {
      cb(null,response);
    } else {
      cb(new Error(response));
    }
  },'json');
}

$('#hola').click(function(){
  $.post("https://api.sandbox.urbaner.com/api/client/authenticate/jwt/",
       {
         email: "prueba@urbaner.pe",
         password: "Urbaner"
       },
       function(data,status){
           console.log(data);
           console.log(status);
       });
});
*/
$.ajax({
    url: 'https://api.sandbox.urbaner.com/api/client/authenticate/jwt/',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        email: "prueba@urbaner.pe",
        password: "Urbaner"
    }),
    success: function(response) {
        console.log(response);

        if (response) {
            alert("logueado con exito");
        }

    },
    fail: function(request) {
        if (request) {
            alert("existe un error" + request.message);
        }
    }
});
