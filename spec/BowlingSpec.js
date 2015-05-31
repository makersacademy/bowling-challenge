describe('Bowling', function() {

  var bowling = new Bowling();

  it('a new frame starts with 10 pins', function() {
    expect(bowling.frame).toEqual(10);
  });

  it('starts with a game score of 0', function(){
    expect(bowling.score).toEqual(0);
  });

  it('can bowl a 5 and add 5 points to score', function(){
    bowling.bowl(5);
    expect(bowling.score).toEqual(5);
  });

  it('after bowling a 5 there will only be 5 pins left in the frame', function(){
    expect(bowling.frame).toEqual(5);
  });

  it('can bowl a 3  in the second game in the frame', function(){
    bowling.bowl(3);
    expect(bowling.score).toEqual(8);
  });

  // it('can add the scores to the scorecard', function(){
  //   expect(bowling.score).toContain(8);
  // });

  it('after bowling 1 frame of 2 games there will be 2 pins left in the frame', function(){
    expect(bowling.frame).toEqual(2);
  });

  it('can start a second frame with 2 games',function(){
    bowling.reset()
    expect(bowling.frame).toEqual(10);
  });

  it('when starting the second frame the scorescore is at 8', function(){
    expect(bowling.score).toEqual(8);
  });

  it('can bowl a 6 in the first game of the second frame', function() {
    bowling.bowl(6);
    expect(bowling.score).toEqual(14);
  });

  it('can go bowl no higher than 10 on first game', function(){
    expect(function () {bowling.bowl(11)}).toThrow("There are only 10 pins to knock down!");
  });

  it('can bowl a strike', function(){
    var bowling = new Bowling();
    bowling.strike(10);
    expect(bowling.score).toEqual(10)
  });
  //Need to add scorecard and the double points on next go

});




