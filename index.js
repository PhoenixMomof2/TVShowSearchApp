const BASE_URL = 'http://api.tvmaze.com'

window.addEventListener('DOMContentLoaded', () => {
  searchShowList()
})

function searchShowList(query) {
  const ul = document.getElementById('show-list')

   fetch(BASE_URL + `/search/shows?q=${query}`)
  .then(response => response.json())
  .then(data => {
        // console.log(data)
        data.filter(show => {
        ul.innerHTML += `
        <li>${show.name}</li>
        `
     })
  })
}

// button.addEventListener('click', () => {
//   function listSciFiShows (e) {

//   }
// })