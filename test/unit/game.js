const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai'),
      spies = require('chai-spies');
      chai.use(spies);
      chai.use(sinonChai);
const should = chai.should(),
      expect = chai.expect;
const Game = require('../../models/game.js');

describe('Game', _ => {
  var game,
      incompleteFrame,
      completeFrame,
      strikedFrame,
      sparedFrame;

  beforeEach(done => {
    incompleteFrame = chai.spy.interface({
      showBonus() {this.bonus = this.bonus || ''; return this.bonus;},
      showStatus() { this.status = this.status || 'in progress'; return this.status; }, 
      roll(number) { this.rolls = this.rolls || [4]; this.rolls.push(number); this.status = 'complete'; if(number == 6) this.bonus = 'spare';},
      showRolls() { return this.rolls; }
    });

    completeFrame = chai.spy.interface({
      showStatus() { return 'complete' }
    });
  
    game = new Game();
    done();
  });

  describe('basic functionality', _ => {
    it('creates a new frame when played first', done => {
      expect(game._frames.length).to.equal(0);
      game.play(5);
      expect(game._frames.length).to.equal(1);
      done();
    });

    it('creates a new frame when all frames are complete', done => {
      game._frames = [ completeFrame ];
      expect(game._frames.length).to.equal(1);
      game.play(5);
      expect(game._frames.length).to.equal(2);
      done();
    });

    it('roll will be sent to the latest incomplete frame if there is one', done => {
      game._frames = [ incompleteFrame ];
      game.play(5);
      expect(incompleteFrame.rolls).to.deep.equal([4,5]);
      done();
    });

    it('updates the score when a roll has completed a frame', done => {
      game._frames = [ incompleteFrame ];
      game.play(5);
      expect(game.showScore()).to.equal(9);
      done();
    });
  });

  describe('bonuses', _ => {
    it('updates debt by -1 if a complete frame was a spare', done => {
      game._frames = [ incompleteFrame ];
      game.play(6);
      expect(game._debt).to.equal(-1);
      done();
    });

    it('updates debt by -2 if a complete frame was a strike', done => {
      game.play(10);
      expect(game._debt).to.equal(-2);
      done();
    });

    it('updates the score correctly when there is a debt', done => {
      game.play(10);
      game.play(2);
      game.play(4);
      expect(game.showScore()).to.equal(22);
      done();
    });
  });
});
