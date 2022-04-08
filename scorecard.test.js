const Scorecard = require('./scorecard');
const Frame = require('./frame');

describe('Scorecard', () => {
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('should initialise with turn as 1', () => {
    expect(scorecard.turn).toEqual(1);
  });

  it('initialises with frames as an array with one frame', () => {
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
    expect(scorecard.frames.length).toBe(1);
  });

  it('when rolled should create a new frame if the frame is complete', () => {
    scorecard.roll(10);
    scorecard.roll(3);

    expect(scorecard.frames.length).toEqual(2);
  });

  it('should let you roll a second roll for the same frame if the frame is incomplete', () => {
    scorecard.roll(8);
    scorecard.roll(2);

    expect(scorecard.frames.length).toEqual(1);
  });

  it('raises an error when trying to roll after 10 frames', () => {
    const finalFrame = new Scorecard(10);
    finalFrame.roll(2);
    finalFrame.roll(2);

    expect(() => {
      finalFrame.roll(3);
    }).toThrow('Your game is complete');
  });

  it('should calculate score', () => {
    scorecard.roll(3);
    scorecard.roll(5);

    expect(scorecard.score()).toEqual(8);
  });

  it('should calculate a score whereby a strike is worth 10 plus the following frames score', () => {
    scorecard.roll(10);
    scorecard.roll(3);
    scorecard.roll(4);

    expect(scorecard.score()).toEqual(24);
  });

  it('should calculate a score whereby a spare is worth 10 plus the following rolls score', () => {
    scorecard.roll(7);
    scorecard.roll(3);
    scorecard.roll(4);
    scorecard.roll(2);

    expect(scorecard.score()).toEqual(20);
  });

  it('should calculate a correct score across multiple frames', () => {
    scorecard.roll(10);
    scorecard.roll(2);
    scorecard.roll(8);
    scorecard.roll(5);
    scorecard.roll(4);
    scorecard.roll(2);
    scorecard.roll(6);

    expect(scorecard.score()).toEqual(52);
  });

  it('should calculate a perfect game to be 300', () => {
    for (let i = 0; i < 12; i++) {
      scorecard.roll(10);
    }

    expect(scorecard.score()).toEqual(300);
  });

  it('should correctly calculate a strike followed by a spare followed by another frame', () => {
    scorecard.roll(10);
    scorecard.roll(8);
    scorecard.roll(2);
    scorecard.roll(3);
    scorecard.roll(6);

    expect(scorecard.score()).toEqual(42);
  });

  it('should calculate two strikes followed by a standard roll followed by a spare', () => {
    scorecard.roll(10);
    scorecard.roll(10);
    scorecard.roll(3);
    scorecard.roll(5);
    scorecard.roll(5);
    scorecard.roll(5);

    expect(scorecard.score()).toEqual(59);
  });

  it('should be able to check score after a frame between frames', () => {
    scorecard.roll(10);
    scorecard.roll(10);
    scorecard.roll(3);
    scorecard.roll(5);

    expect(scorecard.score()).toEqual(49);

    scorecard.roll(5);
    scorecard.roll(5);

    expect(scorecard.score()).toEqual(59);
  });

  it('should be able to check score mid frame', () => {
    scorecard.roll(10);
    scorecard.roll(10);
    scorecard.roll(3);

    expect(scorecard.score()).toEqual(39);
  });
});
