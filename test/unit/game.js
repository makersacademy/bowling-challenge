const chai = require('chai'),
      spies = require('chai-spies');
      chai.use(spies);
const should = chai.should(),
      expect = chai.expect();
const Game = require('../../models/game.js');

describe('Game', _ => {
  var game,
      incompleteFrame,
      completeFrame,
      strikedFrame,
      sparedFrame;

  before(done => {
    incompleteFrame = chai.spy.interface({
      showRolls(){ return [4]},
      showStatus() { return 'in progress'; }
    });
    done();
  }); 
  
  beforeEach(done => {
    game = new Game();
  });

  describe('basic functionality', _ => {
    it('creates a new frame when played first', done => {
      expect(game.frames.length).to.equal(0);
      game.play(5);
      expect(game.frames.length).to.equal(1);
    });
  });
});
