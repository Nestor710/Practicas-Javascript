$(document).ready(function () {
    
    $("#boton").click(function(){
        var oculto=$("#menu").css("left")=="-210px";

        if(oculto){
            $("#menu").animate({left:"0px"}, 500);
        }else{
            $("#menu").animate({left:"-210"}, 500);
        }
    });
});