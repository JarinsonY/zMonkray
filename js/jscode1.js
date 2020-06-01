
$(function () {
    //Codigo del datepicker
    $.datepicker.setDefaults($.datepicker.regional["es"]); 
    $("#datepicker").datepicker({
        firstDay: 1,
        dateFormat: 'dd/mm/yy',
        showOn: "button",
        buttonImage: "/imagenes/calendario.png",
        buttonImageOnly: true,
        buttonText: "Seleccione una fecha"
    });
    //Fin codigo datepicker

    //inicializo o creo las variables
    var nombre = "";
    var edad = 0;
    var alerta="";

    $("#agregar").hide(); //Esconder boton para pasar a la otra pagina.

    

    $("#validar").click(function(){

        nombre = $("#usuario").val();
        edad =  edad = calculateAge($("#datepicker").val());

        if (!isNaN(nombre) || nombre == "") {
            alerta += "El nombre no puede ser vacio o numeros.\n";
        }else{
            if(nombre!="usuario1" && nombre!= "usuario2"){
                alerta = 'El usuario con el que desea ingresar no es valido. Intentelo nuevamente'+'\n'+'(Profe una pista: "usuario1" o "usuario2").\n';
                $("#usuario").val("");
            } 
        }
       

        if(isNaN(edad)){
            alerta += "Por favor, digite su fecha de nacimiento.\n";
        }

        if (edad < 18 || edad > 100) {
            alerta += "El valor de la edad no es el adecuado.\n";
        }

        if (alerta != "") {
           alert(alerta);
            alerta = "";
        } else
            if (alerta == "" && edad >= 18) {

                $("#agregar").show();
                alert("Datos validados corectamente.\n Presione el boton ingresar para continuar.");
            }
    })

    function calculateAge(birthday) { //Funcion para hallar la edad según la fecha de nacimiento.
        var birthday_arr = birthday.split("/");
        var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
        var ageDifMs = Date.now() - birthday_date.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }









    
});



