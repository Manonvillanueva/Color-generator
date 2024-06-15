let rgbText = document.getElementById("rgbText");

const colorGenerator = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  rgbText.innerHTML = rgbColor;
  document.body.style.background = rgbColor;
};

setInterval(colorGenerator, 2000);
