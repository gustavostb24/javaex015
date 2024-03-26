var agr = new Date()
var hora = agr.getHours()
console.log(`agr é ${hora} horas `)
if (hora < 12) {
    console.log('Buenos Dias')
    
} else if (hora <= 18) {
    console.log('Buenas Tardes')
    } else {
        console.log('Buenas Notches')
    }