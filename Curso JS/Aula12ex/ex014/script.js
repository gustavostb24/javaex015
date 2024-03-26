function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('img');
    let data = new Date();
    let hora = data.getHours();
  
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12){
            img.src = 'fotomanha1.png.jpg'

    } else if (hora >= 12 && hora < 18) {
             img.src = 'fototarde1.png.jpg'

    } else {
               img.src = 'fotonoite1.png.jpg'
    }
}