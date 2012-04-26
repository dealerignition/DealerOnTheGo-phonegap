var initialized = false;

$(document).bind("pageinit", function() {
  if (!initialized) {
    $.mobile.changePage("http://dealeronthego.herokuapp.com");
    initialized = true;
  }
});