// mensagem inicial
console.log("Portfólio carregado com sucesso!");

// selecionar todos os links do menu
const linksMenu = document.querySelectorAll("nav a");

// adicionar evento de clique
linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navegando para:", link.textContent);
    });
});