$(document).ready(function () {
    
    document.getElementById("miboton").addEventListener("click", cambiar, false);

});

function cambiar() {
    
   // $("img").fadeOut(1000).fadeIn(1000).width("310"); 
        
    $("img").each(function(){ 
         
        $(this).fadeOut(1000).fadeIn(1000).width(310);

    });

}