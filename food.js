const searchFood = () => {
    const searchField = document.getElementById('search-field')
    let searchItem = searchField.value
    searchField.value = ''

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`

    fetch(url)
        .then(res => res.json())
        .then(foods => displayMeal(foods))

}
let container = document.getElementById('food-container')
function displayMeal(foods) {
    foods.meals.map(food => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card"  style="width: 20rem;">
            <img src="${food.strMealThumb}" "  class="card-img-top" width=100;>
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 250)}</p>
                <button class="btn btn-primary" onClick="loadID(${food.idMeal})">Show Details</button>
            </div>
        </div>
    `
        container.appendChild(div)
    })
}


function loadID(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(meals => showDetails(meals))
}



function showDetails(meals) {
    let detail = document.getElementById('show-detail')
    meals.meals.map(meal => {
        const div = document.createElement('div');
        div.classList.add('card')
        div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h2 class="card-text">${meal.strMeal}</h2>
          <h5 class="card-title">${meal.strArea, meal.strCategory}</h5>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go Youtube</a>
        </div>`
        detail.appendChild(div)
    })
}