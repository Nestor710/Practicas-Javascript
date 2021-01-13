$(document).ready(function () {
    
$("#form_registro").validator({

    rules:{

       password:{

         rangelength:[6,12]

        },

        confirma:{
            equalTo:"#password"
    }
    }//cierra el rules

    });

});