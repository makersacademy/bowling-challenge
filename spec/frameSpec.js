describe('Bowling Frames Score', function() {

  var frame;

  beforeEach(function(){
      frame = new Frame();
  });

  it('can record a roll', function() {
    frame.roll(3);
    expect(frame.roll1).toEqual(3);
  });

  it('adds total of two rolls per frame', function(){
    frame.roll(3);
    frame.rollAgain(5);
    frame.addRolls();
    expect(frame.rollScore).toEqual(8);
  });

  it('knows when it is a strike', function(){
    frame.roll(10);
    frame.addRolls();
    expect(frame.isStrike).toBe(true);
  });

  it('knows when it is a spare', function(){
    frame.roll(5);
    frame.rollAgain(5);
    frame.addRolls();
    expect(frame.isSpare).toBe(true);
  });

  it('adds total of frame with bonus', function(){
    frame.rollScore = 10;
    frame.bonus = 5;
    frame.addScore();
    expect(frame.totalScore).toEqual(15);
  });
  
  it('adds a bonus roll', function(){
    frame.bonusRoll(3);
    expect(frame.bonus).toEqual(3);
  });
  
  it('adds a second bonus roll', function () {
    frame.bonusRoll(3);
    frame.bonusRollAgain(5);
    frame.addScore();
    expect(frame.bonus).toEqual(8);
  });
  
  it('adds bonus roll to the total score', function (){
    frame.rollScore = 10;
    frame.bonusRoll(3);
    frame.addScore();
    expect(frame.totalScore).toEqual(13);
  });
});
