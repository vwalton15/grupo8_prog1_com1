
document.getElementById("#CargarMas"),addEventListener("click", function (){

	fetch('https://dummyjson.com/recipes?limit=10&skip=0&select=name,image')
	.then(function(response){
	return response.json();
})
	.then(function(data){
		const recipeList = document.querySelector(".recetas")
		let receta = ' ';

		for(i = 0; i < data.results.length; i ++) {

			const recetas = data.results[i];
			receta +=
			`<article>
				<img src='${recetas.image}' alt='${recetas.name}'>
				<p>Nombre: <a href="receta.html?id=${recetas.id}"> ${recetas.name}</p> </a> 
				<p>Dificultad:${recetas.difficulty}</p>
				<p>`
		}
	console.log(data);
})
	.catch(function(error){
	console.log('El error es: ' + error);
})
})
