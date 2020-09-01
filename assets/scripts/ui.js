'use strict'
const store = require('./store')
const gameEvents = require('./game')

// Handles response of API to sign up
const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks for signing up ${response.user.email}!`)
  $('#total-games-message').text('Please sign in to start playing!')
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
}

// Handles API response to sign in
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#total-games-message').text('Click new game to begin!')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}
const onSignInFailure = function () {
  $('#message').text('Sign in failed.  Please try again')
}

// Handles API response to password change requests
const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Failed to change password.  Please try again.')
  $('#change-password-form').trigger('reset')
}

// Handles API response to sign out request
const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#change-password-form').hide()
}
const onSignOutFailure = function () {
  $('#message').text('You have failed to sign out.  Please try again.')
}

// Handles API response to new game request
const onNewGameSuccess = function (response) {
  store.game = response.game._id
  store.gameBoard = response.game.cells
  gameEvents.getGamesPlayed()
  $('#message').text('Let\'s Go!')
  $('#change-password-form').show()
  $('#sign-out').show()
  $('.tic-tac-toe-board').show()
  $('.box').text('')
  gameEvents.newGameChanges()
}
const onNewGameFailure = function () {
  $('#message').text('New game not started. Please try again')
}

// Handles API response to game updates
const onUpdateGameSuccess = function (response) {
  store.gameStatus = response.game.cells
}
const onUpdateGameFailure = function () {
  $('#message').text('Game failed to update. Please try again')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
