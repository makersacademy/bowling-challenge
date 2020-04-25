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
      expect(bowling.makeCardTemplate()[1]).toEqual({
        r1PinsDown: 0,
        r1Score: 0,
        r2PinsDown: 0,
        r2Score: 0,
      });
      expect(bowling.card[10]).toEqual({
        r1PinsDown: 0,
        r1Score: 0,
        r2PinsDown: 0,
        r2Score: 0,
      });
    });
  });

  describe("#fillCard", function () {
    describe("fills in card correctly on FIRST ROLL of frame", function () {
      it("fills in thhe number of PINS for first roll on FIRST frame ", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 1;
        expect(bowling.fillCard(1, 1, 1)[1]["r1PinsDown"]).toEqual(1);
      });

      it("fills in the SCORE for first roll on FIRST frame ", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 1;
        expect(bowling.fillCard(1, 1, 1)[1]["r1Score"]).toEqual(1);
      });

      //
      it("fills in the SCORE  for first roll on  THIRD  frame", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 3;
        expect(bowling.fillCard(1, 10, 1)[3]["r1Score"]).toEqual(10);
      });
    });

    describe("fills in card correctly on SECOND ROLL of frame", function () {
      it("fills in the number of PINS on second roll of FIRST frame ", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 1;
        expect(bowling.fillCard(2, 4, 2)[1]["r2PinsDown"]).toEqual(2);
        expect(bowling.fillCard(2, 4, 2)[1]["r1PinsDown"]).toEqual(0);
      });

      it("fills in the SCORE on second roll of THIRD frame ", function () {
        bowling.frameKey = 3;
        bowling.makeCardTemplate();
        expect(bowling.fillCard(1, 4, 2)[3]["r2Score"]).toEqual(4);
        expect(bowling.fillCard(1, 4, 2)[3]["r1Score"]).toEqual(0);
      });
    });
  });

  describe("runCardMaking", function () {
    describe("returns the correct amount of PINS", function () {
      it("fills in the roll 1 number of PINS for Frame 1  as 3", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(3);
        expect(bowlingMock.runCardMaking()[1]["r1PinsDown"]).toEqual(3);
      });

      it("fills in the roll 1 number of PINS for Frame 3 as 5 ", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        expect(bowlingMock.runCardMaking()[3]["r1PinsDown"]).toEqual(5);
      });
    });

    describe("returns the correct score", function () {
      it("fills in the roll 1 and 2 SCORE for Frame One", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(3);
        expect(bowlingMock.runCardMaking()[1]["r1Score"]).toEqual(3);
        expect(bowlingMock.card[1]["r2Score"]).toEqual(6);
      });

      it("fills in the roll 1 and 2 SCORE for Frame three  ", function () {
        var bowlingMock = new Bowling();
        bowlingMock.makeCardTemplate();
        spyOn(bowlingMock, "getInput").and.returnValue(2);
        expect(bowlingMock.runCardMaking()[1]["r1Score"]).toEqual(2);
        //expect(bowlingMock.card["frame3"]["r1Score"]).toEqual(10);
        //expect(bowlingMock.card["frame3"]["r2Score"]).toEqual(12);
      });
    });
  });

  describe("Spares & Stikes", function () {
    describe("Testing state of PROPERTY spare ", function () {
      it("spare default is false", function () {
        expect(bowling.spare).toEqual(false);
      });

      it("If a spare has been thrown, spare will change to true", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        bowlingMock.runCardMaking();
        expect(bowlingMock.spare).toEqual(true);
      });

      it("If a spare is not thrown and spare is true, spare will change to  false", function () {
        // In the actual method bowling.spare will never start as true as default is false - I had to change the program to make this test pass by adding frameCount > 1
        var bowlingMock = new Bowling();
        bowlingMock.spare = true;
        spyOn(bowlingMock, "getInput").and.returnValue(2);
        bowlingMock.runCardMaking();
        expect(bowlingMock.spare).toEqual(false);
      });
    });

    describe("Testing state of PROPERTY strike ", function () {
      it("stike default position is false", function () {
        expect(bowling.strike).toEqual(false)
      });

      it("#switchStrike - will return true (roll 2)", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 1;
        var roll = 2
        var strike = 10
        bowling.fillCard(strike, 10, roll)
        expect(bowling.switchStrike(roll)).toEqual(true)
      });


      it("#switchStrike - will return true (roll 1)", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 1;
        var roll = 1
        var strike = 10
        var nonStrike = 3
        bowling.fillCard(strike, 10, roll)
        roll = 2
        bowling.fillCard(nonStrike, 10, roll)
        expect(bowling.switchStrike(roll)).toEqual(true)
      });

      it("#switchStrike - will return false when a strike is not rolled ", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 2;
        var roll = 2
        var nonStrike = 3
        bowling.fillCard(nonStrike, 20, roll)
        roll = 20
        bowling.fillCard(nonStrike, 23, roll)
        expect(bowling.switchStrike(roll)).toEqual(false)
      });

      
    
    });
    describe("#scoreSpares ", function () {
      it("If a spare is thrown the score from the first roll of the next frame will be added to the score of the frame", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        expect(bowlingMock.runCardMaking()[1]["r2Score"]).toEqual(15);
        expect(bowlingMock.card[2]["r2Score"]).toEqual(30);
        expect(bowlingMock.card[3]["r2Score"]).toEqual(45);
      });
    });
    xdescribe("#scoreStrikes ", function () {
      it("If a strike is thrown the score from BOTH rolls of the next frame will be added to the score of the frame", function () {
    
      });
    });
  });
});
