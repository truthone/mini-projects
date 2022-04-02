const list = document.querySelector('#rspImg > ul');
let count = 0;

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

slide();
let timerId = setInterval(slide, 300);

