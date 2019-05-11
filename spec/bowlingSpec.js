var Bowling = require('../bowling')

describe("Bowling", function(){

  it("ends the game if _frameCount is equal to 10", function(){
    var bowling = new Bowling();
    for (var i = 1; i < 20; i++ ) { bowling.roll(0); };
    expect(bowling.getFrame()).toBe(10);
  });

  // it("prints the scorecard after each play", function(){
  //   bowling.roll(0);
  //   expect(bowling._scorecard).toContain([1, 0]);
  // });
  //
  // it('shows an X for every strike', function(){
  //   bowling.roll(10);
  //   expect(bowling.printScorecard()).toBeUndefined();
  // });
  //
  // it('shows a / for every spare', function(){
  //   bowling.roll(4);
  //   bowling.roll(6);
  //   expect(bowling.printScorecard()).toBeUndefined();
  // });
  //
  // it('shows the total for each frame', function(){
  //   bowling.roll(5);
  //   bowling.roll(4);
  //   expect(bowling.getFrameResult()).toEqual(9);
  // });
  //
  // it('updates the score of the previou frame', function(){
  //   bowling.roll(4);
  //   bowling.roll(6);
  //   bowling.roll(5);
  //   expect(bowling.getFrameResult()).toEqual(20);
  // });

});
