const ScoreCard = require('../../public/js/scorecard');

describe('ScoreCard', () => {
  let testScoreCard = new ScoreCard();

  beforeEach(() => {
    testScoreCard.setRollOne(5);
    testScoreCard.setRollTwo(4);
    testScoreCard.setRollOne(6);
    testScoreCard.setRollTwo(2);
  });

  afterEach(() => {
    testScoreCard = new ScoreCard();
  });

  it('takes a name', () => {
    testScoreCard.addName('Sam');

    expect(testScoreCard.getName()).toEqual('Sam');
  });

  it('keeps track of the current frame', () => {
    const newScoreCard = new ScoreCard();

    expect(newScoreCard.getCurrentFrame()).toBe(1);
    expect(testScoreCard.getCurrentFrame()).toBe(3);
  });

  it('lets players set scores for each frame', () => {
    expect(testScoreCard.getTotalScore()).toEqual(17);
  });

  it('prevents players from adding two scores in a frame with a sum greater than 10', () => {
    testScoreCard.setRollOne(9);

    expect(() => { testScoreCard.setRollTwo(5); }).toThrowError(ScoreCard.INVALID_SCORE());
  });

  it('prevents players from entering a score for a second roll until after the first roll', () => {
    expect(() => { testScoreCard.setRollTwo(7); }).toThrowError(ScoreCard.NO_FIRST_ROLL());
  });

  it('prevents players from entering a score for a third roll until after the first and second rolls', () => {
    expect(() => {
      testScoreCard.setRollThree(7);
    }).toThrowError(ScoreCard.NO_FIRST_OR_SECOND_ROLL());
  });

  describe('a strike', () => {
    let strikeScoreCard = new ScoreCard();

    beforeEach(() => {
      strikeScoreCard = new ScoreCard();
    });

    it('automatically skips to the next frame', () => {
      strikeScoreCard.setRollOne(10);

      expect(strikeScoreCard.getCurrentFrame()).toBe(2);
    });

    it('adds bonus points to the striked frame for the next two rolls', () => {
      strikeScoreCard.setRollOne(10);
      strikeScoreCard.setRollOne(6);
      strikeScoreCard.setRollTwo(3);
      strikeScoreCard.setRollOne(4);

      expect(strikeScoreCard.getTotalScore()).toBe(32);
    });
  });

  describe('a spare', () => {
    const spareScoreCard = new ScoreCard();

    it('adds bonus points to the spared frame for the next roll', () => {
      spareScoreCard.setRollOne(3);
      spareScoreCard.setRollTwo(7);
      spareScoreCard.setRollOne(4);
      spareScoreCard.setRollTwo(3);

      expect(spareScoreCard.getTotalScore()).toBe(21);
    });
  });

  it('does not reward bonus points on the tenth frame', () => {
    const tenFrameScoreCard = new ScoreCard();

    for (let i = 0; i < 10; i += 1) {
      tenFrameScoreCard.setRollOne(9);
      tenFrameScoreCard.setRollTwo(1);
    }

    tenFrameScoreCard.setRollThree(9);

    expect(tenFrameScoreCard.getTotalScore()).toBe(190);
  });

  it('scores a maximum of 300', () => {
    const perfectGameScoreCard = new ScoreCard();

    for (let i = 0; i < 10; i += 1) {
      perfectGameScoreCard.setRollOne(10);
    }

    perfectGameScoreCard.setRollTwo(10);
    perfectGameScoreCard.setRollThree(10);

    expect(perfectGameScoreCard.getTotalScore()).toBe(300);
  });
});
