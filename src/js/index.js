/*
 
 Objetivo 1 - quandoo ususario clicar no botão de selecão de platafomas deve abrir uma caixa com os botões de selecão de plataforma

  Passo 1 - pegar o botão de selecão e plataforms no J5 pra poder verificar quando o usuario clicar em cima dele

   Paaso 2 - pegar o elemento do conteudo que precisa ser mostrado

   Passo 3 - pegar o clique do usuario no js

   Passo 4- quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo dele apareça


 Objetivo 2 - caso a lista de botões de plataformas ja estava aparecendo e o usuario clicarem cima do botão, o conteúdo deve ser escondido

 Passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente

 */

// Objetivo 1 - quandoo ususario clicar no botão de selecão de platafomas deve abrir uma caixa com os botoes de selecão de plataforma

// Passo 1 - pegar o botão de selecão e plataforms no J5 pra poder verificar quando o usuario clicar em cim dele

const botao = document.querySelector(".btn-plataforma");

const elementoplataforma = documnt.querySelector(
  "btn-plataforma .plataformas"
);

botao.addEventListener("click", () => {
  const botaoEstaAberto = elementoplataforma.classlist.toggle("ativo");
});
