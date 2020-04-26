


describe("#Bowling", function () {
  const STRIKE = 10
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
      expect(bowling.makeCardTemplate()).toEqual({1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {}, 9: {}, 10: {}});
      
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
        expect(bowling.fillCard(2, 4, 2)[1]["r1PinsDown"]).toEqual(undefined);
      });

      it("fills in the SCORE on second roll of THIRD frame ", function () {
        bowling.frameKey = 3;
        bowling.makeCardTemplate();
        expect(bowling.fillCard(1, 4, 2)[3]["r2Score"]).toEqual(4);
        expect(bowling.fillCard(1, 4, 2)[3]["r1Score"]).toEqual(undefined);
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
    var roll
    beforeEach(function () {

      nonStrike = 3
    });
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
        roll = 2
        bowling.fillCard(STRIKE, 10, roll)
        expect(bowling.switchStrike(roll)).toEqual(true)
        expect(bowling.strike).toEqual(true)
      });


      it("#switchStrike - will return true (roll 1)", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 1;
        roll = 1
        bowling.fillCard(STRIKE, 10, roll)
        roll = 2
        bowling.fillCard(nonStrike, 10, roll)
        expect(bowling.switchStrike(roll)).toEqual(true)
        expect(bowling.strike).toEqual(true)
      });

      it("#switchStrike - will return false when a strike is not rolled ", function () {
        bowling.makeCardTemplate();
        bowling.frameKey = 2;
        roll = 1
        bowling.fillCard(nonStrike, 20, roll)
        roll = 2
        bowling.fillCard(nonStrike, 23, roll)
        expect(bowling.switchStrike(roll)).toEqual(false)
        expect(bowling.strike).toEqual(false)
      });

      it("#runCardMaking - will change property: strike to true when strike is rolled ", function () {
        // need to work out a way to be able to choose values each roll - otherwise it does not accurately reflect what is happening in program and also it cannot be tested as stike causes breaks in loop 
        spyOn(bowling, "getInput").and.returnValue(10);
        bowling.runCardMaking();
        expect(bowling.strike).toEqual(true);
      });

      xit("#runCardMaking - will change property strike to false when strike is rolled ", function () {
       /// not sure how to test this - see above comment
      });
      
    
    });
    describe("#scoreSpares ", function () {
      it(" bonus points - If ALL spares the score from the first roll of the next frame will always be added to the score for current frame (score will increase always by 15)", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        expect(bowlingMock.runCardMaking()[1]["r2Score"]).toEqual(15);
        expect(bowlingMock.card[2]["r2Score"]).toEqual(30);
        expect(bowlingMock.card[3]["r2Score"]).toEqual(45);
      });


      it(" bonus points - If  spare the score from the first roll of the next frame will always be added to the score for current frame", function () {
        var alreadyCalled = false;
          spyOn(bowling, "getInput").and.callFake(function() {
          if (alreadyCalled) return 4;
          alreadyCalled = true;
          return 6;
          });
        expect(bowling.runCardMaking()[1]["r2Score"]).toEqual(14);
      });
      
      it(" The score from bonus points will be added to the accumulated score    ", function () {
        var alreadyCalled = false;
          spyOn(bowling, "getInput").and.callFake(function() {
          if (alreadyCalled) return 4;
          alreadyCalled = true;
          return 6;
          });
        expect(bowling.runCardMaking()[2]["r2Score"]).toEqual(22);
        expect(bowling.card[3]["r2Score"]).toEqual(30)
      });
    });





    
    describe("#runCardMaking - scoreSrike", function () {
      it("If a strike is thrown the score from BOTH rolls of the next frame will be added to the score for this frame", function () {
        var alreadyCalled = false;
        spyOn(bowling, "getInput").and.callFake(function() {
        if (alreadyCalled) return 10;
        alreadyCalled = true;
        return 1;
        });
      expect(bowling.runCardMaking()[1]["r2Score"]).toEqual(12);
      });

      
      

      xit("If a strike is thrown everytime  the score will always increase bt  20", function () {
        spyOn(bowling, "getInput").and.returnValue(10);
        expect(bowling.runCardMaking()[1]["r2Score"]).toEqual(20);
        expect(bowling.runCardMaking()[4]["r2Score"]).toEqual(40);
      });
    
    });



    describe("#runCardMaking -  second roll is skipped after stike ", function () {
      it("If a stike is scored, the pins down on second turn will be marked with an x ", function () {
        spyOn(bowling, "getInput").and.returnValue(10);
        expect(bowling.runCardMaking()[1]['r1PinsDown']).toEqual(10);
        expect(bowling.card[1]['r2PinsDown']).toEqual('x');
        expect(bowling.card[5]['r2PinsDown']).toEqual('x')
      });

      
    });
  });
});
