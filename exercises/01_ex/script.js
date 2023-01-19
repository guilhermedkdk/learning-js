function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"
        document.body.style.background = "#ff8828"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#ff9b8f"
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#27566b"
    }
}