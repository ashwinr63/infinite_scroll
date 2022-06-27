// Unsplash API
const count = 10
const apiKey = 'P5AbbnyFKm3iOJS_igPqgBxAxgKduEdwJ-AL72F77Ow'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Fetching Photos using Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    }
    catch(error) {
        // catch error
    }
}

// onLoad
getPhotos();