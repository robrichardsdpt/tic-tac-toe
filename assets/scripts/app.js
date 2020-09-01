'use strict'
const authEvents = require('./events')

// Receive clicks from user
$(() => {
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('.tic-tac-toe-board').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut) // do I refresh the site?
  $('#new-game').on('submit', authEvents.onNewGame)
  $('.box').on('click', authEvents.onCellClick)
})
