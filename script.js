const gallery = document.getElementById('imageGallery');

// Add your image URLs here
const imageUrls = [
    'Ankita1.jpg',
    'Ankita2.jpg',
    'Ankita3.jpg',
    'Ankita4.jpg',
    'Ankita5.jpg',
    'Ankita6.jpg',
    'Ankita7.jpg',
    'Ankita8.jpg',
    // Add more URLs as needed
];

// Create image elements and append them to the gallery
imageUrls.forEach((url) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.alt = 'Happy Birthday';
    gallery.appendChild(imgElement);
});
