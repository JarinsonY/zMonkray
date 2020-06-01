$(function () {
    $("#usuariox").hide();
    $("#usuariox2").hide();
    $("#botonnegro").hide();
    var principales = location.search.substring(1, location.search.length);
    var vecprincipales = principales.split("&");

    for (let i = 0; i < vecprincipales.length; i++) {
        vecParamsActual = vecprincipales[i].split("=");

        if (isNaN(parseFloat(vecParamsActual[1]))) {
            var valor = String(vecParamsActual[1]).replace(/[+]/g, " ");

        } else {
            var fecha = (vecParamsActual[1]);
            for (let i = 0; i < 3; i++) {
                var fecha = String(fecha).replace("%2F", "/");
            }
        }
    }

    //Instrucciones para poner la imagen que le corresponde a cada usuario.
    $("#imagen").append("<img src='/imagenes/" + valor + ".png'>")
    $("#imagen").append("<label for='' id='perfil'>Foto de perfil del " + valor + "</label>")
    $("#bienvenido").append("Bienvenido " + valor.toUpperCase() + "")

    //Instrucciones para realizar la fecha.
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var f = new Date();
    $("#fecha").append("Hoy es " + diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

    //Instrucciones para generar aleatoriamente.
    var mensaje = "";
    var nombre = "";
    var numero = "";
    var edad = "";
    var nota1 = "";
    var nota2 = "";
    var nota3 = "";
    var promedio = ""
    var vecNumeros = [0];


    $("#agregarcosas").click(function () {

        nombre = $("#estudiante").val();

        if (!isNaN(nombre) || nombre == "") {
            mensaje += "El nombre no puede ser vacio o numeros.\n";
            window.alert(mensaje);
            mensaje = "";
        } else {

            numero = Math.round(Math.random() * (10 - 1) + 1);

            if (vecNumeros.length == 11) {
                alert("La lista no puede recibir más terminos. Su tope son 10 numeros diferentes.")
            } else {
                for (let j = 0; j < vecNumeros.length; j++) {
                    if (vecNumeros[j] == numero) {
                        numero = Math.round(Math.random() * (10 - 1) + 1);
                        j = 0;
                    }
                }

                vecNumeros.push(numero);

                edad = Math.round(Math.random() * (35 - 18) + 18);
                nota1 = (Math.random() * (5.0 - 1.0) + 1.0).toFixed(1);
                nota2 = (Math.random() * (5.0 - 1.0) + 1.0).toFixed(1);
                nota3 = (Math.random() * (5.0 - 1.0) + 1.0).toFixed(1);
                promedio = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(2);

                $("#tablacool tbody").append(`
                <tr>
                    <td>${nombre + numero}</td>
                    <td>${edad}</td>
                    <td>${nota1}</td>
                    <td>${nota2}</td>
                    <td>${nota3}</td>
                    <td>${promedio}</td>
                </tr>`
                );

                

            }

            if (vecNumeros.length >= 3) {
                $("#botonnegro").show();
            }

        }
    });
    var pk = (parseFloat(0));
    var pk2 = (parseFloat(5.0));
    var otro2 = "";
    var otro="";
    var menor = "";
    var mayor = "";
    $("#botonnegro").click(function () {
        $('#mayormenor tr').each(function () {

            otro = $(this).find("td").eq(5).html();

            if (pk < otro) {

                mayor = $(this).find("td").eq(0).html() + " " + $(this).find("td").eq(1).html() + " " +
                    $(this).find("td").eq(2).html() + " " + $(this).find("td").eq(3).html() + " " + $(this).find("td").eq(4).html() + " " +
                    $(this).find("td").eq(5).html();

                pk = $(this).find("td").eq(5).html();
            }
        });
        
        $('#mayormenor tr').each(function () {

            var otro2 = $(this).find("td").eq(5).html();

            if (pk2 > otro2) {

                menor = $(this).find("td").eq(0).html() + " " + $(this).find("td").eq(1).html() + " " +
                    $(this).find("td").eq(2).html() + " " + $(this).find("td").eq(3).html() + " " + $(this).find("td").eq(4).html() + " " +
                    $(this).find("td").eq(5).html();

                pk2 = $(this).find("td").eq(5).html();
            }
        });
        $("#usuariox").val(mayor);
        $("#usuariox2").val(menor);
    
    });

   

    //alert(numero + "\n" + nombre + "\n" + edad + "\n" + nota1 + "\n" + nota2 + "\n" + nota3 + "\n" + promedio + "\n")

});

