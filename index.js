const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");

boton1.addEventListener("click", () => {
  document.body.classList.remove("sun-mode");
  document.body.classList.add("moon-mode");
});

boton2.addEventListener("click", () => {
  document.body.classList.remove("moon-mode");
  document.body.classList.add("sun-mode");
});
