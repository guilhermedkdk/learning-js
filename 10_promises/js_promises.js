const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

somaDoisNumeros(1, 3)
    .then(soma => {
        console.log(soma, "\n")
    })
    .catch(err => {
        console.log(err, "\n")
    })

fetch("https://api.github.com/users/guilhermedkdk")
    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log(body, "\n");
    })
    //  .then(response => {
    //    response.json().then(body => {
    //        console.log(body, "\n");
    //    })
    //  })
    .catch(err => {
        console.log(err, "\n");
    })
    .finally(() => {
        console.log("GG\n")
    })

async function buscaDadosGithub() {
    try {
        const response = await fetch("https://api.github.com/users/guilhermedkdk");
        const body = await response.json();
        return body.login;
    } catch(err) {
        console.log(err, "\n");
    }
}

buscaDadosGithub().then(login => {
    console.log(login, "\n");
});
