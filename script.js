function enviarPedido(produto, preco) {
  const email = "kwormer77@gmail.com"; // Substitua pelo e-mail desejado

  const assunto = `Pedido de Compra - ${produto}`;

  const corpo = `
    Olá, patrão!

    Gostaria de comprar o seguinte produto:

    Produto: ${produto}
    Preço: ${preco}

    Insira aqui o tamanho da roupa que você deseja (XS, S, M, L, XL, XXL): [TAMANHO DA ROUPA]

    Aqui está o meu MB Way para efetuar o pagamento: +351 968 918 942

    Caso você queira pagar de outra forma, entre em contato comigo.

    Morada: [INSIRA AQUI A SUA MORADA]

    Insira o seu nome completo: [NOME COMPLETO]

    Insira o nº de telemóvel que vai fazer o pagamento por MB Way: [Nº DE TELEMÓVEL]

    Mande também um print apenas para confirmação.

    Obrigado!
  `;

  const assuntoCodificado = encodeURIComponent(assunto);
  const corpoCodificado = encodeURIComponent(corpo);

  window.location.href = `mailto:${email}?subject=${assuntoCodificado}&body=${corpoCodificado}`;
}

// Menu responsivo
document.querySelector(".menu-icon").addEventListener("click", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  navLinks.classList.toggle("show");
  menuIcon.classList.toggle("active");

  // Altera o conteúdo do ícone
  menuIcon.textContent = menuIcon.classList.contains("active") ? "✖" : "☰";
});

// Captura os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const produto = urlParams.get("produto");

// Define as informações com base no parâmetro 'produto'
if (produto === "calca-levis") {
  document.querySelector(".produto-detalhes h1").textContent = "Detalhes da Calça Levi's";
  document.querySelector(".informacoes-produto p").textContent = "Descrição: Calça Levi's de alta qualidade, ideal para qualquer ocasião.";
  document.querySelector(".informacoes-produto button").setAttribute("onclick", "enviarPedido(\"Calça Levi's\", '43€')");
}
