let protos = require('../lib/javascript/roll.js');

const { Roll } = protos;

protos = require('../lib/javascript/frame.js');

const { Frame } = protos;

protos = require('../lib/javascript/scorecard.js');

const { Scorecard } = protos;
const { ScorecardError } = protos;

describe('A Game', () => {
  let scorecard;

  beforeEach(() => { scorecard = new Scorecard(new Frame(1, Roll)); });

  it('should have an initial score of zero with one frame', () => {
    expect(scorecard.totalScore()).toEqual(0);
    expect(scorecard.getFrame(1)).toBeInstanceOf(Frame);
    expect(scorecard.getFrame(2)).not.toBeDefined();
  });

  it('should increase the total score and the score of the frame', () => {
    expect(scorecard.input(8)).toEqual(true);
    expect(scorecard.totalScore()).toEqual(8);
    expect(scorecard.getFrame(1).score()).toEqual(8);
    expect(scorecard.getFrame(2)).not.toBeDefined();
  });

  it('should have a second frame after 2 inputs', () => {
    scorecard.input(3);
    scorecard.input(5);
    expect(scorecard.totalScore()).toEqual(8);
    expect(scorecard.getFrame(1).score()).toEqual(8);
    expect(scorecard.getFrame(2)).toBeInstanceOf(Frame);
    expect(scorecard.getFrame(2).score()).toEqual(0);
    expect(scorecard.getFrame(3)).not.toBeDefined();
  });

  it('should handle a strike', () => {
    scorecard.input(10);
    expect(scorecard.getFrame(1).isStrike()).toEqual(true);
    expect(scorecard.getFrame(2)).toBeInstanceOf(Frame);
    scorecard.input(3);
    scorecard.input(3);
    expect(scorecard.totalScore()).toEqual(22);
    expect(scorecard.getFrame(3)).toBeInstanceOf(Frame);
    expect(scorecard.getFrame(3).score()).toEqual(0);
    scorecard.input(5);
    expect(scorecard.totalScore()).toEqual(27);
  });

  it('should handle a spare', () => {
    scorecard.input(7);
    scorecard.input(3);
    scorecard.input(3);
    scorecard.input(4);
    expect(scorecard.totalScore()).toEqual(20);
    expect(scorecard.getFrame(1).isSpare()).toEqual(true);
    expect(scorecard.getFrame(3).score()).toEqual(0);
  });

  it('should handle multiple strikes', () => {
    scorecard.input(10);
    scorecard.input(10);
    scorecard.input(3);
    scorecard.input(5);
    expect(scorecard.totalScore()).toEqual(49);
  });

  it('should end the game on the last frame without a strike or spare', () => {
    for (let i = 0; i < 18; i++) expect(scorecard.input(0)).toEqual(true);
    expect(scorecard.input(3)).toEqual(true);
    expect(scorecard.input(3)).toEqual(false);
    expect(scorecard.totalScore()).toEqual(6);
    expect(scorecard.getFrame(10).score()).toEqual(6);
    expect(() => scorecard.input(4)).toThrowError(ScorecardError);
  });

  it('should handle a strike on the last frame correctly', () => {
    for (let i = 0; i < 18; i++) expect(scorecard.input(0)).toEqual(true);
    scorecard.input(10);
    expect(scorecard.input(4)).toEqual(true);
    expect(scorecard.input(5)).toEqual(false);
    expect(scorecard.totalScore()).toEqual(19);
  });

  it('should handle a spare on the last frame correctly', () => {
    for (let i = 0; i < 18; i++) expect(scorecard.input(0)).toEqual(true);
    scorecard.input(6);
    expect(scorecard.input(4)).toEqual(true);
    expect(scorecard.input(7)).toEqual(false);
    expect(scorecard.totalScore()).toEqual(17);
  });

  it('should handle a perfect game', () => {
    for (let i = 0; i < 11; i++) expect(scorecard.input(10)).toEqual(true);
    expect(scorecard.input(10)).toEqual(false);
    expect(scorecard.totalScore()).toEqual(300);
  });

  it('should handle an example game from the brief correctly', () => {
    scorecard.input(1);
    scorecard.input(4);

    scorecard.input(4);
    scorecard.input(5);

    scorecard.input(6);
    scorecard.input(4);

    scorecard.input(5);
    scorecard.input(5);

    scorecard.input(10);

    scorecard.input(0);
    scorecard.input(1);

    scorecard.input(7);
    scorecard.input(3);

    scorecard.input(6);
    scorecard.input(4);

    scorecard.input(10);

    scorecard.input(2);
    scorecard.input(8);
    scorecard.input(6);

    expect(scorecard.totalScore()).toEqual(133);
  });
});
