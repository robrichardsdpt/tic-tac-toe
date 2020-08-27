for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    console.log('it is X\'s turn')
  } else {
    console.log('it is O\'s turn')
  }
}

let count = 0
const onGameClick0 = function (event) {
  event.preventDefault()
  $('#col0').css('background-color', 'red')
  console.log(count += 1)
  return count
}

const onGameClick1 = function (event) {
  event.preventDefault()
  $('#col1').css('background-color', 'red')
  console.log(count += 1)
  return count
}
/*
const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
}

const onGameClick = function (event) {
  event.preventDefault()
  $('.this').css('background-color', 'red')
} */

module.exports = {
  onGameClick0: onGameClick0,
  onGameClick1: onGameClick1
}
