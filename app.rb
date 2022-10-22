const Frame = require('./frame');
const Game = require('./game');

class App
  constructor()
    @game = new Game()
    @frame = new Frame()

  start()
    @game.start()
    @frame.start()

  stop()
    @game.stop()
    @frame.stop()

  update()
    @game.update()
    @frame.update()

  render()
    @game.render()
    @frame.render()

module.exports = App

