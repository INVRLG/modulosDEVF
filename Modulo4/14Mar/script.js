import apikey from "./apikey.js";

const API_URL = `https://crudcrud.com/api/${apikey}/items` //string template 

const entradaNombre = document.getElementById("articulo");
const precioCantidad = document.getElementById("precio");
const itemContainer = document.getElementById("article-container");
const itemForm = document.getElementById("crud-form");

function loadItems(){
    fetch(API_URL)
    .then(Response => Response.json())
    .then(articulo =>{
        console.log(articulo)
    }) 
}

itemForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newItem={
        articulo: entradaNombre.value,
        precio: precioCantidad.value
    }

    fetch(API_URL, {
        method : "POST",
        body: JSON.stringify(newItem),
        headers: {
            "Content-type":"application/json"
        }
        })
        .then(Response => {
            console.log(Response)
        })
    })


document.addEventListener("DOMContentLoaded", function(){
    loadItems()
})


