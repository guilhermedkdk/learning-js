function contar() {
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var counter = document.getElementById("counter")
    var res = document.getElementById("res")
    if(ini.value.length == 0 || fim.value.length == 0 || counter.value.length == 0) {
        alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando... <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let c = Number(counter.value)
        if(c <= 0 ) {
            alert("Contador inválido! Considerando contador como 1")
            c = 1
        }
        if(i < f) {
            for(i; i <= f; i += c) {
                res.innerHTML += ` ${i} \u{1F449}` 
            }
        } else {
            for(i; i >= f; i -= c) {
                res.innerHTML += ` ${i} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}