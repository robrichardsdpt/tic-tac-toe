const gameEvents = require('./gameEvents')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password-form').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#tic-tac-toe-board').hide()
  $('#sign-up-form').on('submit', gameEvents.onSignUp)
  $('#sign-in-form').on('submit', gameEvents.onSignIn)
  $('#change-password-form').on('submit', gameEvents.onChangePassword)
  $('#sign-out').on('submit', gameEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onNewGame)
})
