'use strict'
const ui = require('./ui')
const api = require('./api')
// to know where or not the game is 'on/off' or over
let gameOn = true

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
const playerTurn = function (player) {
  if (player === 'X') {
    player = 'O'
    return player
  } else {
    player = 'X'
    return player
  }
}

// make sure that you do not double cellClick
// make sure that you capture data from each cell with attr.

const cellClick = function (player, cellIndex, board, gameStatus, eventTarget) {
  if (board[cellIndex] === '' && gameStatus) {
    board[cellIndex] = player
    $(eventTarget).text(`${player} and ${cellIndex}`)
    console.log(board)
    checkWin(board)
    api.updateGame(player, cellIndex, gameStatus)
  } else {
    console.log('click not functional')
    // have to figure out how to stop player function
  }
}

// convert into array inside of array
const indexArray = function (gameboard) {
  for (let i = 0; i < gameboard.array; i++) {
    let xCells = []
    let oCells = []
    if (gameboard[i] === 'X') {
      xCells.push(i)
    }
    if (gameboard[i] === 'O') {
      oCells.push(i)
    }
    checkWin(xCells)
    checkWin(oCells)
  }
}
const checkWin (gameArray, checkBoard)
  for (let j = 0; j < gameArray)
  }
  // find all X's in board indexes and compare to array of checkBoard.
  // find all O's in board indexes and compare to array of checkBoard
  // if equal gameOn = false
    // player who's array matches wins.
}

module.exports = {
  playerTurn,
  cellClick,
  gameOn,
  gameBoard
}