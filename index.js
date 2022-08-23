const BASE_URL = 'http://api.tvmaze.com'
// let data = []
// let filteredData = []

window.addEventListener('DOMContentLoaded', () => {
fetchTvShows() 



function fetchTvShows() {
   fetch(BASE_URL + `/shows`)
  .then(res => res.json())
  .then(data => {
        // console.log(data)
        data.forEach(show => {
          const ul = document.getElementById('show-list')
          ul.innerHTML += `<li><a href="#" data-id="${show.id}">${show.name}</a></li>`
        })
        activateLinks()
      })
      // filterShows(genres)
    }     
    
    const activateLinks = () => {
      const links = document.querySelectorAll('a')
      links.forEach((show) => {
        show.addEventListener('click', displayShowDetails)
      })
    }

    const displayShowDetails = (e) => {
      console.log (e.target.dataset.id)
      const showDetails = document.getElementById('details')
      const ul = document.getElementById('show-list')
      ul.innerHTML = ''
      fetch(BASE_URL + `/shows/${e.target.dataset.id}`)
      .then(res => res.json())
      .then(show => {
        console.log(show)
        
          // const image = document.createElement('img')
          // image.setAttribute('alt', 'show-image')
          // image.setAttribute('src', `${show.image.medium}`)
          
          showDetails.innerHTML = `<h1>${show.name}</h1><br/>
              <h2>Genres: </h2>
              <p>${show.genres.join(", ")}</p>
              <h2>Summary: </h2>
              <p>${show.summary}</p>
              <h3>Official Site: </h3>
              <p>${show.officialSite}</p>`
        
      })
    }
  })
  // <h2>Show Poster</h2>
  // <p>${show.image}</p>
  //    function filterShows(){
  //     //  const filteredList = document.getElementById('show-list')
  //        let ul = document.getElementById('show-list')
  //        ul.innerHTML = ''
        
  //        filteredData.filter(show => {
  //           ul.innerHTML += `<li><a href="#" data-id="${show.id}">${show.name}</a></li>`
  //       })
  //       console.log(filteredData)
  //   }

  //   let filterContainer = document.getElementById("myBtnContainer")
  //   // let filterBtns = document.querySelectorAll('#btn')
  //   filterContainer.addEventListener('click', filterShows)
  

    
     
    //add other functions here

            
             
    //       })
    //     })
    //   }) 
      
   
  
    
    

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
