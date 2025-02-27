// Efeito de scroll na navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
});

// carregar menu
document.addEventListener('DOMContentLoaded', function() {
    // Carrega o menu do arquivo menu.html
    fetch('/assets/menu.html') // Caminho absoluto para o menu centralizado
        .then(response => response.text())
        .then(data => {
            // Insere o conteúdo do menu no placeholder
            document.getElementById('menu-placeholder').innerHTML = data;
            // Adiciona o evento de clique ao botão do menu
            setupMenu();
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
});

function setupMenu() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuButton.addEventListener('click', function() {
        // Alterna a classe 'active' no menu
        menu.classList.toggle('active');
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
}