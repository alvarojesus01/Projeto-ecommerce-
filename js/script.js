// Menu responsivo: abre e fecha no celular.
const botaoMenu = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu-principal");

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.querySelector("span").textContent = aberto ? "Fechar menu" : "Abrir menu";
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.querySelector("span").textContent = "Abrir menu";
  });
});

// Cálculo de frete demonstrativo usando if/else.
// Não consulta transportadoras; as faixas são fictícias para o projeto escolar.
const formFrete = document.querySelector("#form-frete");
const campoCep = document.querySelector("#cep");
const resultadoFrete = document.querySelector("#resultado-frete");

formFrete.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const cep = campoCep.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    resultadoFrete.textContent = "Digite um CEP válido com 8 números.";
    return;
  }

  const primeiroDigito = Number(cep[0]);
  let valor;
  let prazo;

  if (primeiroDigito <= 2) {
    valor = "R$ 12,90";
    prazo = "2 a 4 dias úteis";
  } else if (primeiroDigito <= 5) {
    valor = "R$ 18,90";
    prazo = "4 a 6 dias úteis";
  } else {
    valor = "R$ 24,90";
    prazo = "6 a 9 dias úteis";
  }

  resultadoFrete.textContent = `Frete estimado: ${valor} • Prazo: ${prazo}. (Simulação acadêmica)`;
});

// Validação nativa e mensagem de retorno do formulário.
const formContato = document.querySelector("#form-contato");
const resultadoContato = document.querySelector("#resultado-contato");

formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!formContato.checkValidity()) {
    formContato.reportValidity();
    return;
  }

  const nome = document.querySelector("#nome").value.trim();
  resultadoContato.textContent = `Obrigado, ${nome}! A validação foi concluída. Este formulário é uma demonstração e não envia dados.`;
  formContato.reset();
});

// Interação demonstrativa dos botões da vitrine.
const mensagemCarrinho = document.querySelector("#mensagem-carrinho");
document.querySelectorAll(".adicionar").forEach((botao) => {
  botao.addEventListener("click", () => {
    mensagemCarrinho.textContent = `${botao.dataset.produto} foi selecionado! (Carrinho demonstrativo)`;
  });
});
