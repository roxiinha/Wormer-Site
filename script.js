function enviarPedido(produto, preco) {
  const email = "kwormer77@gmail.com" // Substitua pelo e-mail onde deseja receber os pedidos
  const assunto = `Pedido de Compra - ${produto}`
  const corpo = `Olá,patrão!\n\nGostaria de comprar o seguinte produto:\n\nProduto: ${produto}\nPreço: ${preco}\n\nInsira aqui o tamanho da roupa que você deseja (XS,S,M,L,XL,XXL): (tamnho da roupa)\n\nAqui está o meu MB Way para efetuar o pagamento: +351 968 918 942\n\nCajo você quiser pagar noutra forma tem de falar comigo.\n\nMorada:  ( insira aqui a sua morada)\n\nInsira o seu nome todo: (insira aqui o seu nome)\n\nInsira o nº de telemovél que vai fazer o pagamento por MB Way: (nº de telemovél do pagamento)\n\nMande também um print só por confirmidade.\n\nObrigado.`

  // Abrir o Gmail com o e-mail preenchido
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    assunto
  )}&body=${encodeURIComponent(corpo)}`
}

document.querySelector(".menu-icon").addEventListener("click", () => {
  const menuIcon = document.querySelector(".menu-icon")
  const navLinks = document.querySelector(".nav-links")

  navLinks.classList.toggle("show")
  menuIcon.classList.toggle("active")

  // Altera o conteúdo do ícone
  menuIcon.textContent = menuIcon.classList.contains("active") ? "✖" : "☰"
})

// script.js (Exemplo)
const urlParams = new URLSearchParams(window.location.search);
const produto = urlParams.get('produto');

// Aqui você pode definir as informações com base no parâmetro 'produto'
if (produto === 'calca-levis') {
  document.querySelector('.produto-detalhes h1').textContent = 'Detalhes da Calça Levi\'s';
  document.querySelector('.informacoes-produto p').textContent = 'Descrição: Calça Levi\'s de alta qualidade, ideal para qualquer ocasião.';
  document.querySelector('.informacoes-produto button').setAttribute('onclick', "enviarPedido('Calça Levi\'s', '43 €')");
  // Adicione as imagens adicionais conforme necessário
}

