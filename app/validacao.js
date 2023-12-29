const msg = document.getElementById('msg')

function verifica(chute) {
  const numero = +chute
  if(invalido(numero)){
    console.log('Invalido')
    msg.innerHTML = 'Valor Invalido'  
    return  
  }

  if (maiorOuMenor(numero)) {
    msg.innerHTML = `Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}`
    return
  }

  if (numero===numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou !!!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>
    `
  }else if(numero > numeroSecreto){
    msg.innerHTML = `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
  }else{
    msg.innerHTML = `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
  }
}

function invalido(numero) {
  return Number.isNaN(numero)
}
function maiorOuMenor(numero) {
  return numero > maiorValor || numero < menorValor
}

