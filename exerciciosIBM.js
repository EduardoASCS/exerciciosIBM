//1 - Algoritmo que imprime números de 0 a 100.
//Sem função:
for (let i = 0; i <= 100; i++) {
    console.log(i);
};
//Com função:
function numbers() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    };
}

//2 - Algoritmo que imprime números pares de 0 a 100.
//Sem função:
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};
// Com função:
function evenNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    };
}

//3 - Algoritmo que imprime números ímpares de 0 a 100.
//Sem função:
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
};
// Com função:
function oddNumbers() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    };
};

//4 - Algoritmo que imprime números primos entre 0 e 100.
//Sem função:
const numArray = [];

for (let i = 0; i <= 100; i++) {
    numArray.push(i);
}

for (let i = numArray.length - 1; i >= 0; i--) {
    for (let j = 2; j < i; j++) {
        if (numArray[i] % j === 0) numArray.splice(i, 1);
    }
    if (numArray[i] < 2) numArray.splice(i, 1);
}

numArray.forEach(item => console.log(item));
//Com função:
function printPrimeNumbers() {
    const numArray = [];
    for (let i = 0; i <= 100; i++) {
        numArray.push(i);
    }

    const result = numArray.filter(item => {
        if (item < 2) return false;
        for (let i = 2; i < item; i++) {
            if (item % i === 0) return false;
        };
        return true
    })

    result.forEach(item => console.log(item));
}

//5 - Algoritmo que imprime os multiplos de 5 entre os números 0 e 100.
//Sem função:
for (let i = 0; i <= 100; i++) {
    if (i % 5 === 0) console.log(i);
}
//Com função:
function divisibleByFive() {
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) console.log(i);
    }
}

//6 - Função que recebe dois parametros numéricos e imprime os valores entres eles.
function numbernsBetween(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") return console.log("Parameters must be of type 'number'.");

    const numbers = [num1, num2].sort((a, b) => a - b);

    for (let i = numbers[0] + 1; i < numbers[1]; i++) {
        console.log(i);
    }
}

//7 - Função que recebebe um array e retorna os números pares desse array.
//Sem filter:
function getEven(array) {
    const result = [];
    for (let elem of array) {
        if (elem % 2 === 0) result.push(elem);
    }
    return result;
}
//Com filter:
function filterEven(array) {
    return array.filter(num => num % 2 === 0);
}

//8 - Função que recebe um array e retorna os números ímpares desse array.
//Sem filter:
function getOdd(array) {
    const result = [];
    for (let elem of array) {
        if (elem % 2 !== 0) result.push(elem);
    }
    return result;
}
//Com filter:
function filterOdd(array) {
    return array.filter(num => num % 2 !== 0);
}

//9 - Função que recebe um array e retorna os números primos desse array.
//Sem filter:
function primeNumbers(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < 2) array.splice(array.indexOf(array[i]), 1);
        for (let j = 2; j < i; j++) {
            if (array[i] % j === 0) {
                array.splice(array.indexOf(array[i]), 1);
            }
        }
    }
    return array;
}
//Com filter:
function filterPrimeNumbers(array) {
    return array.filter(number => {
        if (number < 2) return false;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;
        }
        return true
    })
}

//10 - Função que recebe um array e retorna um novo array.
//Para cada posição que tiver um numero par, retorna o numero com - par na frente,
//e para cada posição que tenha um ímpar, retorna o numero com - impar na frente
//e quando for zero retorne a string zero ao invés do numero 0:
function oddOrEven(array) {
    return array.map(number => {
        if (number === 0) return "0";
        if (number % 2 === 0) return "- par " + number;
        if (number % 2 !== 0) return "- ímpar " + number;
    })
}
