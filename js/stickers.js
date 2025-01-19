const btn = document.querySelector(".btn");
const mensaje = document.querySelector(".mensaje");

btn.addEventListener("click", () => {
  const rayo = Number(document.querySelector(".rayo").value);
  const boo = Number(document.querySelector(".boo").value);
  const bee = Number(document.querySelector(".bee").value);

  let total = rayo + boo + bee;
  let faltantes = 10 - total;
  if (total == 10) {
    mensaje.innerHTML = "Llegaste al limite de stickers permitidos";
  } else if (total > 10) {
    mensaje.innerHTML = "Excediste la cantidad de stickers permitidos";
  } else {
    mensaje.innerHTML = `Tienes ${total} stickers. Te faltan ${faltantes} para completar la cantidad.`;
  }
});
