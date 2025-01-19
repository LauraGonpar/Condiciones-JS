let imagen = document.querySelector("img");

imagen.addEventListener("click", () => {
  if (imagen.style.border == "2px solid red") {
    imagen.style.border = "";
    imagen.style.borderRadius = "10px";
  } else {
    imagen.style.border = "2px solid red";
  }
});
