const array = [1, 2, 3, 4, 5, "sim"];

const peloMenosUmNaoNumero = array.some(item => typeof item != "number")
console.log(peloMenosUmNaoNumero)