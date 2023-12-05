let timer = 25;
let score = 0;
let hit = 0;



let con = document.querySelector('#restart')
document.getElementById('restart').addEventListener('click',function(){
location.reload()
})

document.querySelector('#baby-container-bottom').addEventListener('click', function (obj) {
  let clickednumber = (Number(obj.target.textContent));
  if (clickednumber === hit) {
    hitScore();
    makeBubble();
    currentScore();
  }
})

function currentScore() {
  score += 10;
  document.querySelector('#scoreval').textContent = score
}

function hitScore() {
  hit = Math.floor(Math.random() * 10)
  document.querySelector('#hitval').textContent = hit
}

function makeBubble() {
  let clutter = '';
  for (i = 1; i < 81; i++) {
    let rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector('#baby-container-bottom').innerHTML = clutter
}

function runTime() {
  let timerstop = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector('#timer-value').textContent = timer;
    } else {
      clearInterval(timerstop);
      document.querySelector('#baby-container-bottom').innerHTML = `<h1>Shinra Tensei</h1>`;
    }
  }, 1000);
}
hitScore();
runTime();
makeBubble();

