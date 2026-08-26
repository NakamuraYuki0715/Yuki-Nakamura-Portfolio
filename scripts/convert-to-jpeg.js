const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertSvgToJpeg() {
  const images = [
    {
      input: path.join(__dirname, '../public/images/profile.jpg'),
      output: path.join(__dirname, '../public/images/profile.jpg'),
      density: 300,
      width: 1200,
      height: 1500,
    },
    {
      input: path.join(__dirname, '../public/images/works/project-01.jpg'),
      output: path.join(__dirname, '../public/images/works/project-01.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
    },
    {
      input: path.join(__dirname, '../public/images/works/project-02.jpg'),
      output: path.join(__dirname, '../public/images/works/project-02.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
    },
    {
      input: path.join(__dirname, '../public/images/works/project-03.jpg'),
      output: path.join(__dirname, '../public/images/works/project-03.jpg'),
      density: 300,
      width: 2400,
      height: 1500,
    },
  ];

  for (const img of images) {
    const svgBuffer = fs.readFileSync(img.input);
    console.log(`Converting ${path.basename(img.input)} to authentic JPEG binary...`);

    const jpegBuffer = await sharp(svgBuffer, { density: img.density })
      .resize(img.width, img.height, { fit: 'cover' })
      .jpeg({
        quality: 92,
        mozjpeg: true,
        chromaSubsampling: '4:4:4',
      })
      .toBuffer();

    fs.writeFileSync(img.output, jpegBuffer);
    console.log(`Saved ${img.output} (${jpegBuffer.length} bytes, Header: ${jpegBuffer.subarray(0, 4).toString('hex')})`);
  }

  console.log('All images converted to genuine JPEG format successfully!');
}

convertSvgToJpeg().catch((err) => {
  console.error(err);
  process.exit(1);
});
