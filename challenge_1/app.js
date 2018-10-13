///create a div
///create a row
///render the row

// const cells = document.querySelectorAll('.cell')

// cells.forEach(e => e.addEventListener('click', () => {
  
// }))


const startGame = () => {
  document.turn = 'x'
}

const nextMove = (cell) => {
  cell.innerText = document.turn;
  nextTurn();

}

const nextTurn = () => {
  if (document.turn === 'x') {
    document.turn = 'o'
  } else {
    document.turn = 'x'
  }
}

startGame()