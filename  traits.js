const COMMON_MAX_RARITY = 50; //Starts from 1
const UNCOMMON_MAX_RARITY = 75;
const RARE_MAX_RARITY = 95;
const LEGENDARY_MAX_RARITY = 100;

const randomElement = (list) => {
  const _random = Math.floor(Math.random() * list.length);
  return list[_random];
};

const getBackground = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(["Fire", "Ghost"]);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(["Pain", "Gold"]);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(["Deep", "Doom"]);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(["Eternity"]);
  }
};


const getHead = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(["Deep", "Ghost"]);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(["Pain", "Gold"]);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(["Deep"]);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(["Eternity"]);
  }
};

const getEyes = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(["Circles"]);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(["SquaresC", "Sleep"]);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(["Diamond", "Moon"]);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(["Trip"]);
  }
};


const getMouth = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(["Line"]);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(["ArrowD1"]);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(["Circle1", "Diamond1"]);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(["Trip"]);
  }
};



module.exports = {
  getBackground,
  getHead,
  getEyes,
  getMouth
};
