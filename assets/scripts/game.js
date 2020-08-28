'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('./store')
const events = require('./events')
// to know where or not the game is 'on/off' or over
let gameOn = true

let player = 'X'

// to identify the player that is currently going
// current game board.  this will populate with our clicks/moves
let gameBoard = ['', '', '', '', '', '', '', '', '']

// scenarios that determine winner
const checkBoard = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

// to determine who's turn it is

// make sure that you do not double cellClick
// make sure that you capture data from each cell with attr.

const cellClick = function (cellIndex, board, gameStatus, eventTarget) {
  if (board[cellIndex] === '' && gameStatus) {
    board[cellIndex] = player
    $(eventTarget).text(`${player} and ${cellIndex}`)
    console.log(board)
    //    checkWin(board)
    //    api.updateGame(user, cellIndex, gameStatus)
    player = player === 'X' ? 'O' : 'X'
  } else {
    console.log('click not functional')
    // have to figure out how to stop player function
  }
}

// convert into array of another array
const indexArray = function (gameboard) {
  for (let i = 0; i < array.length; i++) {
    let xCells = []
    let oCells = []
    if (gameboard[i] === 'X') {
      xCells.push(i)
    }
    if (gameboard[i] === 'O') {
      oCells.push(i)
    }
//    checkWin(xCells)
//    checkWin(oCells)
  }
}
/* const checkWin (gameArray, checkBoard)
  for (let j = 0; j < gameArray)
  }
  // find all X's in board indexes and compare to array of checkBoard.
  // find all O's in board indexes and compare to array of checkBoard
  // if equal gameOn = false
    // player who's array matches wins.
} */

module.exports = {
  cellClick,
  gameOn,
  gameBoard
}
