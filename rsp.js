window.addEventListener('DOMContentLoaded',()=>{
  list = document.querySelector('#rspImg > ul');
  startGame();
})

function startGame(){
  count = 0;
  slide();
  timerId = setInterval(slide, 100);
}

function slide(){
  count++;

  if(count < list.childElementCount){
    size = 154 * count;
    console.log("else if")
  }else {
    size = 0;
    count = 0;
  }

  list.style.transform = `translateY(-${size}px)`;
}

const btns= document.querySelector('.buttons');
btns.addEventListener('click', e => {
  clearInterval(timerId);
  const enemyState = list.children[count].className;
  console.log(e.target);
  const myState = e.target.className;
  console.log(`${count}${enemyState} ${myState}`);
  const result =  getGameResult(enemyState, myState);
  consoleResult(result);
});

function getGameResult(enemyState, myState){
  switch(myState){
    case "rock" : 
      if (enemyState === "scissors"){
        return 1;
      }else if (enemyState === "paper"){
        return -1;
      }else{
        return 0;
      }

    case "scissors" : 
    if (enemyState === "paper"){
      return 1;
    }else if (enemyState === "rock"){
      return -1;
    }else{
      return 0;
    }

    case "paper" : 
    if (enemyState === "rock"){
      return 1;
    }else if (enemyState === "scissors"){
      return -1;
    }else{
      return 0;
    }    
  }
}

function consoleResult(result){
  document.querySelector('#result').style.visibility = 'visible';
  const resultDiv = document.querySelector('#result > div');

  if(result == 0){
    resultDiv.textContent = "비겼습니다 !";
  }else if (result == 1) {
    resultDiv.textContent = "이겼습니다!@@!~~ !";
  }else if (result == -1){
    resultDiv.textContent = "졌습니다 ㅠㅠ";
  }
}
document.querySelector('#retry').addEventListener('click', ()=>{
  document.querySelector('#result').style.visibility = 'hidden';
  startGame();
});


