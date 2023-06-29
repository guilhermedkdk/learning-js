const user = {
    name: "Guilherme",
    idade: 21,
    addres: {
        street: "Piratininga",
        number: 176,
    },
};

console.log("name" in user);
console.log("nickname" in user, "\n");
console.log(Object.keys(user));
console.log(Object.values(user), "\n");
console.log(JSON.stringify(Object.values(user)));
console.log(JSON.stringify(Object.entries(user)));