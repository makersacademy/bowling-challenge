const Scorecard = require('./scorecard');
const Frame = require('./frame');

describe('integration', () => {
  let scorecard;
  beforeEach(() => { scorecard = new Scorecard() })

  it('returns zero points when player never hits a pin in all 10 frames', () => {
    for (let i = 0; i < 10; i++) {
      frame = new Frame(0, 0);
      scorecard.addFrame(frame);
    }
    expect(scorecard.calculateScore()).toEqual(0);  
  })

  it('returns 22 when 1st frame is a spare and next frame has 5 and 2 points', () => {
    frame1 = new Frame(6, 4);
    frame2 = new Frame(5, 2);
    
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);

    expect(scorecard.calculateScore()).toEqual(22);  
  })

  it('returns 28 when 1st frame is a strike and next frame has 5 and 2 points', () => {
    frame1 = new Frame(10, 0);
    frame2 = new Frame(5, 4);
    
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);

    expect(scorecard.calculateScore()).toEqual(28);  
  })


})


