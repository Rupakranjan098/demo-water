const Jimp = require('jimp');

Jimp.read('public/water-bottles.png')
  .then(image => {
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      // Get RGB values
      var red = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue = this.bitmap.data[idx + 2];
      
      // Calculate luminance
      var lum = 0.299*red + 0.587*green + 0.114*blue;
      
      // If very dark (black background)
      if (lum < 30) {
        // Smooth alpha transition
        var alpha = Math.floor((lum / 30) * 255);
        this.bitmap.data[idx + 3] = alpha; // Set alpha
      }
    });
    return image.writeAsync('public/water-bottles-trans.png');
  })
  .then(() => console.log('Background removed!'))
  .catch(err => console.error(err));
