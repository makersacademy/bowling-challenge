describe("Frame", function() {

  var frame;
  var frameSpare;
  var frameNotSpare;
  var frameStrike;
  var frameNotStrike;
  var ErrorMessage = "Illegal roll"

  beforeEach(function() {
    frame = new Frame();
    frameSpare = new Frame();
    frameNotSpare = new Frame();
    frameStrike = new Frame();
    frameNotStrike = new Frame();
  });

  it("starts with 10 pins", function() {
    expect(frame.pinsRemaining).toEqual(10);
  })

  it("has a total score starting at zero", function() {
    expect(frame.totalScore).toEqual(0);
  });

  it("can be set as the last frame", function(){
    frame.setLastFrame();
    expect(frame.isLastFrame).toBe(true);
  });

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
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(function() { frame.firstRoll(); }).toThrowError(ErrorMessage);
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(frame.firstRoll()).toEqual(6);
    });

    it("registers a strike if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      expect(frame.firstRoll()).toEqual("Strike!")
    });

    it("updates total score", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.totalScore).toEqual(6);
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
      spyOn(Math, 'random').and.returnValue(0.3);
      frame.firstRoll();
      frame.secondRoll();
      expect(function() { frame.secondRoll(); }).toThrowError(ErrorMessage);
    });

    it("can't be taken before the first roll", function(){
      expect(function() { frame.secondRoll(); }).toThrowError(ErrorMessage);
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual(3);
    });

    it("registers a spare if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual("Spare!")
    });

    it("updates total score", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.totalScore).toEqual(9);
    });

    it("can't be taken following a strike", function() {
      spyOn(Math, 'random').and.returnValue(0.99);
      frame.firstRoll();
      expect(function() { frame.secondRoll(); }).toThrowError(ErrorMessage);
    });

  });

  describe("#spareUpdate", function(){

    it("adds the number given to the total score of the frame", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frameSpare.firstRoll();
      frameSpare.secondRoll();
      var number = 6;
      frameSpare.spareUpdate(number);
      expect(frameSpare.totalScore).toEqual(16);
    });

    it("does nothing if called on a frame that didn't register a spare", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      frameNotSpare.firstRoll();
      frameNotSpare.secondRoll();
      var number = 6;
      frameNotSpare.spareUpdate(number);
      expect(frameNotSpare.totalScore).toEqual(5);
    });

    it("does nothing if called on a frame that has already been updated", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frameSpare.firstRoll();
      frameSpare.secondRoll();
      var number = 6;
      frameSpare.spareUpdate(number);
      frameSpare.spareUpdate(number);
      expect(frameSpare.totalScore).toEqual(16);
    });

  });

  describe("#strikeUpdate", function(){

    it("adds the number given to the total score of the frame", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frameStrike.firstRoll();
      var number = 6;
      frameStrike.strikeUpdate(number);
      expect(frameStrike.totalScore).toEqual(16);
    });

    it("does nothing if called on a frame that didn't register a strike", function(){
      spyOn(Math, 'random').and.returnValue(0.3);
      frameNotStrike.firstRoll();
      frameNotStrike.secondRoll();
      var number = 6;
      frameNotStrike.strikeUpdate(number);
      expect(frameNotStrike.totalScore).toEqual(5);
    });

    it("does nothing if called on a frame that has already been updated", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      frameStrike.firstRoll();
      var number = 6;
      frameStrike.strikeUpdate(number);
      frameStrike.strikeUpdate(number);
      expect(frameStrike.totalScore).toEqual(16);
    });

  });

  describe("Last Frame", function(){

    beforeEach(function() {
      frame.setLastFrame();
    });

    describe("#firstRoll", function(){

      it("resets the pins if a strike is registered", function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        frame.firstRoll();
        expect(frame.pinsRemaining).toEqual(10);
      });

    });

    describe("#secondRoll", function(){

      it("allows a second roll following a strike", function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        frame.firstRoll();
        expect(function(){ frame.secondRoll(); }).not.toThrowError();
      });

      it("resets the pins if a spare is registered", function(){
        spyOn(Math, 'random').and.returnValue(0.8);
        frame.firstRoll();
        frame.secondRoll();
        expect(frame.pinsRemaining).toEqual(10);
      });

      it("can register a strike following a strike on first roll", function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        frame.firstRoll();
        expect(frame.secondRoll()).toEqual("Strike!");
      });

    });

    describe("#thirdRoll", function(){

      it("can't be taken before the first roll", function(){
        expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
      });

      it("can't be taken before the second roll", function(){
        spyOn(Math, 'random').and.returnValue(0.99);
        frame.firstRoll();
        expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
      });

      it("can't be taken if neither a spare nor strike are rolled", function(){
        spyOn(Math, 'random').and.returnValue(0.3);
        frame.firstRoll();
        frame.secondRoll();
        expect(function() { frame.thirdRoll(); }).toThrowError(ErrorMessage);
      });

      it("can't be taken if frame isn't the last frame", function(){
        var frameNotLast = new Frame();
        spyOn(Math, 'random').and.returnValue(0.8);
        frameNotLast.firstRoll();
        frameNotLast.secondRoll();
        expect(function() { frameNotLast.thirdRoll(); }).toThrowError(ErrorMessage);
      });

      describe("following two strikes", function(){

        beforeEach(function(){
          spyOn(Math, 'random').and.returnValue(0.99);
          frame.firstRoll();
          frame.secondRoll();
        });

        it("returns the number of pins knocked down", function(){
          spyOn(Math, 'floor').and.returnValue(4);
          expect(frame.thirdRoll()).toEqual(4);
        });

        it("registers a strike if ten pins knocked down", function(){
          spyOn(Math, 'floor').and.returnValue(10);
          expect(frame.thirdRoll()).toEqual("Strike!");
        });

      });

      describe("following a spare", function(){

        beforeEach(function(){
          spyOn(Math, 'random').and.returnValue(0.8);
          frame.firstRoll();
          frame.secondRoll();
        });

        it("returns the number of pins knocked down", function(){
          spyOn(Math, 'floor').and.returnValue(4);
          expect(frame.thirdRoll()).toEqual(4);
        });

        it("registers a strike if ten pins knocked down", function(){
          spyOn(Math, 'floor').and.returnValue(10);
          expect(frame.thirdRoll()).toEqual("Strike!");
        });

      });

      xdescribe("when going for a spare", function(){

        beforeEach(function(){
          spyOn(Math, 'random').and.returnValue(0.99);
          frame.firstRoll();
          frame.secondRoll();
          // Math.random().isSpy = false;
        });

        it("returns the number of pins knocked down", function(){
          // Math.random.isSpy = false;
          console.log(jasmine.isSpy(Math.random));
          spyOn(Math, 'random').and.returnValue(0.5);
          expect(frame.thirdRoll()).toEqual("Strike!");
        });

        xit("registers a strike if ten pins knocked down", function(){
          spyOn(Math, 'floor').and.returnValue(10);
          expect(frame.thirdRoll()).toEqual("Strike!");
        });

      });

    });

  });

});
