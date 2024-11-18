const recipeList = document.querySelector(".recipeList");
const cargarMasboton = document.querySelector(".CargarMas")

let skip = 0;
const limit = 10;

cargarMasboton.addEventListener("click", function (){
	fetch(`https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`)

	.then(function(response){
	return response.json();
})
	.then(function(data){
		if (data.recipes && data.recipes.length > 0) {
		let recetas = ' ';

		for(i = 0; i < data.recipes.length; i ++) {
			const receta = data.recipes[i];
			recetas +=
			`<article>
				<img src='${receta.image}' alt='${receta.name}' class="img-recipe">
				<p>Nombre: <a href="receta.html?id=${receta.id}"> ${receta.name}</p> </a> 
				<p>Dificultad:${receta.difficulty}</p>
			</article>`;
		}
	recipeList.innerHTML += recetas;
	skip += limit;
	} else{
		cargarMasboton.innerHTML= ("No se encuentran mas recetas")
		cargarMasboton.disabled = true;
	}
})
	.catch(function(error){
	console.log(error);
})
})
cargarMasboton.click();