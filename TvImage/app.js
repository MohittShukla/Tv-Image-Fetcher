
const form = document.querySelector('#SearchForm')

form.addEventListener('submit', async function(e){
    e.preventDefault();
   
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    console.log(res)
    clearImage();
    makeImages(res.data);
    

}
)

const makeImages =(shows) => {
    // Create a container element for the images
    const imagesContainer = document.createElement('div');
    imagesContainer.id = 'images-container'; // Assign an ID for styling
    document.body.append(imagesContainer);

    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            
            

            const showContainer = document.createElement('div');
            showContainer.classList.add('show-container');

            imagesContainer.appendChild(img);
            
            
        }
    }
}

function clearImage() {
    const images = document.querySelectorAll('img');
  for(let img of images){
    img.remove();
  }
}

