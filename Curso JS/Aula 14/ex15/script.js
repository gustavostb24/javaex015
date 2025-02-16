function gerar() {
      let num = document.getElementById('inumero')
      let tab = document.getElementById('itabuada')
      if (num.value.length == 0) {
            alert('digite um número')
      } else {
            let n = Number(num.value)
            let c = 1
            tab.innerHTML=''
             while (c <= 10) {
                  let item = document.createElement('option')
                  item.text = `${n} X ${c} = ${n*c}`
                  tab.appendChild(item)
                  c++
      }
}
}