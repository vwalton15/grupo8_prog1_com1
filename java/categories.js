const itemsCategories = document.querySelector('.itemsCategories')

fetch('https://dummyjson.com/recipes/tags')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const itemsCategories = document.querySelector('.itemsCategories')

        let categorias = '';

        for (let i = 0; i < data.length; i++) {
            const categoria = data[i];
            categorias +=
                `
         <ol class="lista_categories">
           <li class="categories"><a class="categories1" href="./category.html?tag=${categoria}">${categoria}</a></li>
         </ol>
      
            `



        }
        itemsCategories.innerHTML = categorias;
    })
    .catch(function (error) {
        console.log(error)
    });