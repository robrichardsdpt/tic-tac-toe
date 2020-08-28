'use strict'
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameEvents = require('./game')

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
  //  const form = event.target
  // use getFormFields to get data from the form
  //  const data = getFormFields(form)
  // send data in AJAX request to the API
  api.signOut()
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
  //  gameEvents.cellClick(dataCellIndexInt)
  gameEvents.playerTurn(ui.player)
  console.log(ui.player)
  gameEvents.cellClick(ui.player, dataCellIndexInt, gameEvents.gameBoard, gameEvents.gameOn)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onCellClick
}
