
let queryString = window.location.search;
let obj = new URLSearchParams(queryString);
let busqueda = obj.get("search");
console.log(busqueda);

let contenedor = document.querySelector(".result")

if (busqueda.length < 3) {
   contenedor.innerHTML = `<h3 class="error_busqueda">El término de búsqueda debe tener al menos 3 caracteres.</h3>`;
} else {
   fetch(`https://dummyjson.com/recipes/search?q=${busqueda}`)
      .then(function (response) {
         return response.json();
    })

   .then(function (data) {
      let result = data.recipes;

      if (!result || result.length === 0) {
         let mensajeError = `<h3 class="error_busqueda">No hay coincidencias disponibles.
            Ninguna receta corresponde a "${busqueda}".</h3>`;

         contenedor.innerHTML = mensajeError;
         return;
      }

      for (let i = 0; i < result.length; i++) {

         let receta = result[i];
         console.log(receta);
         contenedor.innerHTML += `

        <div class="contenedor_result">
          <h1 class="nombre_search">${receta.name}</h1>
          <img src="${receta.image}" alt="Imagen de ${receta.name}" class="search_imagen">
          <h3 class="cocina_search">Cocina: ${receta.cuisine}</h3>
           <a href="receta.html?id=${receta.id}" class="search_id">Ver receta</a>
         </div> `
      }


   })

   .catch(function (error) {
      console.log(`Se encuentra un error en : ${error}`);

   });
}