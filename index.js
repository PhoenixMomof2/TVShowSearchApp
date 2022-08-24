const BASE_URL = 'http://api.tvmaze.com'
let reset = document.getElementById('reset')
let filterBtn = document.querySelectorAll('#filterBtn')
let filteredData = []


window.addEventListener('DOMContentLoaded', () => {
fetchTvShows()
reset.onclick = () => fetchTvShows()


function fetchTvShows(){
   fetch(BASE_URL + `/shows`)
  .then(res => res.json())
  .then(data => {
        // console.log(data)
        // add each show from JSON object to the DOM as li tags with links attached
        // add an event listener to make sure the links are live on page load
        data.forEach(show => {
          const ul = document.getElementById('show-list')
          ul.innerHTML += `<li><a href="#" data-id="${show.id}">${show.name}</a></li>`
        })
        activateLinks()
      })
    }     
     
    const activateLinks = () => {
      const links = document.querySelectorAll('a')
      links.forEach((show) => {
        show.addEventListener('click', displayShowDetails)
      })
    }
    const displayShowDetails = (e) => {
      // console.log (e.target.dataset.id)
      const showDetails = document.getElementById('details')
      const ul = document.getElementById('show-list')
      ul.innerHTML = ''
      fetch(BASE_URL + `/shows/${e.target.dataset.id}`)
      
      .then(res => res.json())
      .then(show => {

          showDetails.innerHTML = `<h1>${show.name}</h1>
              <h2>Summary: </h2>
              <p>${show.summary}</p>
              <h3>Genres: </h2>
              <p>${show.genres.join(", ")}</p>
              <h3>Show Poster</h2>
              <a href=${show.image.medium}><img src=${show.image.medium} class=show-poster alt=show-image></img></a>
              <h3>Official Site: </h3>
              <p>${show.officialSite}</p>`
      })
    }

    filterBtn.forEach(btn => {
      btn.addEventListener('click', () => {
      // console.log(e.target)
      let ul = document.getElementById('show-list')
      ul.innerHTML =''
      fetch(BASE_URL + `/shows`)
      .then(res => res.json())
      .then(data => {
        
        let filteredData = data.filter((show) => {return show.genres.includes(`${btn.innerText}`)})
        console.log(filteredData)
        filteredData.forEach(show =>
          {
            let ul = document.getElementById('show-list')
            // ul.innerHTML =''
            ul.innerHTML += `<li><a href="#" data-id="${show.id}">${show.name}</a></li>`
            fetchTvShows(`${btn.innerText}`)
            // reset.onclick = () => fetchTvShows(`${btn.innerText}`)
          })
        })
        .catch(err => console.error(err))
        
      })
      
    })
  })
  



/* I want to be able to click on the filter button, filter the show
  data based on genre, render filtered array to page with same link 
  capabilities as the page load.
*/
   
  
  
// address scoping issues by breaking up the functions
// event.target is the a tag that is clicked
// data-id adds the id index of the show so only one show is fetched with id is used.
// Each show is added to the list as a link.
// href # takes you to the top of the page.
// document.getElementById("list").addEventListener("click", fillDiv);
//create a function the addEventListener to the click of each show element and after the click, 
//capture the info from the element I clicked on
//I need a callback function to be called that will clear the page (where were the elements appended; explore the path to remove)
//append the details to the page
