const sharp = require('sharp');
const path = require('path');

const inputFile = path.join(__dirname, 'public/images/logo.jpg');
const outputFile = path.join(__dirname, 'public/images/logo_round.png');

async function makeRound() {
  try {
    const image = sharp(inputFile);
    const metadata = await image.metadata();
    const size = Math.min(metadata.width, metadata.height);

    const circleSvg = `<svg width="${size}" height="${size}"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="white" /></svg>`;

    await image
      .resize(size, size)
      .composite([{ input: Buffer.from(circleSvg), blend: 'dest-in' }])
      .png()
      .toFile(outputFile);
    console.log('Done');
  } catch (err) {
    console.error(err);
  }
}

makeRound();
