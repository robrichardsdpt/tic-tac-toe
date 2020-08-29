'use strict'
const store = require('./store')
const gameEvents = require('./game')

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

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
  $('#change-password-form').trigger('reset')
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#sign-out').hide()
  $('#change-password-form').hide()
  console.log(response)
}
const onSignOutFailure = function (error) {
  $('#message').text('You have failed to sign out.  Please try again.')
  $('#change-password-form').trigger('reset')
  console.log(error)
}

const onNewGameSuccess = function (response) {
  store.game = response.game._id
  console.log(response)
  $('#message').text('Let\'s Go!')
  //  $('#total-games-message').text(`You have played ${store.gamesStored.games}`)
  $('#change-password-form').show()
  $('#sign-out').show()
  $('#new-game').hide()
  $('.tic-tac-toe-board').show()
  gameEvents.over = false
//  gameEvents.gameBoard = ['', '', '', '', '', '', '', '', '']
//  const box = ['col00', 'col01', 'col02', 'col03', 'col04', 'col05', 'col06', 'col07', 'col08']
//  $.each(box, function (i, val) {
//    $('#' + val).text('')
//  })
//  gameEvents.player = 'X'
}

const onNewGameFailure = function () {
  $('#message').text('New game not started. Please try again')
}

const onUpdateGameSuccess = function (response) {
  store.gameStatus = response.game.cells
  console.log(store.gameStatus)
}

const onUpdateGameFailure = function () {

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
