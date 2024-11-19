fetch('https://dummyjson.com/recipes/meal-type/snack')
.then(function(response){
    return response.json();
})
.then(function(data){
    const itemsCategories = document.querySelector('.itemsCategories')
})