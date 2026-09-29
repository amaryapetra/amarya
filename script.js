document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const contrastToggle = document.getElementById("contrastToggle");
const root = document.documentElement;

function syncContrastButton() {
  const isHigh = root.getAttribute("data-contrast") === "high";
  contrastToggle.setAttribute("aria-pressed", String(isHigh));
  contrastToggle.textContent = isHigh ? "High contrast: On" : "High contrast: Off";
}

contrastToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-contrast") === "high" ? "normal" : "high";
  if (next === "high") root.setAttribute("data-contrast", "high");
  else root.removeAttribute("data-contrast");
  try { localStorage.setItem("contrast", next); } catch (e) {}
  syncContrastButton();
});

syncContrastButton();
