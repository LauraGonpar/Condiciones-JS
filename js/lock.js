const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const pass3 = document.querySelector("#pass3");
const mensaje = document.querySelector(".mensaje");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let password = pass1.value + pass2.value + pass3.value;
  if (password === "911") {
    mensaje.innerHTML = "Password 1 correcto";
  } else if (password === "714") {
    mensaje.innerHTML = "Password 2 correcto";
  } else {
    mensaje.innerHTML = "Password incorrecto";
  }
});
