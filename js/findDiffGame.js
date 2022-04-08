
window.addEventListener('DOMContentLoaded', makeColorTable(3,3));

function getRandomInt(minRange,maxRange) {
  min = Math.ceil(minRange);
  max = Math.floor(maxRange);
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeRandomRGB() {
  const r = getRandomInt(0,255);
  const g = getRandomInt(0,255);
  const b = getRandomInt(0,255);

  const rgbText = `rgb(${r},${g},${b})`;
  const diffRgbText = makeDiffRGB(r,g,b);
  const colorSet = [rgbText,diffRgbText];

  return colorSet;
}


function makeColorTable(row, col) {
  const table = document.querySelector('table');
  const fragment = document.createDocumentFragment();

  for(let i = 0; i < row ; i++){
    const tr = document.createElement('tr');

    for(let j = 0; j < col; j++){
      const td = document.createElement('td');
      const div = document.createElement('div');
      td.appendChild(div);
      tr.appendChild(td);
      
    }
    fragment.appendChild(tr);
  }

  table.appendChild(fragment);
  changeColor();
}


function changeColorChip(){
  color = makeRandomRGB()[0];
  diffColor = makeRandomRGB()[1];
  colorChips = document.querySelectorAll('td > div');

  colorChips.forEach((chip)=>{
    chip.style.backgroundColor = color;
  })

  const diffIndex = getRandomInt(0,colorChips.length);
  colorChips[diffIndex].style.backgroundColor = diffColor;
}

