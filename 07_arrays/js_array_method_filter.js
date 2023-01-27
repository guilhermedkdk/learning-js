const array = [1, 2, 3, 4, 5];

const novoArray = array
    .filter(item => item % 2 == 0)
    .map(item => item * 2);
console.log(novoArray);