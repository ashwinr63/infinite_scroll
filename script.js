const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let photosArray = []
// Unsplash API
const count = 10
const apiKey = 'P5AbbnyFKm3iOJS_igPqgBxAxgKduEdwJ-AL72F77Ow'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// creating Elements for LInks and Photos and DOM

function displayPhotos() {
    // Running function for each object in photosArray
    photosArray.forEach((photo) => {
        // creating anchor elements to link to unsplash
        const item = document.createElement('a')
        item.setAttribute('href', photo.links.html)
        item.setAttribute('target', '_blank');

        //creating img for photos 
        const img = document.createElement('img')
        item.setAttribute('src', photo.urls.regular)
        item.setAttribute('alt', photo.alt_description)
        item.setAttribute('title', photo.alt_description)

        // Put Img tag inside Anchor, then both tags under image container
        item.appendChild(img)
        imageContainer.appendChild(item)
    });
}

// Fetching Photos using Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json();
        // console.log(photosArray)
        displayPhotos()
        // console.log(data)
    }
    catch(error) {
        // catch error
    }
}

// onLoad
getPhotos();