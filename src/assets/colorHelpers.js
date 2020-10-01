import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const generatePalette = (starterPalette) => {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };
  // ? Looping over levels array assigning new an empty array to every elements inside levels array
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
};
// ? it' generating an array with three color values
const getRange = (hexColor) => {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

const getScale = (hexColor, numberOfColors) => {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
};

export default generatePalette;
