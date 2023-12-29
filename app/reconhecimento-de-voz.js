const sugerido = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = false; // apenas 1 resultado
recognition.lang = 'pt-BR'
recognition.start()

recognition.addEventListener('result', onSpeak)
function onSpeak(e){
  chute = e.results[0][0].transcript
  console.log('chute:' + chute)
  verifica(chute)
  exibeChute(chute)
}

function exibeChute(chute) {
  sugerido.innerHTML=`
  <div>Você disse:</div>
  <span class="box">${chute}</span>`  
}
