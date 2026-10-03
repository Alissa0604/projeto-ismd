document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os blocos individuais de "antes" e "depois"
    const cards = document.querySelectorAll('[class^="antes"], [class^="depois"]');

    // Configuração do observador de intersecção
    const observerOptions = {
        root: null,
        rootMargin: "20px 5px -40px 5px", // Margem suave no fundo da janela
        threshold: 0.5 // Requer 50% do elemento visível
    };

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe quando entra na ecrã (descer ou subir)
                entry.target.classList.add("in-view");
            } else {
                // Remove a classe quando sai da ecrã para repetir o efeito na rolagem oposta
                entry.target.classList.remove("in-view");
            }
        });
    }, observerOptions);

    // Observa continuamente todos os cards
    cards.forEach(card => {
        cardObserver.observe(card);
    });
});