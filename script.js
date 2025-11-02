// ------ Funções --------

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

// ------- testes --------
console.log("Soma:", somar(5,3));
console.log("Subtração", subtrair(5,3));
console.log("Multiplicação", multiplicar(5,3));
console.log("Divisão", dividir(10,2));



const filtrarPares = function (numeros) {
  return numeros.filter(num => num % 2 === 0);
};

// ---- Arrow function ----
const calcularMedia = (numeros) => {
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  return soma / numeros.length;
};

// ---------- Testando -------
const lista = [1, 2, 3, 4, 5, 6];
console.log("Números pares:", filtrarPares(lista));
console.log("Média:", calcularMedia(lista));


// ---- Função com callback ----
function aplicarOperacao(a, b, operacao) {
  return operacao(a, b);
}

// ----- Testando com diferentes funções -------
console.log("Callback soma:", aplicarOperacao(8, 2, somar));
console.log("Callback multiplicação:", aplicarOperacao(8, 2, multiplicar));
console.log("Callback divisão:", aplicarOperacao(8, 2, dividir));




