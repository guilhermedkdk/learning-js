function verificar() {
    var data = new Date()
    var ano = data.getFullYear ()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Masculino"
            if (idade >=0 && idade <= 15) {
                img.setAttribute("src", "criancam.png")
            } else if (idade <= 25) {
                img.setAttribute("src", "jovemm.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "adultom.png")
            } else if (idade <= 100) {
                img.setAttribute("src", "idosom.png")
            } else {
                img.setAttribute("src", "caveira.png")
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >=0 && idade <= 15) {
                img.setAttribute("src", "criancaf.png")
            } else if (idade <= 25) {
                img.setAttribute("src", "jovemf.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "adultof.png")
            } else if (idade <= 100) {
                img.setAttribute("src", "idosof.png")
            } else {
                img.setAttribute("src", "caveira.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Gênero ` + genero.toLowerCase() + ` com ${idade} anos. <p>`
        res.appendChild(img)
    }
}