describe('Frame', function() {
  var frame;
  var frame2;
  var frame3;
  var game;

  beforeEach(function() {
    frame = new Frame();
    game = jasmine.createSpyObj('game',['addFrame','calcFrameScore']);
   });

   it('can update the rolls in a frame', function () {
     frame.update(1, 3);
     expect(frame.getAllRolls()).toEqual([1, 3]);
   });

  it('can get the number of knocked down pins in a roll', function () {
    expect(frame.getRoll(1)).toEqual(0);
  });

  it('can return the number of all rolls in a frame', function () {
    expect(frame.getAllRolls()).toEqual([0, 0]);
  });

  it('can return the sum of all rolls in a frame', function () {
    frame.update(4, 3);
    expect(frame._rollSum()).toEqual(7);
  });

  it('can tell if a frame is a strike', function () {
    frame.update(10, 0);
    expect(frame._isStrike()).toEqual(true);
    expect(frame._isSpare()).toEqual(false);
  });

  it('can tell if a frame is a spare', function () {
    frame.update(4, 6);
    expect(frame._isSpare()).toEqual(true);
    expect(frame._isStrike()).toEqual(false);
  });

  it('can calculate the bonus for a strike', function () {
    frame.update(10, 0);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcStrikeBonus(frame2)).toEqual(7);
  });

  it('can calculate the bonus for a spare', function () {
    frame.update(4, 6);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcSpareBonus(frame2)).toEqual(2);
  });

  it('can calculate the bonus as 0 if the frame is neither spare nor strike', function () {
    frame.update(3, 4);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcBonus(frame2)).toEqual(0);
  });

  it('can calculate the total score of a frame', function () {
    frame.update(4, 6);
    frame2 = new Frame();
    frame2.update(2, 5);
    expect(frame.calcScore(frame2)).toEqual(12);
  });

  it('can calculate the bonus of a double strike', function () {
    frame.update(10, 0);
    frame2 = new Frame();
    frame2.update(10, 0);
    frame3 = new Frame();
    frame3.update(5, 4);
    expect(frame.calcBonus(frame2, frame3)).toEqual(15);
  });

  it('can calculate the score of a double strike', function () {
    frame.update(10, 0);
    frame2 = new Frame();
    frame2.update(10, 0);
    frame3 = new Frame();
    frame3.update(5, 4);
    expect(frame.calcScore(frame2, frame3)).toEqual(25);
  });

  it('can calculate the bonus of a triple strike', function () {
    frame.update(10, 0);
    frame2 = new Frame();
    frame2.update(10, 0);
    frame3 = new Frame();
    frame3.update(10, 0);
    expect(frame.calcBonus(frame2, frame3)).toEqual(20);
  });

  it('can calculate the score of a triple strike', function () {
    frame.update(10, 0);
    frame2 = new Frame();
    frame2.update(10, 0);
    frame3 = new Frame();
    frame3.update(10, 0);
    expect(frame.calcScore(frame2, frame3)).toEqual(30);
  });

  it ("calculates the bonus for a strike in the final frame", function(){
    frame.rolls = [10, 10, 10];
    expect(frame.calcBonus()).toEqual(0);
  });

  it ("calculates the score for a strike in the final frame", function(){
    frame.rolls = [10, 10, 10];
    expect(frame.calcScore()).toEqual(30);
  });

  it ("calculates the bonus for a spare in the final frame", function(){
    frame.rolls = [3, 7, 6];
    expect(frame.calcBonus()).toEqual(0);
  });

  it ("calculates the score for a spare in the final frame", function(){
    frame.rolls = [3, 7, 6];
    expect(frame.calcScore()).toEqual(16);
  });

  it ("calculates the bonus for final frame without spare or strike", function(){
    frame.rolls = [3, 4];
    expect(frame.calcBonus()).toEqual(0);
  });

  it ("calculates the score for final frame without spare or strike", function(){
    frame.rolls = [3, 4,];
    expect(frame.calcScore()).toEqual(7);
  });
});
