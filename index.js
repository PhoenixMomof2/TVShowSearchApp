const BASE_URL = 'http://api.tvmaze.com'
let showData = []
let filteredData = []

document.addEventListener('DOMContentLoaded', () => {

function displayAllShows() {
  // const ul = document.getElementById('show-list')
  // ul.innerHTML = ''

   fetch(BASE_URL + `/shows`)
  .then(res => res.json())
  .then(data => {
        // console.log(data)
        data = showData 
        // console.log(showData)
        showData.forEach(show => {
          const ul = document.getElementById('show-list')
          const details = document.getElementById('details')
          const li = document.createElement('li')
          const a = document.createElement('a')
          a.setAttribute('href', '#')
          a.setAttribute('data-id', `${show.id}`)
          ul.append(li)
          a.innerHTML=`${show.name}`
          li.append(a)
             
            li.addEventListener('click', () => {
              const image = document.createElement('img')
              image.setAttribute('alt', 'show-image')
              image.setAttribute('src', `${show.image.medium}`)
              details.innerHTML = `<h1>${show.name}</h1></br>
              <h2>"Genres: "</h2>
              <p>${show.genres.join(",")}</p>
              <h2>"Show Poster"</h2>
              <p>${image}</p>` 
          })
        })
      }) 
    }
      displayAllShows()
    
      function filterSelection(genre) {
        let filteredData = showData.filter((show) => {return show.genres.includes(genre)
        })
         
         const ul = document.getElementById('show-list')
           ul.innerHTML = ''
      
          filteredData.filter(show => {
              ul.innerHTML += `
              <li><a href="#" data-id="${show.id}">${show.name}</a></li>
              ` 
          })
        }
    })   
  
  
    
    

// onmouseover = (event) => {
//     console.log(event.target.dataset.id)
//     const details = document.getElementById('details')
//     const ul = document.getElementById('show-list')
//     ul.innerHTML = ''

//     fetch(BASE_URL + `/shows/${event.target.dataset.id}`)
//     {
//       method: 'GET',
//       body: JSON.stringify(data),
//       mode: 'no-cors'
    
//     then(_data => {
//           details.innerHTML = `<h1>${show.name}</h1></br>
//           <h2>Genres</h2>
//           <p>${show.genres.join(",")}</p>
//           <h2>Show Poster</h2>
//           `
//           <p>${show.image.medium}</p>` 
//           })
//      }
    
// event.target is the a tag that is clicked
// data-id adds the id index of the show so only one show is fetched with id is used.
// Each show is added to the list as a link.
// href # takes you to the top of the page.
// document.getElementById("list").addEventListener("click", fillDiv);
