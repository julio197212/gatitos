const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      menuToggle.textContent = "☰";
    });
  });
}

const messages = [
  "Tu presencia es el lugar favorito de alguien. 🐾",
  "Hoy mereces una siesta al sol y muchos ronroneos. ☀️",
  "Respira, estírate y sigue adelante como un gato feliz. 💗",
  "Un pequeño ronroneo puede mejorar un gran día. 🐱",
  "Recuerda: eres increíble. Atentamente, un gato imaginario. 😸"
];

const messageButton = document.querySelector("#cat-message-button");
const messageOutput = document.querySelector("#cat-message");

if (messageButton && messageOutput) {
  messageButton.addEventListener("click", () => {
    const current = messageOutput.dataset.index;
    let next = Math.floor(Math.random() * messages.length);
    if (messages.length > 1 && String(next) === current) next = (next + 1) % messages.length;
    messageOutput.dataset.index = String(next);
    messageOutput.textContent = messages[next];
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
