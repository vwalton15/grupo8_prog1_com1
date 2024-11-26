let queryString = window.location.search;
let parametro = new URLSearchParams(queryString);
let categoria = parametro.get("tag");

const ListaRecetas = document.querySelector(".lista-categorias")

let nombreCategoria = document.querySelector(".categoria-nombre")
nombreCategoria.textContent = `Categoria: ${categoria}`

fetch (`https://dummyjson.com/recipes/tag/${categoria}`)
    .then(function(response){
	return response.json();
})
	.then(function(data){
    const recetas = data.recipes;
    let receta = "";
    
    for (let i = 0; i < recetas.length; i++) {
        const recetario = recetas[i];
                    ListaRecetas.innerHTML +=
                        ` <li>
                            <h2 class="categoria-titulo">${recetario.name}</h2>
                            <img class="categoria-img" src="${recetario.image}" alt="${recetario.name}">
                            <p class="categoria-dificultad">Difficulty: ${recetario.difficulty}</p>
                            <a href="./receta.html?id=${recetario.id}" class="categoria-link">Ver detalle</a>
                        </li>`
                }
                
            }
    )
	.catch(function(error){
	console.log(error);
})
