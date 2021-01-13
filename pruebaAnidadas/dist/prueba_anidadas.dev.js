"use strict";

$(document).ready(function () {
  $("#titulo").hide();
  $("#foto img").width(60).height(40).click(function () {
    $(this).animate({
      marginLeft: "150px",
      width: "300px",
      height: "200px"
    }, 1000, function () {
      $("#titulo").fadeIn(1000).delay(1000).fadeOut(1000);
    }).delay(2250); //termina animate

    $(this).animate({
      marginLeft: "0px",
      width: "60px",
      height: "40px"
    }, 1000);
  }); //termina la funcion click
}); //termina funcion ready