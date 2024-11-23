let queryString = location.search;
let obj = new URLSearchParams(queryString);
let palabra_Buscada = obj.get("search");
console.log(palabra_Buscada)

fetch(`https://dummyjson.com/recipes/search?q=${palabra_Buscada}`)
   .then(function(response){
       return response.json();
   })

   .then(function (data){
      console.log(data.recipes);

     let result = document.querySelector(".result");

     if (!palabra_Buscada) {
        result.innerText = "La búsqueda está vacía"
        return; 
     }

     if (!data.recipes || data.recipes.length === 0){
        result.innerText = "No hay ninguna reecta";
     } else{
        let resultados = [];

        for (let i = 0; i < data.recipes.length; i++) {
            let res = data.recipes[i];
            resultados.push(res)
            
        }

        if (resultados.length === 0){
            result.innerText = `No existen resultados relacionados con tu búsqueda: "${palabra_Buscada}`;

        } }
   })
    