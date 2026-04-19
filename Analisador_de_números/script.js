    let num = document.querySelector('input#num')
    let lista = document.querySelector('select#flista')
    let res = document.querySelector('div#res')
    let valores = []
    lista.innerHTML = ""

    function isNumero(n) {
        if(Number(n) >= 1 && Number(n) <= 100) {
            return true
        } else {
            return false
        }
    }

    function adicionar() {
        if (isNumero(num.value) && !valores.includes(Number(num.value))) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ""
        } else {
            window.alert("Valor inválido ou já encontrado na lista.")
        }
    }

    function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar!!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0 

            for (let valor of valores) {
                    soma += valor
            if (valor > maior) 
                maior = valor
            if (valor < menor) 
                menor = valor
            }
                
            media = soma / tot
            res.innerHTML = ""
            res.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados</p>`
            res.innerHTML += `<p>O maior número é ${maior}</p>`
            res.innerHTML += `<p>O menor número é ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
            res.innerHTML += `<p>A média dos vaalores digitados é ${media}</p>`
        }
    }
