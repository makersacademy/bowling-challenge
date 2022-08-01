const Frame = require('../lib/frame')
const Scorecard = require('../lib/scorecard')

describe('Scorecard',  () => {
  it('gets the total score of 1 frame', async () => {
    const scorecard = new Scorecard;
    scorecard.allFrames.push(new Frame(1, 2));
    expect(scorecard.getTotalScore()).toEqual(3);
  })

  it('gets the total score of multiple frames', () => {
    const scorecard = new Scorecard;
    scorecard.allFrames.push(new Frame(1, 2));
    scorecard.allFrames.push(new Frame(3, 2));
    scorecard.allFrames.push(new Frame(1, 4));
    scorecard.allFrames.push(new Frame(1, 9));
    expect(scorecard.getTotalScore()).toEqual(23)
  })

  it('adds strike bonus', () => {
    const scorecard = new Scorecard;
    firstFrame = new Frame(1, 1);
    frameStrike = new Frame(10, 0);
    lastFrame = new Frame(1, 1);
    
    scorecard.allFrames.push(firstFrame);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(firstFrame.getBonus()).toEqual(0);
    expect(frameStrike.getBonus()).toEqual(0);
    expect(lastFrame.getBonus()).toEqual(0);

    scorecard.allFrames.push(frameStrike);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(firstFrame.getBonus()).toEqual(0);
    expect(frameStrike.getBonus()).toEqual(0);
    expect(lastFrame.getBonus()).toEqual(0);

    scorecard.allFrames.push(lastFrame);
    scorecard.checkForBonus();
    scorecard.frame++;
    let bonus = lastFrame.roll1 + lastFrame.roll2;
    expect(firstFrame.getBonus()).toEqual(0);
    expect(frameStrike.getBonus()).toEqual(bonus);
    expect(lastFrame.getBonus()).toEqual(0);
  })

  it('adds bonus when first frame is a strike', () => {
    const scorecard = new Scorecard;
    frameStrike = new Frame(10, 0);
    frameNotStrike = new Frame(1, 1);

    scorecard.allFrames.push(frameStrike);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(frameStrike.getBonus()).toEqual(0);
    expect(frameNotStrike.getBonus()).toEqual(0);

    scorecard.allFrames.push(frameNotStrike);
    scorecard.checkForBonus();
    scorecard.frame++;
    let bonus = lastFrame.roll1 + lastFrame.roll2;
    expect(frameStrike.getBonus()).toEqual(bonus);
    expect(frameNotStrike.getBonus()).toEqual(0);
  })

  it('adds spare bonus to frame', () => {
    const scorecard = new Scorecard;
    firstFrame = new Frame(1, 1);
    frameSpare = new Frame(5, 5);
    lastFrame = new Frame(1, 1);
    
    scorecard.allFrames.push(firstFrame)
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(firstFrame.getBonus()).toEqual(0);
    expect(frameSpare.getBonus()).toEqual(0);
    expect(lastFrame.getBonus()).toEqual(0);

    scorecard.allFrames.push(frameSpare);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(firstFrame.getBonus()).toEqual(0);
    expect(frameSpare.getBonus()).toEqual(0);
    expect(lastFrame.getBonus()).toEqual(0);

    scorecard.allFrames.push(lastFrame);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(firstFrame.getBonus()).toEqual(0);
    expect(frameSpare.getBonus()).toEqual(lastFrame.roll1);
    expect(lastFrame.getBonus()).toEqual(0);
  })

  it('adds bonus when first frame is a spare', () => {
    const scorecard = new Scorecard;
    frameSpare = new Frame(5, 5);
    frameNotSpare = new Frame(1, 1)

    scorecard.allFrames.push(frameSpare);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(frameSpare.getBonus()).toEqual(0);
    expect(frameNotSpare.getBonus()).toEqual(0);

    scorecard.allFrames.push(frameNotSpare);
    scorecard.checkForBonus();
    scorecard.frame++;
    expect(frameSpare.getBonus()).toEqual(frameNotSpare.roll1);
    expect(frameNotSpare.getBonus()).toEqual(0);
  })
})
