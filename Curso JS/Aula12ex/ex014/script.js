function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();
  
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12){
            img.src = 'imagens/fotomanha1.png.jpg'

    } else if (hora >= 12 && hora < 18) {
             img.src = 'imagens/fototarde1.png.jpg'

    } else {
               img.src = 'imagens/fotonoite1.png.jpg'
    }
}