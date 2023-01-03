const ScoreCard = require('./scorecard');


describe('Scorecard', () => {
  // created beforeEach loop so that I dont have to create a new instance of
  // ScoreCard on each test
  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard();
  })

  it('gives the score as Zero when you bowl a GutterGame', () => {
    rollMultiple(0, 20);
    expect(scoreCard.totalScore()).toBe(0);
  });

  it('gives the score as 20 when bowling 1 with each roll', () => {
    rollMultiple(1, 20);
    expect(scoreCard.totalScore()).toBe(20);
  });

  it('gives the correct score with spare logic in your game', () => {
    scoreCard.roll(5);
    scoreCard.roll(5);
    scoreCard.roll(3);
    rollMultiple(0, 17);
    expect(scoreCard.totalScore()).toBe(16); //spare with a score of 3 after 
  });

  it('gives the correct score with strike logic in your game', () => {
    scoreCard.roll(10);
    scoreCard.roll(3);
    scoreCard.roll(3);
    rollMultiple(0, 16);
    expect(scoreCard.totalScore()).toBe(22); //strike with a score of 3 and 3 after 
  });

  it('gives you a score of 300 when you play a perfect game', () => {
    rollMultiple(10, 12)
    expect(scoreCard.totalScore()).toBe(300);
  });

  function rollMultiple(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      scoreCard.roll(pins);
    }
  }
})

  

