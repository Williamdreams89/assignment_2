// get all the images
const images = document.querySelectorAll('.project_images img');

// loop through each image
images.forEach((img) => {
  // add a click event listener
  img.addEventListener('click', () => {
    // get the id of the clicked image
    const id = img.getAttribute('id');
    
    // redirect the user to the detail page with the id as a parameter
    window.location.href = `bookDetailPage.html?id=${id}`;
  });
});


