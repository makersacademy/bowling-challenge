describe("Feature Tests", function(){

  var bowling;

  beforeEach(function(){
    bowling = new BowlingGame();
    bowling.startGame();
  });

  it('rolls a gutter game', function(){
    for(var i = 0; i<20; i++){
      bowling.enterScore(0);
    }
    expect(bowling.calculateScore()).toEqual(0);
  })

  it('rolls a non-spare or strike game', function(){
    for(var i = 0; i<20; i++){
      bowling.enterScore(3);
    }
    expect(bowling.calculateScore()).toEqual(60);
  })

  it('rolls a game of spares', function(){
    for(var i = 0; i<20; i++){
      bowling.enterScore(5);
    }
    bowling.enterScore(0);
    expect(bowling.calculateScore()).toEqual(145);
  })

  it('rolls a perfect game', function(){
    for(var i = 0; i<13; i++){
      bowling.enterScore(10);
    }
    expect(bowling.calculateScore()).toEqual(300);
  })

});
