const expect = require('chai').expect;
const Frame = require('../../models/frame.js');

describe('Frame', _ => {
  var frame;

  beforeEach(done => {
    frame = new Frame();
    done();
  });

  describe('no bonuses', _ => {
    it("Sets its status to complete after two rolls", done => {
      frame.roll(2).roll(3);
      expect(frame.showStatus()).to.equal('complete')
      done();
    });

    it("Pushes roll value to rolls array after a roll", done => {
      expect(frame.roll(4).showRolls()).to.deep.equal([4]);
      done();
    });
  });

  describe('bonuses', _ => {
    it("Sets its status to complete if the first roll is 10", done => {
      expect(frame.roll(10).showStatus()).to.equal('complete');
      done();
    });
    
    it("Sets its bonus to strike if the first roll is 10", done => {
      expect(frame.roll(10).showBonus()).to.equal('strike');
      done();
    });

    it("Sets its bonus to spare if the sum of the two rolls is 10", done => {
      expect(frame.roll(4).roll(6).showBonus()).to.equal('spare');
      done();
    });
  });
});
