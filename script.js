function enviarPedido(produto, preco) {
  const email = "kwormer77@gmail.com" // Substitua pelo e-mail onde deseja receber os pedidos
  const assunto = `Pedido de Compra - ${produto}`
  const corpo = `Olá,\n\nGostaria de comprar o seguinte produto:\n\nProduto: ${produto}\nPreço: ${preco}\n\nPor favor, envie as instruções para pagamento via transferência bancária.\n\nObrigado.`

  // Abrir o Gmail com o e-mail preenchido
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    assunto
  )}&body=${encodeURIComponent(corpo)}`
}

// Seleciona o ícone do menu e a lista de links
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique ao ícone
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show'); // Alterna a classe 'show'
});
