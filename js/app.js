function getLong(){
    let str = prompt("Ingrese una cadena de texto: ")
    return "La cadena de texto  '" + str + "' tiene " + str.length + " caracteres.";
}


function getTexto(){
    let newStr = prompt("Ingresa una cadena: ");
    let num = prompt("Ahora ingresa la cantidad de caracteres que necesitas del string: ");
    return newStr.slice(0, num);
}

function getArr(){
    let arr;
    let texto = prompt("Ingresa una cadena: ");
    let separador = prompt("Ahora ingresa cual es el separador que desea: ");
    if(separador == "" || separador == null){
        arr = texto.split(" ");
    } else {
        arr = texto.split(separador);
    }
    return arr;
}

function getTextoRepetido(){
    var newTexto = "";
    let texto = prompt("Ingrese un texto:");
    let numVeces = prompt("Ingrese la cantidad de veces que quiere repetir el texto:");
    for(let i=0; i<numVeces; i++){
        newTexto += texto;
        newTexto += " ";
    }
    return newTexto;
}