$(document).ready(function () {
    
    $("#menu").hover(function(){

        $(this).stop().animate({

            left:"0px"

        },500,"easeInSine");
        console.log("#menu");

    },
    
    function(){

        $(this).stop().animate({

            left:"-92px"

        },1500,"easeOutBounce");

    });

});