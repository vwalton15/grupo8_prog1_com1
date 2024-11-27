let queryString = window.location.search;
let parametro = new URLSearchParams(queryString);
let categoria = parametro.get("tag");

const ListaRecetas = document.querySelector(".lista-categorias")

let nombreCategoria = document.querySelector(".categoria-nombre")
nombreCategoria.textContent = `Categoria: ${categoria}`

fetch (`https://dummyjson.com/recipes`)
    .then(function(response){
	return response.json();
})
	.then(function(data){
    const recetas = data.recipes;
    const ListaRecetas = document.querySelector(".lista-categorias")
    let receta = "";

    for (let i = 0; i < recetas.length; i++) {
        const recetario = recetas[i];
        
        if (recetario.tags){
            for (let index = 0; index < recetario.tags.length; index++) {
                if (recetario.tags[index] === categoria) {
                    ListaRecetas.innerHTML +=
                        ` <li>
                            <h2 class="categoria-titulo">${recetario.name}</h2>
                            <img class="categoria-img" src="${recetario.image}" alt="${recetario.name}">
                            <p class="categoria-dificultad">Difficulty: ${recetario.difficulty}</p>
                            <a href="./receta.html?id=${recetario.id}" class="categoria-link">Ver detalle</a>
                        </li>`
                }
                
            }
        }  
        else {
            ListaRecetas.innerHTML =  "<p>No hay recetas disponibles para esta categoria</p>"
            }  
    }
})
	.catch(function(error){
	console.log(error);
})
