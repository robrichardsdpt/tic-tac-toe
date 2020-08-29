'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('./store')
const events = require('./events')
// to know where or not the game is 'on/off' or over
let gameOn = true
let over = false
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

// one way to tie, if you made 9 moves
// quit option
// to determine who's turn it is

// make sure that you do not double cellClick
// make sure that you capture data from each cell with attr.

const cellClick = function (user, cellIndex, board, gameStatus, eventTarget) {
  if (board[cellIndex] === '' && gameStatus) {
    board[cellIndex] = player
    $(eventTarget).text(`${player}`)
    console.log(board)
    //    checkWin(board)
    // api.updateGame(player, cellIndex, gameStatus)
    $('#message').text(`${board[cellIndex]}, nice move!`)
    player = player === 'X' ? 'O' : 'X'
    didSomeoneWin(board, gameStatus)
    console.log(board[cellIndex])
  } else {
    console.log('click not functional')
    // have to figure out how to stop player function
  }
}

function didSomeoneWin (gameboard, status) {
  let playerWon = false
  for (let i = 0; i < checkBoard.length; i++) {
    const win = checkBoard[i]
    const col1 = gameBoard[win[0]]
    const col2 = gameBoard[win[1]]
    const col3 = gameBoard[win[2]]
    if (col1 === '' || col2 === '' || col3 === '') {
      continue
    }
    console.log(col1, col2, col3)
    if (col1 === col2 && col2 === col3) {
      playerWon = true
      $('#message').text(`Great job player ${col1}...`)
      break
    }
  }
  // this is working, but is not stopping the game.
  if (playerWon) {
    status = false
    console.log(status)
    $('#message').append('You Win!')
    return status
  }
}

const signOut = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard = gameBoard.pop()
  }
  $('.tic-tac-toe-board').hide()
}

module.exports = {
  cellClick,
  gameOn,
  gameBoard,
  over,
  player,
  signOut
}
