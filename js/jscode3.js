$(function(){
    var parametros = location.search.substring(1, location.search.length);
    //alert(parametros);
    var vecParametros = parametros.split("&");
    //alert(vecParametros.length + " - " + vecParametros[0] + "-" + vecParametros[1]);
    var cadena="0";
    
    
    for(let i=0; i < vecParametros.length; i++){
        vecParamsActual = vecParametros[i].split("=");

        if(isNaN(parseFloat(vecParamsActual[1]))){ //isNaN = is not a number -> true: no es numero. false: Si es numero.
            vecValor = (vecParamsActual[1]).split("+");
            
            if(cadena=="0"){
                color="green"
            }else{
                color="red"
            }
            $("#Tabla tbody").append(`
            <tr bgcolor=${color} style="color:white">
                <td>${vecValor[0]}</td>
                <td>${vecValor[1]}</td>
                <td>${vecValor[2]}</td>
                <td>${vecValor[3]}</td>
                <td>${vecValor[4]}</td>
                <td>${vecValor[5]}</td>
            </tr>`         
        );
         cadena="1";
        }
    }
    

});