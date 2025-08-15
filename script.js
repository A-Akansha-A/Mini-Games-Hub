document.querySelectorAll(".game-card").forEach(card => {
    card.addEventListener("click", () => {
        const gamePage = card.getAttribute("data-game");
        window.location.href = gamePage;
    });
});
