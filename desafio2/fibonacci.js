function isFibonacci(num) {
    var a = 0, b = 1, temp;
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b === num || num === 0;
}
var num = 21; // Altere para testar outros valores
console.log("O n\u00FAmero ".concat(num, " ").concat(isFibonacci(num) ? "pertence" : "não pertence", " \u00E0 sequ\u00EAncia de Fibonacci."));
