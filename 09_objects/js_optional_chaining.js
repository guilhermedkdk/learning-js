const user = {
    name: "Guilherme",
    idade: 21,
    address: {
        street: "Piratininga",
        number: 176,
        zip: {
            code: "11035000",
            city: "São Paulo",
        },
        showFullAddress() {
            return "ok";
       }
    }
};

//console.log(user.address ? user.address.zip ? user.address.zip.code : "Não informado" : "Não informado")

console.log(user.address?.zip?.code ?? "Não informado", "\n")

console.log(user.address?.showFullAddress?.())