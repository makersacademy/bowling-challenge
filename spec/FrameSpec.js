describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with 10 pins", function() {
    expect(frame.pinsRemaining).toEqual(10);
  })

  describe("#firstRoll", function() {

    it("knocks down pins and retains the value (stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.firstRollScore).toEqual(6);
    });

    it("pins remaining is reduced after roll (roll stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.pinsRemaining).toEqual(4);
    });

    it("doesn't allow repeated rolls", function(){
      frame.firstRoll();
      expect(function() { frame.firstRoll(); }).toThrowError("Already rolled");
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(frame.firstRoll()).toEqual(6);
    });

    it("registers a strike if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      expect(frame.firstRoll()).toEqual("Strike!")
    });

  });

  describe("#secondRoll", function() {

    it("knocks down pins from those remaining after the first roll", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.secondRollScore).toEqual(3);
    });

    it("pins remaining is reduced after roll", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.pinsRemaining).toEqual(1);
    });

    it("doesn't allow repeated rolls", function(){
      frame.firstRoll();
      frame.secondRoll();
      expect(function() { frame.secondRoll(); }).toThrowError("Already rolled");
    });

    it("can't be taken before the first roll", function(){
      expect(function() { frame.secondRoll(); }).toThrowError("Awaiting first roll");
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual(3);
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