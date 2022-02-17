var value;
var results
function button(num) {
    value = document.calculadora.visor.value += num;
}
function reseta () {
    document.calculadora.visor.value = '';
}
function calcula() {
    results = eval(value);
    document.calculadora.visor.value = results.toLocaleString('pt-br');
}