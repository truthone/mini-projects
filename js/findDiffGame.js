
window.addEventListener('DOMContentLoaded', ()=>{
  makeColorTable(3,3);
});

function getRandomInt(minRange,maxRange) {
  min = Math.ceil(minRange);
  max = Math.floor(maxRange);
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeRandomRGB() {
  const range = 100; // 레벨별로 숫자가 낮아짐. 

  const r = getRandomInt(0+range,255-range);
  const g = getRandomInt(0+range,255-range);
  const b = getRandomInt(0+range,255-range);

  const rgbText = `rgb(${r},${g},${b})`;
  const diffRgbText = makeDiffRGB(r,g,b,range);
  const colorSet = [rgbText,diffRgbText];

  return colorSet;
}

function makeDiffRGB(r, g, b, range) {
  const diffR = r + Math.abs(Math.round(range));
  const diffG = g + Math.abs(Math.round(range));
  const diffB = b + Math.abs(Math.round(range));

  return `rgb(${diffR},${diffG},${diffB})`
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
  changeColorChip();
}

function changeColorChip(){
  const randomColors = makeRandomRGB();
  console.log(randomColors)
  color = randomColors[0];
  diffColor = randomColors[1];
  console.log(color, diffColor)
  colorChips = document.querySelectorAll('td > div');

  colorChips.forEach((chip)=>{
    chip.style.backgroundColor = color;
  })

  const diffIndex = getRandomInt(0,colorChips.length);
  colorChips[diffIndex].style.backgroundColor = diffColor;
  clickColorChip(colorChips[diffIndex]);
}

function clickColorChip(diff){
  document.querySelector('table').addEventListener('click',(e)=>{
    if(diff === e.target){
      changeColorChip()
    }
  });
}

let count  = 5;

function timer(){
  document.querySelector('#timer > div').textContent = `${count}초`;
  if (count-- === 0) {
    changeColorChip();
    clearInterval(timeoutId);
  }
}

timeoutId = setInterval(timer, 1000);

