$(document).ready(function() {

    var foto_nueva=new Image();

    foto_nueva.src="../each y funcion anonima/imgs/1.jpg"
		
    $("#foto").hover(function(){
        
        $(this).attr("src",foto_nueva.src);
        
    },
    function(){
        
        $(this).attr("src","../each y funcion anonima/imgs/imgs2/1.jpg");
        
        
    });	
    
});