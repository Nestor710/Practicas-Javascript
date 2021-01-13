$(document).ready(function () {
    
  $("#imagen").mouseover(function(){
      $(this).animate(
        {
            opacity:1
        },250
      );
  })

  $("#imagen").mouseout(function(){
      $(this).animate(
        {
            opacity:0.5
        },250);
  })

});