const protos = require('../../lib/javascript/scorecard.js');

const { Scorecard } = protos;
const { ScorecardError } = protos;

describe('Scorecard', () => {
  let scorecard;

  const roll = jasmine.createSpyObj('roll', {
    score: 8,
    addScore: 6,
  });

  let frame;

  beforeEach(() => {
    frame = jasmine.createSpyObj('frame', {
      score: 0,
      frameNumber: 1,
      addRoll: roll,
    });
    frame.getNextFrame = jasmine.createSpy('frame.getNextFrame', () => frame).and.callThrough();
    roll.addScore.calls.reset();
    scorecard = new Scorecard(frame);
  });

  it('should have an initial total score of 0', () => {
    expect(scorecard.totalScore()).toEqual(0);
  });

  it('should have an initial frame1', () => {
    expect(scorecard.getFrame(1)).toEqual(frame);
  });

  describe('.input', () => {
    it('should call frame.addRoll with the score', () => {
      scorecard.input(6);
      expect(frame.addRoll).toHaveBeenCalledWith(6);
    });

    it('should have the score of its frame', () => {
      scorecard.input(7);
      frame.score = jasmine.createSpy('frame.score', () => 7).and.callThrough();
      expect(scorecard.totalScore()).toEqual(7);
    });

    it('should try to add a score to previous roll', () => {
      scorecard.input(5);
      expect(roll.addScore).not.toHaveBeenCalled();
      scorecard.input(6);
      expect(roll.addScore).toHaveBeenCalledWith(6);
    });

    it('should try to add a score to the previous 2 rolls', () => {
      scorecard.input(6);
      scorecard.input(5);
      roll.addScore.calls.reset();
      scorecard.input(4);
      expect(roll.addScore).toHaveBeenCalledTimes(2);
    });

    it('should only try to add to the previous 2 rolls', () => {
      scorecard.input(6);
      scorecard.input(5);
      scorecard.input(4);
      roll.addScore.calls.reset();
      scorecard.input(3);
      expect(roll.addScore).toHaveBeenCalledTimes(2);
    });

    it('should ask the frame for the next frame', () => {
      scorecard.input(7);
      expect(frame.getNextFrame).toHaveBeenCalled();
    });

    it('should return true if the next frame is provided and the game continues', () => {
      expect(scorecard.input(8)).toEqual(true);
    });

    it('totalScore should be total of frames\' scores', () => {
      const frame2 = jasmine.createSpyObj('frame2', {
        score: 8,
        frameNumber: 2,
        addRoll: roll,
      });
      frame.getNextFrame = function getNextFrame() { return frame2; };
      frame.score = () => 4;
      scorecard.input(4);
      expect(scorecard.totalScore()).toEqual(12);
    });

    it('should handle end of game when the next frame is undefined', () => {
      frame.getNextFrame = () => undefined;
      expect(scorecard.input(6)).toEqual(false);
    });

    it('should throw an error if the game is continued after finishing', () => {
      frame.getNextFrame = () => undefined;
      scorecard.input(6);
      expect(() => scorecard.input(5))
        .toThrowError(ScorecardError, 'The game is already completed');
    });
  });
});
