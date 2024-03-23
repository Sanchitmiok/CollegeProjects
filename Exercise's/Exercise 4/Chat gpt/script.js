const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', () => {
  const newPrimaryColor = getRandomColor();
  const newSecondaryColor = getRandomColor();

  document.documentElement.style.setProperty('--primary-color', newPrimaryColor);
  document.documentElement.style.setProperty('--secondary-color', newSecondaryColor);
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
