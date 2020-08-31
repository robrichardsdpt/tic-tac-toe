'use strict'
const ui = require('./ui')
const api = require('./api')
const store = require('./store')
const events = require('./events')
// to know where or not the game is 'on/off' or over
let gameOn = true
let over = false
let player = ''
// to identify the player that is currently going
// current game board.  this will populate with our clicks/moves
// let gameBoard = ['', '', '', '', '', '', '', '', '']
// let gameBoard = store.cells

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
//  quit option

const cellClick = function (user, cellIndex, board, gameStatus, eventTarget) {
  if (player === '') {
    player = 'X'
  }
  console.log(over)
  if (board[cellIndex] === '' && gameOn) {
    board[cellIndex] = player
    $(eventTarget).text(`${player}`)
    console.log(board)
    //    checkWin(board)
    // api.updateGame(player, cellIndex, gameStatus)
    $('#message').text(`${board[cellIndex]}, nice move!`)
    player = player === 'X' ? 'O' : 'X'
    didSomeoneWin(board, gameStatus)
    console.log(board[cellIndex])
    console.log(gameOn, over)
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
  } else {
    console.log('click not functional')
  }
}

function didSomeoneWin (gameboard, status) {
  let playerWon = false
  for (let i = 0; i < checkBoard.length; i++) {
    const win = checkBoard[i]
    const col1 = store.gameBoard[win[0]]
    const col2 = store.gameBoard[win[1]]
    const col3 = store.gameBoard[win[2]]
    if (col1 === '' || col2 === '' || col3 === '') {
      continue
    }
    console.log(col1, col2, col3)
    if (col1 === col2 && col2 === col3) {
      playerWon = true
      over = true
      // make end game function which returns over?
      $('#message').text(`Great job player ${col1}...`)
      break
    }
  }
  // make this into end game?  Would that send the over to the rest of the js and then to api?
  if (playerWon) {
    over = true
    status = false
    gameOn = false
    console.log(status, over)
    $('#message').append('You Win!')
    return over
  }
  if (!gameboard.includes('')) {
    over = true
    status = false
    gameOn = false
    console.log(status, over)
    $('#message').append('  It\'s a tie!!')
    return over
  }
}

const newGameChanges = function () {
  player = 'X'
  over = false
  gameOn = true
}

const getGamesPlayed = function () {
  api.getGames()
    .then(function (response) {
      console.log(response)
      console.log(response.games.length)
      store.gamesPlayed = response.games.length
      $('#total-games-message').text(`You have played ${store.gamesPlayed} games to date!`)
    })
    .catch(function (err) {
      console.log(err)
    })
}

const signOut = function () {
  $('.tic-tac-toe-board').hide()
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
