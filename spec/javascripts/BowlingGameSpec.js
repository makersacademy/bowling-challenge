describe("Bowling", function(){
  it("Gutter game", function(){
    var bowling = new Bowling();

    var times = 20;
    for(var i=0; i < times; i++){
      bowling.roll(0);
    };

    expect(bowling.result()).toEqual(0);
  });
});
