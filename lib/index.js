const Game = require('./game')

const game = new Game()

const rollOptions = Array.from(Array(11).keys())

const createOptionsDiv = (options) => {
  const rows = options.map((item) => {
    return `<button id='${item}' value='${item}'>${item}</button>`
  })
  return `<div>${rows.join(' ')}</div>`
}

document.getElementById('root').innerHTML = createOptionsDiv(rollOptions)

const scoreDiv = document.createElement('div')
document.getElementById('root').append(scoreDiv)

const updateScorecard = () => {
  scoreDiv.innerHTML = game.totalScore
}

updateScorecard()

const sendRoll = (event) => {
  const pinfall = parseInt(event.target.value)
  game.bowl(pinfall)
  updateScorecard()
}

rollOptions.forEach((number) => {
  document.getElementById(number).addEventListener('click', sendRoll)
})
