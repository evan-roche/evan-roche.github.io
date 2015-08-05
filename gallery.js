$(window).load(function() {

	  $('#gallery img').each(function() {

	    createCanvas(this);
	  });

	  function createCanvas(image) {

	    var canvas = document.createElement('canvas');
	    if (canvas.getContext) {
	      var ctx = canvas.getContext("2d");
	      canvas.width = image.width;
	      canvas.height = image.height;
	      ctx.drawImage(image, 0, 0);
	      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
	          pixelData = imageData.data;

	      for (var y = 0; y < canvas.height; y++) {
	        for (var x = 0; x < canvas.width; x++) {

	          var i = (y * 4 * canvas.width) + (x * 4);

	          var red = pixelData[i];
	          var green = pixelData[i + 1];
	          var blue = pixelData[i + 2];
   
	          var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);

	          pixelData[i] = grayScale;
	          pixelData[i + 1] = grayScale;
	          pixelData[i + 2] = grayScale;
	        }
	      }

	      ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);

	      image.parentNode.insertBefore(canvas, image);
	    }
	  }
	});