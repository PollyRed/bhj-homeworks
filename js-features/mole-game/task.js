const getHole = index => document.getElementById(`hole${index}`);

let holes = document.querySelectorAll('.hole');

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for(let i = 0; i < 9; i++)
{
  holes[i].onclick = function() {
    if(holes[i].className.includes('hole_has-mole')) {
      ++dead.textContent;
    } else {
      ++lost.textContent;
    }

    if(dead.textContent === '10') {
      alert("Вы выиграли!");
      dead.textContent = 0;
      lost.textContent = 0;
    }

    if(lost.textContent === '5') {
      alert("Вы проиграли!");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}

