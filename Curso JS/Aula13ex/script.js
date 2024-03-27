function verificar() {
    let data = new Date() 
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') //formulário que vai escrever o ano
    let res = document.getElementById('res') //o resultado do que foi colocado
    if (fano.value.length == 0 || fano.value > ano) {
        alert('ERRO, DADOS INVALIDOS PORRA')
    } else {
        alert('ta suave veinho')
    }

}
