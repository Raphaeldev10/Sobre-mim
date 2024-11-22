
document.getElementById("welcome-btn").addEventListener("click", function () {
    const userName = document.getElementById("username").value;

    if (userName.trim() !== "") {
        document.getElementById("welcome-message").textContent = `Olá, ${userName}! Seja bem-vindo(a) à minha página pessoal!`;
    } else {
        document.getElementById("welcome-message").textContent = "Por favor, digite seu nome antes de clicar no botão.";
    }
});
