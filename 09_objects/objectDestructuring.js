const user = {
    name: "Guilherme",
    idade: 21,
    address: {
        street: "Piratininga",
        number: 176,
    },
};

//const addres = user.addres;
const {address, idade: age, nickname = "dk"} = user;

console.log(JSON.stringify(address), "\n");
console.log(JSON.stringify({address, age, nickname}), "\n");

function mostraIdade({idade}) {
    return idade;
}

console.log(mostraIdade(user), "\n");