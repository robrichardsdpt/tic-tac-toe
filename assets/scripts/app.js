'use strict'
const authEvents = require('./events')

// Receive clicks from user
$(() => {
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#sign-up-form').hide()
  $('#new-game').hide()
  $('.tic-tac-toe-board').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-in').on('click', authEvents.onSignInBtnClick)
  $('#sign-up').on('click', authEvents.onSignUpBtnClick)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut) // do I refresh the site?
  $('#new-game').on('click', authEvents.onNewGame)
  $('.box').on('click', authEvents.onCellClick)
})
