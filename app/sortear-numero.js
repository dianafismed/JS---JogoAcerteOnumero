const menorValor = 1
const maiorValor = 100

const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio(){
  return parseInt(Math.random() * maiorValor + 1)
}

console.log('Numero Secreto: ' + numeroSecreto)

const menorElemento = document.getElementById('menor-valor')
menorElemento.innerHTML = menorValor

const maiorElemento = document.getElementById('maior-valor')
maiorElemento.innerHTML = maiorValor
