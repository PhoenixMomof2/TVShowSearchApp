const BASE_URL = 'http://api.tvmaze.com'
let showData = []
let filteredData = []

window.addEventListener('DOMContentLoaded', () => {
  displayAllShows()
  // document.getElementsByClassName("btn").addEventListener('click', displayShowList)
})

function displayAllShows() {
  const ul = document.getElementById('show-list')

   fetch(BASE_URL + `/shows`)
  .then(response => response.json())
  .then(data => {
        // console.log(data)
        showData = data
        // console.log(showData)
        data.forEach(show => {
          // console.log(show.genres)
        ul.innerHTML += `
        <li><a href="#">${show.name}</a></li>
        `
     })
    //  clickShowLinks()
  })
}

function filterSelection(genre) {
  // console.log(genre)
  let filteredData = showData.filter((show) => {return show.genres.includes(genre)
  })
   console.log(filteredData)
    // filteredData.filter(show => {
    //     ul.innerHTML += `
    //     <li><a href="#">${show.name}</a></li>
    //     ` 
    // })
    // clickShowLinks()
  }
  





// const clickShowLinks = () => {
//     const shows = document.querySelectorAll('a')
//     shows.forEach((show) => {
//         show.addEventListener('click', displaySelectedShow)
//     })
// }

// const displaySelectedShow = (event) => {
//     // console.log(event.target.dataset.genres)
//     const details = document.getElementById('details')
//     const ul = document.getElementById('show-list')
//     ul.innerHTML = ''

    // fetch(BASE_URL + `/shows/${event.target.dataset.genres}`)
    // .then(response => response.json())
    // .then(data => {
    //    console.log(data)
    // })
// }



// data-id adds the id index of the show so only one show is fetched with id is used.
// Each show is added to the list as a link.
// href # takes you to the top of the page.
