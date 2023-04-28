const Scorecard = require('../../models/scorecard.js');
const Frame = require('../../models/frame.js');

describe('Scorecard-Frame Integration', () => {
  
  beforeEach(() => {
    scorecard = new Scorecard;
  })
    
  it("adds 10 frames to the this.frames array", () => {
    for (let i = 0; i < 10; i++) {
      frame = new Frame;
      scorecard.addFrame(frame);
    }
    expect(scorecard.frames.length).toBe(10);
  });

  xit("calculates full score of frames", () => {
    for (let i = 0; i < 10; i++) {
      frame = new Frame;
      frame.addPoints(5, 3);
      scorecard.addFrame(frame);
    }
    expect(scorecard.calculateScore()).toBe(80);
  });

  it("adds points correctly when the first bowl is a strike/10", () => {
    frame = new Frame;
    frame.addPoints(10, 0);
    scorecard.addFrame(frame);

    for (let i = 0; i < 9; i++) {
      frame = new Frame;
      frame.addPoints(5, 3);
      scorecard.addFrame(frame);
    }
    expect(scorecard.calculateScore()).toBe(90);
  });

  it("calculates correct score when ninth frame has a strike", () => {
    for (let i = 0; i < 9; i++) {
      frame = new Frame;
      frame.addPoints(10, 0);
      scorecard.addFrame(frame);
    }
    frame = new Frame;
    frame.addPoints(10, 10, 10);
    scorecard.addFrame(frame);
    expect(scorecard.calculateScore()).toBe(300);
  });
});
