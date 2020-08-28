'use strict'
const store = require('./store')

const onSignUpSuccess = function (response) {
  $('#message').text(`Thanks for signing up ${response.user.email}!  Please sign in to start playing!`)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function () {
  $('#message').text('Sign up failed try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  // + games.length()
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

const onChangePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#change-password-form').trigger('reset')
}
const onChangePasswordFailure = function () {
  $('#message').text('Failed to change password.  Please try again.')
  $('#change-password-form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out').hide()
  $('#change-password-form').hide()
}
const onSignOutFailure = function () {
  $('#message').text('You have failed to sign out.  Please try again.')
  $('#change-password-form').trigger('reset')
}

const onNewGameSuccess = function (response) {
  store.user = response.user
  $('#message').text('Let\'s Go!')
  //  $('#total-games-message').text(`You have played ${store.gamesStored.games}`)
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#new-game').hide()
  $('#tic-tac-toe-board').show()
  let player = 'X'
  console.log(player)
//  $('#sign-up-form').hide()
//  $('#sign-in-form').hide()
}
const onNewGameFailure = function () {
  $('#message').text('New game not started. Please try again')
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
  onNewGameFailure
}
