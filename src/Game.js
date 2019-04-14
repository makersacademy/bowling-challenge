function Game () {
}

console.log('hello')

Game.prototype = {
  constructor: Game
}

if (typeof (module) !== 'undefined') {
  module.exports = Game
}
