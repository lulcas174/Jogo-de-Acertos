//variáveis dos parágrafos do HTML
let palpites = document.getElementById('palpites');
let ultimoResultado = document.getElementById('ultimoResultado');
let palpiteBaixoOuAlto = document.getElementById('palpiteBaixoOuAlto');
//Variáveis que armazenam o botão e o input
let campoPalpite = document.getElementById('campoPalpite');
let envioPalpite = document.getElementById('envioPalpite');
//Gerando número aleatório de 0 a 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
//Variável responsável por adicionar mais um nos palpites
let  contagemPalpites = 1;
//Variável para reiniciar o sistema
let botaoReinicio;
campoPalpite.focus();
//Função que vai conferir os palpites
function conferirPalpites(){
  let palpiteUsuario = Number(campoPalpite.value);
  if (contagemPalpites === 1){
    palpites.textContent = 'Palpites Anteriores  ';
  }
  palpites.textContent += palpiteUsuario + ' ';
    if(palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'Você acertou algo de 0,00% de chance';
      ultimoResultado.style.backgroundColor = 'green';
      palpiteBaixoOuAlto.textContent = '';
      configFimDeJogo();
    } else if(contagemPalpites === 10) {
      ultimoResultado.textContent = 'ACABOU ACABOU ACABOU';
      palpiteBaixoOuAlto.textContent = '';
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.backgroundColor = 'red';
      if(palpiteUsuario < numeroAleatorio) {
        palpiteBaixoOuAlto.textContent = 'Seu palpite foi HORRÍVEL';
      } else if(palpiteUsuario > numeroAleatorio) {
        palpiteBaixoOuAlto.textContent = 'Seu palpite foi tão alto que os gigantes ficaram intimidados';
      }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
  }
  envioPalpite.addEventListener('click', conferirPalpites);
  function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }
  function reiniciarJogo() {
    contagemPalpites = 1;
    var reiniciarParas = document.querySelectorAll('.resultadoParas p');
    for(var i = 0 ; i < reiniciarParas.length ; i++) {
      reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }


