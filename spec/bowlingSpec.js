describe("Bowling", function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  it ("starts a new Score Card with a score of zero", function(){
    expect(bowling._score).toEqual(0);
  })

  it("scores a gutter game", function(){
    for(var i = 0; i < 20; i++){
      bowling.throwBall(0);
    };
    bowling.calculateScore();
    expect(bowling.getScore()).toEqual(0);
  })

  it("scores one frame", function(){
    bowling.throwBall(4);
    bowling.throwBall(5);
    bowling.calculateScore();
    expect(bowling.getScore()).toEqual(9);
  });

  it("says if spare or not", function(){
    bowling.throwBall(5);
    bowling.throwBall(5);
    expect(bowling.isSpare(bowling._frames[0])).toEqual(true);
  })

  it("says if strike or not", function(){
    bowling.throwBall(10);
    expect(bowling.isStrike(bowling._frames[0])).toEqual(true);
  })

  it("scores a spare", function(){
    bowling.throwBall(5);
    bowling.throwBall(5);
    bowling.throwBall(5);
    bowling.throwBall(4);
    bowling.calculateScore();
    expect(bowling.getScore()).toEqual(24);
  })

  it("scores a strike", function(){
    bowling.throwBall(10);
    bowling.throwBall(5);
    bowling.throwBall(4);
    bowling.calculateScore();
    expect(bowling.getScore()).toEqual(28);
  })

  it("scores multiple frames", function(){
    bowling.throwBall(4);
    bowling.throwBall(5);
    bowling.throwBall(5);
    bowling.throwBall(4);
    bowling.calculateScore();
    expect(bowling.getScore()).toEqual(18);
  })

  it("scores a perfect game", function(){
    var times = 12;
    for(var i=0; i < times; i++){
      bowling.throwBall(10);
    }
    bowling.calculateScore();
    expect(bowling.getScore()).toEqual(300);
  })
});

// bowling = new Bowling;
// bowling.throwBall(10);
// bowling.calculateScore();
// bowling.getScore();
// bowling.throwBall(5);
// bowling.throwBall(4);
// bowling.calculateScore();
