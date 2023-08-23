let btn = document.getElementById("agregar")

btn.addEventListener("click", () => {

let item = document.getElementById("item").value;
let data = JSON.parse(localStorage.getItem("lista")) || [];
data.push(item);

localStorage.setItem("lista", JSON.stringify(data));
let container = document.getElementById("contenedor");
let index = data.length -1
container.innerHTML += `<div>${data[index]}<br></div>`;
document.getElementById("item").value = "";
})


let remove = document.getElementById("limpiar")

remove.addEventListener("click", () => {
localStorage.removeItem("lista");
let container = document.getElementById("contenedor");
container.innerHTML = ""


})

document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("contenedor");
    let data = JSON.parse(localStorage.getItem("lista")) || [];
   
    data.forEach(element => {
        container.innerHTML += `<div>${element}<br></div>`
    });
})