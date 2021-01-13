function validar() {

    var n_usuario=document.getElementById("usuario").value;

    if (n_usuario=="") {

        $("#usuario").after("Rellene este campo, por favor")

    }
    
}