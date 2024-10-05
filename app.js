alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroUsuario;
let tentativas = 1;

while (numeroUsuario !== numeroSecreto) {
  numeroUsuario = Number(prompt(`Escolha um número entre 0 e ${numeroMaximo}:`));
  if (numeroSecreto == numeroUsuario) {
    break;
  } else {
    if (numeroSecreto > numeroUsuario) {
      alert(`O número secreto é maior que ${numeroUsuario}`);
    } else {
      alert(`O número secreto é menor que ${numeroUsuario}`);
    }
    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
// operador ternário: tentativa maior que 1 ? se sim, tentativas se não tentativa
alert(
  `Você acertou com ${tentativas} ${palavraTentativa}! O número secreto é: ${numeroSecreto}`
);
