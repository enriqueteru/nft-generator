require("dotenv").config();
const Jimp = require("jimp");
const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
const pinata = pinataSDK(process.env.PINATA_KEY, process.env.PINATA_API_SECRET);
const Traits = require("./ traits");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const build = async (index, onComplete) => {
  const _path = "/Users/enriqueteruel/Desktop/PROYECTOS/node-js/";
  var _traits = [];

  const background = Traits.getBackground();
  const backgroundJimp = await Jimp.read(
    _path + "/Traits/Background/Background_" + background + ".png"
  );
  _traits.push({
    trait_type: "Background",
    value: background,
  });
  var _composedImage = backgroundJimp;

  const head = Traits.getHead();
  const headJimp = await Jimp.read(
    _path + "/Traits/Head/Head_" + head + ".png"
  );
  _traits.push({
    trait_type: "Head",
    value: head,
  });

  _composedImage.blit(headJimp, 0, 0);

  const mouth = Traits.getMouth();
  const mouthJimp = await Jimp.read(
    _path + "/Traits/Mouth/Mouth_" + mouth + ".png"
  );
  _traits.push({
    trait_type: "Mouth",
    value: mouth,
  });

  _composedImage.blit(mouthJimp, 0, 0);

  const eyes = Traits.getEyes();
  const eyesJimp = await Jimp.read(
    _path + "/Traits/Eyes/Eyes_" + eyes + ".png"
  );
  _traits.push({
    trait_type: "Eyes",
    value: eyes,
  });

  _composedImage.blit(eyesJimp, 0, 0);

  await _composedImage.write("Output/images/" + index + ".png");
  await sleep(20); //We give some time for the image to be actually saved in our files
  const _readableStream = await fs.createReadStream(
    _path + "/Output/images/" + index + ".png"
  );
  const _ipfs = await pinata.pinFileToIPFS(_readableStream);
  await fs.writeFileSync(
    "Output/" + index,
    JSON.stringify({
      name: "My NFT #" + index,
      traits: _traits,
      image: "https://ipfs.io/ipfs/" + _ipfs.IpfsHash,
    })
  );

  onComplete();
};

module.exports = {
  build,
};
