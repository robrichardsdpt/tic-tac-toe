'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameEvents = require('./game')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signUp(data)
    // handle successul response
    .then(ui.onSignUpSuccess)
    // handle failed response
    .catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signIn(data)
    // handle successul response
    .then(ui.onSignInSuccess)
    // handle failed response
    .catch(ui.onSignInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.changePassword(data)
    // handle successul response
    .then(ui.onChangePasswordSuccess)
    // handle failed response
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // get the form from the event
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // send data in AJAX request to the API
  gameEvents.signOut()
  api.signOut(data)
    // handle successul response
    .then(ui.onSignOutSuccess)
    // handle failed response
    .catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  // use getFormFields to get data from the form
  const data = getFormFields(form)
  // gameEvents.player = 'X'
  // gameEvents.gameBoard = ['', '', '', '', '', '', '', '', '']
  // send data in AJAX request to the API
  api.getGames(data)
  api.newGame(data)
    // handle successul response
    .then(ui.onNewGameSuccess)
    // handle failed response
    .catch(ui.onNewGameFailure)
}

const onCellClick = function (event) {
  event.preventDefault()
  const dataCellIndex = $(event.target).attr('data-cell-index')
  const dataCellIndexInt = parseInt(dataCellIndex)
  console.log(dataCellIndexInt)
  // gameEvents.playerTurn(gameEvents.player)
  console.log(gameEvents.player)
  gameEvents.cellClick(gameEvents.player, dataCellIndexInt, store.gameBoard, gameEvents.gameOn, event.target)
  console.log(store.gameBoard[dataCellIndexInt])
//  api.updateGame(/*dataCellIndexInt, store.gameBoard[dataCellIndexInt], gameEvents.over*/data)
//    .then(ui.onUpdateGameSuccess)
//    .catch(ui.onUpdateGameFailure)
//  console.log(store.cells)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onCellClick
}
