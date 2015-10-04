describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with 10 pins", function() {
    expect(frame.pinsRemaining).toEqual(10);
  })

  describe("#rollOne", function() {

    it("knocks down pins and retains the value (stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.rollOne();
      expect(frame.rollOne).toEqual(6);
    });

    it("pins remaining is reduced after roll (roll stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.rollOne();
      expect(frame.pinsRemaining).toEqual(4);
    });

    it("doesn't allow repeated rolls", function(){
      frame.rollOne();
      console.log(frame)
      expect(function() { frame.rollOne(); }).toThrowError();
    });

  });



  // it("score accumulates for each successive roll (rolls stubbed to 6)", function(){
  //   spyOn(Math, 'random').and.returnValue(0.6);
  //   frame.roll(1);
  //   frame.roll(2);
  //   expect(frame.score).toEqual(12);
  // });

  // describe("number of rolls allowed", function(){

  //   it("restricted to 2 by default (rolls stubbed to 4)", function(){
  //     spyOn(Math, 'random').and.returnValue(0.4);
  //     frame.roll(1);
  //     frame.roll(2);
  //     expect(function(){ frame.roll(3); }).toThrowError("Frame is over")
  //   });

  //   it("restricted to 1 if a strike is rolled", function(){
  //     spyOn(Math, 'random').and.returnValue(0.99);
  //     frame.roll(1);
  //     expect(function(){ frame.roll(2); }).toThrowError("Frame is over")
  //   });

  //   xit("is 3 in final frame if a strike is rolled first", function(){
  //     frame.isLastFrame = true
  //     spyOn(Math, 'random').and.returnValue(0.99);
  //     frame.rollOne();
  //     frame.rollTwo();
  //     frame.rollThree();
  //   });

  // });

});