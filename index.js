const BASE_URL = 'https://developers.teleport.org/api/'

window.addEventListener('DOMContentLoaded', () => {
  getCityData()
})

function getCityData() {
  const ul = document.getElementById('city-list')

  fetch (BASE_URL + '/cities/')
  .then(res => res.json())
  data.forEach(city => {
    ul.innerHTML +=
      <li>${city.name}</li>
  })
  }


