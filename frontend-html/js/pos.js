const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

const items = []

function renderCart() {
    const ul = document.getElementById('items')
    items.forEach(e => {
        const li = document.createElement('li')
        const span = document.createElement('span')
        const span2 = document.createElement('span')
        const img = document.createElement('img')
        img.src = e.img
        img.width = 100
        span.textContent = e.name
        span2.textContent = e.price.toLocaleString()
        li.appendChild(img)
        li.appendChild(span)
        li.appendChild(span2)
        ul.appendChild(li)
    })
}

async function getMeals() {
  const response = await fetch(API)
  const data = await response.json()
  console.log(data)
  const meals = data.meals
  const ul =  document.getElementById('product-list')
  meals.forEach(e => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const span = document.createElement('span')
    const h3 = document.createElement('h3')
    const price = Math.floor(Math.random() * 10000)
    li.addEventListener('click',()=> {
        const item = {
            name: e.strMeal,
            price,
            quantity: 1,
            img: e.strMealThumb
        }
        items.push(item)
        renderCart()
    })
    img.src = e.strMealThumb
    span.textContent = e.strMeal
    h3.textContent = price.toLocaleString()
    li.appendChild(img)
    li.appendChild(span)
    li.appendChild(h3)
    ul.appendChild(li)
  });
}
// call
getMeals()

