function tabuada() {
    var num = document.getElementById("num")
    var res = document.getElementById("res")
    if(num.value.length === 0) {
        alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            res.innerHTML += `${num.value} X ${i} = ` + (num.value * i) + "<br>"
        }
    }
}
