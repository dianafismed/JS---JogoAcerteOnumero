function verifica(chute) {
  const numero = +chute
  if(invalido(numero)){
    console.log('Invalido')
    sugerido.innerHTML += '<div>Valor Invalido</div>'    
  }
  if (maiorOuMenor(numero)) {
    sugerido.innerHTML += `
    <div>
    Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}
    </div>
    `
  }

}

function invalido(numero) {
  return Number.isNaN(numero)
}
function maiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor
}

