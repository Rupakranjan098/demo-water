const Jimp = require('jimp');

const files = [
  { in: '/Users/rupakranjanmohanta/.gemini/antigravity-ide/brain/eb00840b-025e-4a24-896b-fe25fe031b42/bottle_1_1782299560270.png', out: 'public/cat1.png' },
  { in: '/Users/rupakranjanmohanta/.gemini/antigravity-ide/brain/eb00840b-025e-4a24-896b-fe25fe031b42/bottle_2_1782299571362.png', out: 'public/cat2.png' },
  { in: '/Users/rupakranjanmohanta/.gemini/antigravity-ide/brain/eb00840b-025e-4a24-896b-fe25fe031b42/bottle_3_1782299582826.png', out: 'public/cat3.png' },
  { in: '/Users/rupakranjanmohanta/.gemini/antigravity-ide/brain/eb00840b-025e-4a24-896b-fe25fe031b42/bottle_4_1782299596628.png', out: 'public/cat4.png' }
];

async function processAll() {
  for (let file of files) {
    let image = await Jimp.read(file.in);
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      var red = this.bitmap.data[idx + 0];
      var green = this.bitmap.data[idx + 1];
      var blue = this.bitmap.data[idx + 2];
      var lum = 0.299*red + 0.587*green + 0.114*blue;
      if (lum < 30) {
        var alpha = Math.floor((lum / 30) * 255);
        this.bitmap.data[idx + 3] = alpha;
      }
    });
    await image.writeAsync(file.out);
    console.log('Processed', file.out);
  }
}

processAll().catch(console.error);
