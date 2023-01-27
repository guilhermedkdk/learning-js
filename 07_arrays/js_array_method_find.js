const array = [1, 2, 3, 4, 5];

const par = array.find(item => item % 2 == 0);
console.log(par, "\n");

const parindex = array.findIndex(item => item % 2 == 0);
console.log(parindex);