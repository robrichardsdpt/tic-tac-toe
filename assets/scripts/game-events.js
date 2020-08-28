'use strict'
// to know where or not the game is 'on/off' or over
let gameOn = true
// to identify the player that is currently going
let player = "X"
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
// make sure that you do not double cellClick
// make sure that you capture data from each cell with attr.
const handleCellClick = function (event) {
  const cellClick = event.target
  const cellClickIndex = $('CellClick').attr('data-cell-index')
  const cellIndex = parseInt(cellClickIndex)
}

// to change player after turn
const playerTurn = function () {
  if (player === 'X') {
    return player = 'O'
  } else {
    return player = 'X'
  }
}

// to check the current game board against the winning possibilities
const isGameOver = function () {

}

const

/*for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log('it is X\'s turn')
  } else {
    console.log('it is O\'s turn')
  }
}

let count = 0
const onGameClick0 = function (event) {
  event.preventDefault()
  $('#col0').css('background-color', 'red')
  console.log(count += 1)
  $('#player-turn').text(`${player} is up!`)
  return count
}

const onGameClick1 = function (event) {
  event.preventDefault()
  $('#col1').css('background-color', 'red')
  console.log(count += 1)
  return count
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
} */

/* module.exports = {
  onGameClick0: onGameClick0,
  onGameClick1: onGameClick1
} */
