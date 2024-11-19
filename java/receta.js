let queryString = window.location.search;
let obj = new URLSearchParams(queryString);
let id = obj.get("id")
 console.log(id)

 let url = `https://dummyjson.com/recipes/${id}`
fetch (url);
    .then(function (response){
	return response.json();
})
    .then(function (data){
        let nombre = document.querySelector(".nombre-receta")
        let img = document.querySelector(".img-receta")
        let tiempo = document.querySelector(".tiempo-receta")
        let categoria = document.querySelector(".categoria-receta")
        let instrucciones = document.querySelector(".instrucciones-receta")
    
        nombre.innerHTML += `${data.nombre}`
        img.innerHTML += `${data.img}`
        tiempo.innerHTML += `${data.tiempo}`
        categoria.innerHTML += `${data.categoria}`
        instrucciones.innerHTML += `${data.instrucciones}`
    
})
	.catch(function(error){
	console.log('El error es: ' + error);
})

