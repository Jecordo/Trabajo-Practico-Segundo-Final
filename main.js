
var imagesArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

function generateImage() {
    var randomIndex = Math.floor(Math.random() * imagesArray.length);
    
    var randomImage = imagesArray[randomIndex];

    document.getElementById('generatedImage').src = randomImage;
}

document.getElementById('generateButton').addEventListener('click', function () {
    generateImage();
    console.log('Botón de generar imagen clickeado');
});

var songContainers = document.getElementsByClassName('song_container');
for (var i = 0; i < songContainers.length; i++) {
    songContainers[i].addEventListener('click', function () {
        console.log('Canción clickeada');
    });
}
