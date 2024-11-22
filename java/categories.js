const itemsCategories = document.querySelector('.itemsCategories')

fetch('https://dummyjson.com/recipes/tags')
.then(function(response){
    return response.json();
})
.then(function(data){
    let categorias = ' ';

  
    for (let i = 0; i < data.tags.length; i++) {
        const categoria = data.tags[i];
        categorias += 
        `<div>
            `
        
    }
})