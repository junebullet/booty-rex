

const chooseBall = winnerBall => {
    winnerBall = Math.floor(Math.random() * 3);
  switch(winnerBall)
    case 1:
    return red;
    case 2:
    return blue;
    case 3:
    return green; 
}

function winnerBall() {
  document.getElementById('colors').click();
}