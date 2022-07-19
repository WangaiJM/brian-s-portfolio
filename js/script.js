const nav = document.querySelector(".navigation");
const btn = document.querySelector(".hambuger");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
