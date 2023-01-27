const user = {
    name: "Guilherme",
    idade: 21,
    address: {
        street: "Piratininga",
        number: 176,
    },
};

const {name, idade, ...rest} = user;
console.log(JSON.stringify(rest), "\n");

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, ...resto] = array;
console.log(JSON.stringify({first, second, resto}));