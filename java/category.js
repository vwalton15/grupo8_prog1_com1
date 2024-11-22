let queryString = window.location.search;
let parametro = new URLSearchParams(queryString);
let categoria = parametro.get("tag");

fetch (`https://dummyjson.com/recipes`)
    .then(function(response){
	return response.json();
})
	.then(function(data){
	console.log(data);

    const recetas = data.recipes;
    const ListaRecetas = document.querySelector(".lista-categorias")
    let receta = "";

    for (let i = 0; i < recipes.length; i++) {
        const recetario = recipes[i];
        
        if (receta.tags && receta.tags) {
            
        }
    }
})
	.catch(function(error){
	console.log('El error es: ' + error);
})
