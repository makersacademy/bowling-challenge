/* describe('Thermostat', function() { 
  var thermostat; 
  
    beforeEach(function() {  
      thermostat  = new Thermostat();
    });
  
    describe( 'temperature to start at 20', function(){
      it('returns 20', function(){
        expect(thermostat.startTemperature).toEqual(20)
      });
    }); 
 });

 */

describe("#Bowling", function () {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe("#calculateScore ", function () {
    it(" returns 1", function () {
      expect(bowling.calculateScore(1)).toEqual(1);
    });
    it("adds amount  of pins down together and returns 5", function () {
      bowling.calculateScore(1);
      expect(bowling.calculateScore(4)).toEqual(5);
    });
  });

  describe("#makeCardTemplate", function () {
    it("stores -> roll1 number of pins down; roll1 score; roll2 number of pins down; roll2 score --- in key  labelled by the frame number ", function () {
      bowling.calculateScore(1);

      bowling.calculateScore(4);

      expect(bowling.makeCardTemplate()["frame1"]).toEqual({
        r1PinsDown: 0,
        r1score: 0,
        r2PinsDown: 0,
        r2score: 0,
      });
      expect(bowling.card["frame10"]).toEqual(
        { r1PinsDown: 0, r1score: 0, r2PinsDown: 0, r2score: 0 }
        //);
      );
    });
  });

  xdescribe("#loop", function () {
    it("loops 'frame + number of loop' 10 times", function () {
      bowling.loop();
      expect(bowling.frameKey).toEqual("frame10");
    });

    it("creates a nested loop and loops 'Roll' twice for every time it loops 'frame' ", function () {
      bowling.loop();
      expect(bowling.rollNum).toEqual(2);
    });
  });

  describe("#fillCard", function () {
    describe("fills in FRAME after  ONE roll", function () {
      it("fills in the number of PINS  after ONE roll ", function () {
        bowling.makeCardTemplate();
        var bowlingMock = new Bowling();
        bowlingMock.makeCardTemplate();
        spyOn(bowlingMock, "getInput").and.returnValue(3);
        expect(bowlingMock.fillCard()["frame1"]["r1PinsDown"]).toEqual(3);
      });

      it("fills in the SCORE after ONE roll", function () {
        var bowlingMock = new Bowling();
        bowlingMock.makeCardTemplate();
        spyOn(bowlingMock, "getInput").and.returnValue(1);
        expect(bowlingMock.fillCard()["frame1"]["r1Score"]).toEqual(1);
      });
      it("fills in the SCORE  after THREE rolls ", function () {
        var bowlingMock = new Bowling();
        bowlingMock.makeCardTemplate();
        spyOn(bowlingMock, "getInput").and.returnValue(2);
        expect(bowlingMock.fillCard()["frame3"]["r1Score"]).toEqual(6);
      });

      xdescribe("fills in ROLL correctly", function () {
        it("fills in the number of PINS  after TWO rolls ", function () {
          bowling.makeCardTemplate();
          bowling.calculateScore(1);
          bowling.calculateScore(4);
          expect(bowling.fillCard()["frame1"]["r2PinsDown"]).toEqual(1);
        });
      });
    });
  });

  xdescribe("#makeCard", function () {
    it("returns 1", function () {
      bowling.numPinsDown = 1;
      bowling.makeCardTemplate();
      //bowling.makeCard()
      expect(bowling.makeCard()["frame1"]["r1PinsDown"]).toEqual(1);
    });
  });

  describe("run_card_making", function () {
    it("returns 3 ", function () {
      var bowlingMock = new Bowling();
      spyOn(bowlingMock, "getInput").and.returnValue(3);
      expect(bowlingMock.run_card_making()["frame1"]["r1PinsDown"]).toEqual(3);
    });
  });
});
