/*var myHeading = document.querySelector('h1');

var form = document.getElementById('conta');
var first = document.getElementById('first');
var second = document.getElementById('second');
var campo = document.getElementById('campo').value;*/



var answer = 0;
function bini() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var campo = document.getElementById('campo').value;
    // alerta o valor do campo
    switch (campo) {
        case "soma":
            alert(parseFloat(second.value) + parseFloat(first.value));
            break;
            
        case "subtracao":
            alert(parseFloat(first.value) - parseFloat(second.value));
            break;
            
        case "multiplicacao":
            alert(parseFloat(first.value) * parseFloat(second.value));
            break;
           
        case "divisao":
            alert(parseFloat(first.value) / parseFloat(second.value));
            break;
            
        case "exponenciacao":
            alert(parseFloat(first.value) ** parseFloat(second.value));
            break;
    }
    
}

//var first = prompt("Digite o primeiro numero");
//var second = prompt("Digite o segundo numero");
