let queryStrin = location.search;
let obj = new URLSearchParams(querystring);
let palabra_Buscada = obj.get("search");

fetch(`https://dummyjson.com/recipes/search?q=${palabra_Buscada}`)
   .then(function(response){
       return response.json();
   })



