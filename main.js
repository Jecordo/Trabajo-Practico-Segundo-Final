function generateImage() {
    var captureElement = document.body;
  
    var captureOptions = {
      x: captureElement.offsetWidth / 4,  
      y: 10,
      width: 800, 
      height: 590     
    };
  
    html2canvas(captureElement, {...captureOptions, useCORS: true }).then(function(canvas) {
      var generatedImage = document.getElementById('generatedImage');
      generatedImage.src = canvas.toDataURL();
    });
  }
  