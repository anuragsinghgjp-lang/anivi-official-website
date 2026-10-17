const SERVER_IP = "anivismp.pixelforge.gg";
const copyButton = document.getElementById("copyIp");
const toast = document.getElementById("toast");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(SERVER_IP);
    toast.textContent = "Server address copied!";
  } catch (error) {
    toast.textContent = "Server IP: " + SERVER_IP;
  }
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});
