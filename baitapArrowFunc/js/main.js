const colorList = [
  'pallet',
  'viridian',
  'pewter',
  'cerulean',
  'vermillion',
  'lavender',
  'celadon',
  'saffron',
  'fuschia',
  'cinnabar',
];

const changeHouseColor = (color) => {
  console.log(color);
  document.querySelector('#house').className = `house ${color}`;
};

const loadColorBtn = () => {
  const colorBtnList = colorList.map((color) => {
    const colorBtn = document.createElement('button');
    colorBtn.classList.add('color-button', `${color}`);
    colorBtn.addEventListener('click', () => changeHouseColor(color));

    return colorBtn;
  });

  document.querySelector('#colorContainer').append(...colorBtnList);
};

loadColorBtn();
