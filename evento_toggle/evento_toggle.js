$(document).ready(function () {
    
   $("#submenu1").hide();
   $("#archivo").click(function(){
       $("#submenu1").toggle();
   })

   $("#submenu2").hide();
   $("#edicion").click(function(){
       $("#submenu2").toggle();
   })

   $("#submenu3").hide();
   $("#herramientas").click(function(){
       $("#submenu3").toggle();
   })

});
