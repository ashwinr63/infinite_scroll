const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')

let ready = false;
let imagesLoaded = 0;
let totalImages = 30;
let photosArray = []

// Unsplash API
const count = 30
const apiKey = 'P5AbbnyFKm3iOJS_igPqgBxAxgKduEdwJ-AL72F77Ow'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//creating a function to load all images at once
function imageLoaded() {
   
    imagesLoaded++;
   
    if(imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        
    }
}

// helper function
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// creating Elements for LInks and Photos and DOM
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length
    
    // Running function for each object in photosArray
    photosArray.forEach((photo) => {
        // creating anchor elements to link to unsplash
        const item = document.createElement('a')
        // item.setAttribute('href', photo.links.html)
        // item.setAttribute('target', '_blank');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })

        //creating img for photos 
        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })

        //Event Listener for image loaded function
        img.addEventListener('load', imageLoaded)
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
        
        displayPhotos()
        
    }
    catch(error) {
        // catch error
    }
}

// Check if scrolling near bottom of page and Loading more photos
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getPhotos();
        
    }
})

// onLoad
getPhotos();