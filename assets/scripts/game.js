'use strict'
const ui = require('./ui')
// to know where or not the game is 'on/off' or over
let gameOn = true

// to identify the player that is currently going

// current game board.  this will populate with our clicks/moves
let gameBoard = ["","","","","","","","",""]

// scenarios that determine winner
const checkWin = [
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
  if (ui.player === 'X') {
    ui.player = 'O'
    return ui.player
  } else {
    ui.player = 'X'
    return ui.player
  }
}

// make sure that you do not double cellClick
// make sure that you capture data from each cell with attr.

const cellClick = function (cellIndex) {

}

module.exports = {
  playerTurn
}
