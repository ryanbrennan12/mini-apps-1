///create a div
///create a row
///render the row

// const cells = document.querySelectorAll('.cell')

// cells.forEach(e => e.addEventListener('click', () => {
  
// }))

//set turn variable on doc



const startGame = () => {
  document.turn = 'x'
  message('Player ' + document.turn + ', it is your turn')
}

const message = (msg) => {
  document.getElementById("message").innerText = msg
}

const nextMove = (cell) => {
  cell.innerText = document.turn;
  switchTurn();

}

const switchTurn = () => {
  if (document.turn === 'x') {
    document.turn = 'o'
    message('Player ' + document.turn + ', it is your turn')
  } else {
    document.turn = 'x'
    message('Player ' + document.turn + ', it is your turn')
  }
}




const myFunction = () => {
  document.getElementByClassName("cell").innerHTML = "YOU CLICKED ME!";
}


startGame()