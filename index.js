const BASE_URL = 'http://api.tvmaze.com'

// 'https://api.teleport.org/api/urban_areas/?embed=ua:item/ua:images'

window.addEventListener('DOMContentLoaded', () => {
  getShowList()
})

function getShowList() {
  const ul = document.getElementById('show-list')

   fetch(BASE_URL + '/shows')
  .then(res => res.json())
  .then(data => {
        console.log(data)
        // data.forEach(show => {
        // ul.innerHTML += `
        // <li>${show.name}</li>
        // `
     })
  }


// GET --header "Accept: application/vnd.teleport.v1+json" "https://api.teleport.org/api/cities/?search=Baltimore%2C%20Atlanta%2C%20Dallas%2C%20Charlotte%2C%20Washington%20DC%2C%20Philadelphia%2C%20Nashville&limit=7"

// https://api.teleport.org/api/cities/?search=Baltimore%2C%20Atlanta%2C%20Dallas%2C%20Charlotte%2C%20Washington%20DC%2C%20Philadelphia%2C%20Nashville&limit=7