'use strict'
const authEvents = require('./events')
// const gameEvents = require('./game-events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

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

/*
  $('#col0').on('click', gameEvents.onGameClick0)
  $('#col1').on('click', gameEvents.onGameClick1)
  $('#col2').on('click', gameEvents.onGameClick)
  $('#col3').on('click', gameEvents.onGameClick)
  $('#col4').on('click', gameEvents.onGameClick)
  $('#col5').on('click', gameEvents.onGameClick)
  $('#col6').on('click', gameEvents.onGameClick)
  $('#col7').on('click', gameEvents.onGameClick)
  $('#col8').on('click', gameEvents.onGameClick) */
})
