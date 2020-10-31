'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('./store')

// initial values to start game and use in functions
let gameOn = true
let over = false
let player = ''

// used to check the indexes of the gameBoard whether the game has been won
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

// takes the arguments to process the game click and add it to DOM and gameBoard
// sends information to determine if the game has ended and the results
const cellClick = function (user, cellIndex, board, eventTarget) {
  if (player === '') {
    player = 'X'
  }
  // checks if the cell clicked is empty and if the game is still going
  // If this are both true, updates cell to player value, updates the game, and the next player to go.
  if (board[cellIndex] === '' && gameOn) {
    board[cellIndex] = player
    console.log(eventTarget)
    $(eventTarget).text(`${player}`)
    $('#message').text(`${board[cellIndex]}, nice move!`)
    player = player === 'X' ? 'O' : 'X'
    didSomeoneWin(board)
    // data object to send to API on each update
    const data = {
      game: {
        cell: {
          index: cellIndex,
          value: board[cellIndex]
        },
        over: over
      }
    }
    api.updateGame(data)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
    console.log(gameOn)
    if (gameOn) {
      setTimeout(function () { computerMove(board) }, 1000)
    }
  } else if (!gameOn) {
    $('#message').text('Game Over!')
  } else {
    $('#message').text('Not a valid move!  Try again.')
  }
}

// Checks gameBoard against the checkBoard.  Sees if the indices in the array have equal values on the gameboard
// Determines if a win or tie has occured on the current move.
function didSomeoneWin (gameboard) {
  let playerWon = false
  for (let i = 0; i < checkBoard.length; i++) {
    const win = checkBoard[i]
    const col1 = store.gameBoard[win[0]]
    const col2 = store.gameBoard[win[1]]
    const col3 = store.gameBoard[win[2]]
    if (col1 === '' || col2 === '' || col3 === '') {
      continue
    }
    if (col1 === col2 && col2 === col3) {
      playerWon = true
      $('#message').text(`Great job player ${col1}...`)
      break
    }
  }
  if (playerWon) {
    over = true
    gameOn = false
    $('#message').append('You Win!')
    $('.box').removeClass('hover')
  } else if (!gameboard.includes('')) {
    over = true
    gameOn = false
    $('#message').append('  It\'s a tie!!')
    $('.box').removeClass('hover')
  }
}

const computerMove = function (gameboard) {
  let random = ''
  // computer marks a random EMPTY cell
  const freeCells = []
  for (let i = 0; i < gameboard.length; i++) {
    if (gameboard[i] === '') {
      freeCells.push(i)
    }
  }
  random = Math.ceil(Math.random() * freeCells.length) - 1
  if (gameboard[freeCells[random]] === '' && gameOn) {
    gameboard[freeCells[random]] = player
    $(`#${freeCells[random]}`).text(`${player}`)
    $('#message').text(`${gameboard[freeCells[random]]}, nice move!`)
    player = player === 'X' ? 'O' : 'X'
    didSomeoneWin(gameboard)
    const data = {
      game: {
        cell: {
          index: freeCells[random],
          value: gameboard[freeCells[random]]
        },
        over: over
      }
    }
    api.updateGame(data)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  } else {
    computerMove(gameboard)
  }
}

// resets the game with a newGame click
const newGameChanges = function () {
  player = 'X'
  over = false
  gameOn = true
  $('.box').addClass('hover')
}

// Displays the number of games played by the user when a newGame click occurs
const getGamesPlayed = function () {
  api.getGames()
    .then(function (response) {
      store.gamesPlayed = response.games.length
      $('#total-games-message').text(`You have played ${store.gamesPlayed} games to date!`)
    })
    .catch(function () {
      $('#total-games-message').text('Error in getting total games played')
    })
}

// Changes DOM in response to sign out click
const signOut = function () {
  $('.tic-tac-toe-board').hide()
  $('#total-games-message').text('Please sign in below to play again!')
}

module.exports = {
  cellClick,
  gameOn,
  over,
  player,
  signOut,
  newGameChanges,
  getGamesPlayed
}
