$(document).ready(function () {
    
    $("a[href^='https://']").each(function() { 
         
    var linksExternos=$(this).attr("href");

    $("#links").append("<li>" + linksExternos + "</li>");
    
    });

});