const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
    return acc += item
}, 0)
console.log(soma);