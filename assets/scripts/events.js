'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameEvents = require('./game')
const store = require('./store')

// Handles sign on click and sends information to API
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Handles sign in click and sends information to API
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// Handles change password click and sends information to API
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// Handles sign out click by user and sends to API and to game.js file
const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  gameEvents.signOut()
  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Handles new game click and sends information to API for getting games to update game log and to start new game
const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.getGames(data)
  api.newGame(data)
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// Handles cell click to update the game. Information sent to game.js to process and send to API.
const onCellClick = function (event) {
  event.preventDefault()
  // data-cell index gathered from clicked cell and converted from string to integer to pass into cellClick function in game.js file.
  const dataCellIndex = $(event.target).attr('data-cell-index')
  const dataCellIndexInt = parseInt(dataCellIndex)
  gameEvents.cellClick(gameEvents.player, dataCellIndexInt, store.gameBoard, event.target)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onCellClick
}
