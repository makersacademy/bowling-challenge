describe("Ball", function(){

  beforeEach(function(){
    ball = new Ball();
  });

  it("has a score set to zero initially", function(){
    expect(ball.score).toEqual(0);
  });

  it("score can be reset", function(){
    ball.score = 6;
    expect(ball.score).toEqual(6);
  });

});