const Jimp = require('jimp');

Jimp.read('public/new-bottles.jpg')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      // Get RGB values
      var red = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue = this.bitmap.data[idx + 2];
      
      // Calculate luminance
      var lum = 0.299*red + 0.587*green + 0.114*blue;
      
      // If very light (white background)
      if (lum > 240) {
        // High luminance -> low alpha (transparent)
        var alpha = Math.floor(((255 - lum) / 15) * 255);
        this.bitmap.data[idx + 3] = alpha; 
      }
    });
    return image.writeAsync('public/new-bottles-trans.png');
  })
  .then(() => console.log('White background removed!'))
  .catch(err => console.error(err));
