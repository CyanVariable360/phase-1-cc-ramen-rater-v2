// index.js

const handleClick = (ramen) => {
  console.log("Ramen clicked:", ramen);
  const detailImage = document.querySelector('#ramen-detail .detail-image')
  const detailName = document.querySelector('#ramen-detail .name')
  const detailRating = document.querySelector('#rating-display')
  const detailRestaurant = document.querySelector('#ramen-detail .restaurant')
  const detailComment = document.querySelector('#comment-display')

  detailImage.src = ramen.image
  detailImage.alt = ramen.name
  detailName.textContent = ramen.name
  detailRestaurant.textContent = ramen.restaurant
  detailRating.textContent = ramen.rating
  detailComment.textContent = ramen.comment

  console.log("Just updated to " + ramen.id)
}

const addSubmitListener = () => {
  let form = document.getElementById("new-ramen")
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    let newRamen = [{
      name: document.getElementById("new-name").value,
      restaurant: document.getElementById("new-restaurant").value,
      image: document.getElementById("new-image").value,
      rating: document.getElementById("new-rating").value,
      comment: document.getElementById("new-comment").value
    }]  
  
    let imageContainer = document.getElementById('ramen-menu')
    const img = document.createElement('img')
    img.src = newRamen[0].image
    img.alt = newRamen[0].name
    img.addEventListener("click", () => {
      handleClick(newRamen[0])
    })
    imageContainer.appendChild(img);
    console.log("created new ramen")
  })
}

const displayRamens = () => {
  console.log("displaying ramens")
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(images => {
     let imageContainer = document.getElementById('ramen-menu')
       images.forEach(ramen => {
        const img = document.createElement('img')
        img.src = ramen.image
        img.alt = ramen.name

        img.addEventListener("click", () => {
          handleClick(ramen)
        })

        imageContainer.appendChild(img);

        console.log("Just added " + ramen.id)
       })
   })
}

const main = () => {
  document.addEventListener("DOMContentLoaded", () => {
  displayRamens()
  addSubmitListener()
  });
}

main()



// Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };
