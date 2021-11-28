getHole = index => document.getElementById(`hole${index}`);

let holes = [];
for(let i = 1; i < 10; i++)
{
  holes.push(getHole(i));
}

const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for(let i = 1; i < 10; i++)
{
  holes[i].onclick = function() {
    if(holes[i].className.includes('hole_has-mole')) {
      ++dead.textContent;
    } else {
      ++lost.textContent;
    }

    if(dead.textContent === '10') {
      alert("Вы выиграли!");
      location.reload();
    }

    if(lost.textContent === '5') {
      alert("Вы проиграли!");
      location.reload();
    }
  }
}

