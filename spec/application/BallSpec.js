describe("Ball", function(){

  beforeEach(function(){
    ball = new Ball();
  });

  it("has a score set to zero initially", function(){
    expect(ball.score).toEqual(0);
  });

  it("knows when it has been rolled", function(){
    ball.rolled();
    expect(ball.isRolled).toBe(true);
  });

});