document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("btnEnviar");
const msg = document.getElementById("msg");
btn.addEventListener("click", () => {
    msg.textContent = "Gracias, pronto nos pondremos en contacto (demo).";
    setTimeout(()=> msg.textContent = "", 3500);
});
