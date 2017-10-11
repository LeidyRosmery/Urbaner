const postJSON = (url,data,cb) => {
  $.post(url,data,(response) => {
    if (response.success) {
      cb(null,response.data);
    } else {
      cb(new Error(response.message));
    }
  },'json');
}
