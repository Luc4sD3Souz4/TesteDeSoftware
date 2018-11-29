var answer = 0;
function bini(numero1,numero2,campo) {

   // alerta o valor do campo
    var answer = 0;
    switch (campo) {
        case "soma":
            answer = (parseFloat(numero1) + parseFloat(numero2));
            break;
            
        case "subtracao":
            answer = (parseFloat(numero1) - parseFloat(numero2));
            break;
            
        case "multiplicacao":
            answer = (parseFloat(numero1) * parseFloat(numero2));
            break;
           
        case "divisao":
            answer = (parseFloat(numero1) / parseFloat(numero2));
            break;
            
        case "exponenciacao":
            answer = (parseFloat(numero1) ** parseFloat(numero2));
            break;
    }
    return answer;   
}

//var first = prompt("Digite o primeiro numero");
//var second = prompt("Digite o segundo numero");
