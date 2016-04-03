describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame(10,0);
  });

  it("receives the result of two rolls", function(){
    expect(frame.roll1 >= 0 && frame.roll1 <= 10).toBeTruthy();
    expect(frame.roll2 >= 0 && frame.roll2 <= 10).toBeTruthy();
  });

  it("expect total pins knocked down to be no more than 10", function(){
    expect(frame.roll1 + frame.roll2).toBeLessThan(11);
  });
});
