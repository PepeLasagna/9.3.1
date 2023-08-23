let btn = document.getElementById("agregar")

btn.addEventListener("click", () => {

let item = document.getElementById("item").value;
let data = JSON.parse(localStorage.getItem("lista")) || [];
data.unshift(item);

localStorage.setItem("lista", JSON.stringify(data));
let container = document.getElementById("contenedor");
container.innerHTML += `<div>${data[0]}<br></div>`;
document.getElementById("item").value = "";
})



