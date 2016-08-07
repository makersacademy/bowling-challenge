describe ("Frame", function(){
  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  it("frame begins with ball 1", function(){
    expect(frame.getRollNumber()).toEqual(1);
  });

  it("frame begins with 10 pins", function(){
    expect(frame.getPinsStanding()).toEqual(10);
  });

  it ("frame begins with no knocked down pins", function(){
    expect(frame.getFirstPinsDown()).toEqual(0);
  });

  describe("normal scores", function(){

    it("first roll can knock pins down", function(){
      spyOn(Math, "random").and.returnValue(0.4);
      frame.firstRoll();
      expect(frame.getFirstPinsDown()).toEqual(4);
    });

    it("knocked down pins subtracted from pins left", function(){
      spyOn(Math, "random").and.returnValue(0.4);
      frame.firstRoll();
      expect(frame.getPinsStanding()).toEqual(6);
    });

    it("can roll a second time after first", function(){
      frame.firstRoll();
      expect(frame.getRollNumber()).toEqual(2);
    });

    it("second roll can knock remaining pins down", function(){
      frame.pinsStanding = 6
      spyOn(Math, "random").and.returnValue(0.5);
      frame.secondRoll();
      expect(frame.getSecondPinsDown()).toEqual(5);
      expect(frame.getPinsStanding()).toEqual(1);
    });

  });

  describe("strike", function(){

  });

  describe("spare", function(){

  });


});
