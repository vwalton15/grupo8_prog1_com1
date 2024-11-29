let queryString = window.location.search;
let obj = new URLSearchParams(queryString);
let id = obj.get("id");

let url = `https://dummyjson.com/recipes/${id}`;

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        let nombre = document.querySelector("#nombre-receta")
        let imagen = document.querySelector("#img-receta")
        let tiempo = document.querySelector("#tiempo-receta")
        let categoria = document.querySelector("#categoria-receta")
        let instrucciones = document.querySelector("#instrucciones-receta")

        nombre.innerHTML += `${data.name}`
        imagen.src = `${data.image}`
        tiempo.innerHTML += `${data.cookTimeMinutes} minutos`

        if (data.tags && data.tags.length > 0)
            for (let index = 0; index < data.tags.length; index++) {
                const tag = data.tags[index]
                categoria.innerHTML += `<a href="category.html?tag=${tag}" class="categoriadetalle-link">| ${tag} |</a>`
            }
        instrucciones.innerHTML += `${data.instructions}`

    })
    .catch(function (error) {
        console.log(error);
    })

