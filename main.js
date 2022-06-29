const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certeza!',
  'Rapaaaaz',
  'Ih rapaz, acho que Perdemo hein..',
  'Não conte com isso',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde',
  'Sim, definitivamente!',
  'Minha resposta é não',
  'Você pode contar com isso',
  'CONFIA!',
  'Volte amanhã',
  'Meu amigo...tenho más notícias',
  'Provavelmente',
  'Não é possível prever agora',
  'Desconfia...',
  'As perspectivas não são tão boas',
  'Sim',
  'PERDEMO MUITO',
  'Sinais apontam que sim',
  'Pode confiar!'
]

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta! :)')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  /* Gerar número aleatório */
  const totalDeRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalDeRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  /* Sumir resposta */
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
