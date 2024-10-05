// // 1. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
// let mensagemBoasVindas = "Bem vindo(a) ao nosso site!";
// alert(mensagemBoasVindas);
// // 2. Declare uma variável chamada nome e atribua a ela o valor "Lua".
// let nome = "Lua";
// // 3. Crie uma variável chamada idade e atribua a ela o valor 25.
// let idade = 25;
// // 4. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// let numeroVendas = 50;
// // 5. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// let saldoDisponivel = 1000;
// // 6. Exiba um alerta com o texto "Erro! Preencha todos os campos"
// alert("Erro! Preencha todos os campos");
// //7. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// let mensagemErro = "Erro! Preencha todos os campos";
// alert(mensagemErro);
// //8.Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
// let nomeUsuario = prompt("Digite seu nome: ");
// // 9. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// let idadeUsuario = prompt("Digite sua idade: ");
// // 10. Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
// if (idadeUsuario >= 18) {
//   alert("Pode tirar habilitação");
// } else {
//   alert("Você é menor de idade.");
// }
// // 11. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// let diaSemana = prompt("Que dia da semana é hoje?").toLowerCase();

// if (diaSemana === "sábado" || diaSemana === "domingo") {
//   alert("Bom final de semana!");
// } else {
//   alert("Boa semana!");
// }
// // 12. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// let numeroInput = Number(prompt("Digite um número de 0 a 100: "));

// if (numeroInput % 2 === 0) {
//   alert(`O número ${numeroInput} é par`);
// } else {
//   alert(`O número ${numeroInput} é ímpar!`);
// }
// // 13. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
// let pontuacaoJogo = Number(prompt("Quantos pontos você fez nessa rodada?"));
// if (pontuacaoJogo >= 100) {
//   alert("Parabéns, você venceu!");
// } else {
//   alert("Tente novamente para ganhar");
// }

// // 14. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// let saldo = 1000;

// alert(`Seu saldo atual é de R$${saldo},00.`);

// // 15. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// let nomeSaudacao = prompt("Digite seu nome: ");

// alert(`Bem vindo(a) ${nomeSaudacao} ao nosso site!`);

// // 16. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// let contador1 = 1;
// while (contador1 <= 10) {
//   alert(contador1);
//   contador1++;
// }

// // 17. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador2 = 10;

// while (contador2 >= 0) {
//   alert(contador2);
//   contador2--;
// }

// // 18. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// let contador3 = 5;
// while (contador3 >= 0) {
//   console.log(contador3);
//   contador3--;
// }

// // 19. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// let contador4 = 0;
// while (contador4 <= 8) {
//   console.log(contador4);
//   contador4++;
// }

// // 20. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// let saudacao = "Seja bem vindo"

// console.log(saudacao)

// // 21. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// let meuNome = "Gabrielle"

// console.log("Olá", meuNome, "!")

// // 22. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!"

//*HERE

/* // let nome1 = "Natalie"

// alert("Olá", nome1, "!")

// 23. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let favLinguagem = prompt("Qual linguagem de programação que você mais gosta?");

console.log("Sua lingaguem favorita é:", favLinguagem);

// 24. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = Number(prompt("Digite um número:"));
let valor2 = Number(prompt("Digite outro número:"));

let somaRasultado = valor1 + valor2;

console.log(`A soma de ${valor1} + ${valor2} = ${somaRasultado}`);

// 25. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = Number(prompt("Digite um número:"));
let valor4 = Number(prompt("Digite outro número:"));

let subResultado = valor3 - valor4;
console.log(`A subtração de ${valor3} - ${valor4} = ${subResultado}`); */

// 26. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numUsuario = Number(prompt("Digite um número:"));

if (numUsuario > 0) {
  console.log(`O número ${numUsuario} é POSITIVO!`);
} else if (numUsuario < 0) {
  console.log(`O número ${numUsuario} é NEGATIVO!`);
} else {
  console.log(`O número ${numUsuario} é ZERO!`);
}

// 27. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let notaAluno = Number(prompt("Digite sua nota da prova:"));
if (notaAluno >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado");
}

//28. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numAleatorio = parseInt(Math.random() * 100 + 1);

console.log(numAleatorio);

