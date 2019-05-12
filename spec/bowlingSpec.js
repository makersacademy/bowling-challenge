var Bowling = require('../bowling')

describe("Bowling", function(){

  // As a bowling player,
  // So that I can play several games,
  // I want every game to end after 10 frames.

  it("ends the game if _frameCount is equal to 10", function(){
    var bowling = new Bowling();
    for (var i = 0; i < 20; i++ ) { bowling.roll(0); };
    expect(bowling.getFrame()).toBe(11);
    expect(bowling.isFinished()).toBe(true);
  });

  // As a bowling player,
  // So that I can keep track of my game
  // I want to see my scorecard showing the frame number, each play, and the frame total.

  it("shows the scorecard with frame, play 1, play 2, and frame score", function(){
    var bowling = new Bowling();
    bowling.roll(3);
    bowling.roll(5);
    bowling.roll(4);
    bowling.roll(2);
    expect(bowling.getScorecard()).toContain([ 'Frame: 1', 'Play 1: 3', 'Play 2: 5', 'Frame score: 8' ],
     [ 'Frame: 2', 'Play 1: 4', 'Play 2: 2', 'Frame score: 6' ]);
  });

  // As a bowling player,
  // So that I my score is updated,
  // I want to see the total of the previous frame affected by strikes and spares.

  it('updates the score of the previous frame in case of spare', function(){
    var bowling = new Bowling();
    bowling.roll(4);
    bowling.roll(6);
    bowling.roll(5);
    bowling.roll(3);
    expect(bowling.getScorecard()).toContain([ 'Frame: 1', 'Play 1: 4', 'Play 2: /', 'Frame score: 15' ],
     [ 'Frame: 2', 'Play 1: 5', 'Play 2: 3', 'Frame score: 8' ]);
  });

  // As a bowling player,
  // So that I can see my spares more easily
  // I want to see an / in my scorecard after every spare.

  it('shows a / for every spare', function(){
    var bowling = new Bowling();
    bowling.roll(4);
    bowling.roll(6);
    bowling.roll(5);
    bowling.roll(3);
    expect(bowling.getScorecard()).toContain([ 'Frame: 1', 'Play 1: 4', 'Play 2: /', 'Frame score: 15' ],
     [ 'Frame: 2', 'Play 1: 5', 'Play 2: 3', 'Frame score: 8' ]);
  });

  // As a bowling player,
  // So that I can see my strikes more easily
  // I want to see an X in my scorecard after every strike.

  it('shows an X for every strike', function(){
    var bowling = new Bowling();
    console.log(bowling.getPlay())
    bowling.roll(10);
    console.log(bowling.getPlay())
    bowling.roll(6);
    console.log(bowling.getPlay())
    bowling.roll(3);
    console.log(bowling.getPlay())
    expect(bowling.getScorecard()).toContain([ 'Frame: 1', 'Play 1: X', 'Play 2: -', 'Frame score: 19' ],
     [ 'Frame: 2', 'Play 1: 6', 'Play 2: 3', 'Frame score: 9' ]);
  });
});
