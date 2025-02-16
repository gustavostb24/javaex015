function verificar() {
    let data = new Date() 
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //formulário que vai escrever o ano
    let res = document.getElementById('res') //o resultado do que foi colocado
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO, DADOS INVALIDOS PORRA')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero=''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
        genero = 'Homem'
            if(idade >=0 && idade < 10){
                //kid
               img.setAttribute('src', "criancaM.jpg")
            }
            else if(idade < 21){
                //young kid
                img.setAttribute('src', "ijovemM.jpg")
            }
            else if (idade < 50 ){
                //adult
                img.setAttribute('src', "iadultoM.jpg")
            }
            else{
                //oldman
                img.setAttribute('src', "iidosoM.jpg")
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
        }
            if(idade >=0 && idade < 10){
            //kid
           img.setAttribute('src', "criancaF.jpg")

        }
            else if(idade < 21){
            //young kid
            img.setAttribute('src', "jovemF.jpg")  
        }
            else if (idade < 50 ){
            //adult
           img.setAttribute('src', "adultoF.jpg")
        }
            else{
            //oldman
            img.setAttribute('src', "idosoF.jpg")
        }   

        

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero}  com ${idade} anos`
        res.appendChild(img)
        
    }

}
  