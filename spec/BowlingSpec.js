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

  xdescribe("#fillCard", function () {
    describe("fills in FRAME correctly", function () {
      it("fills in one for number of PINS  after ONE roll ", function () {
        bowling.makeCardTemplate();
        bowling.rollCount = 1
        expect(bowling.fillCard(1, 1, 1)["frame1"]["r1PinsDown"]).toEqual(1);
      });

      it("fills in the SCORE after ONE roll", function () {
        
        bowling.makeCardTemplate();
        bowling.rollCount = 1
        expect(bowling.fillCard(1, 1, 1)["frame1"]["r1Score"]).toEqual(1);
      });

      //
      xit("fills in the SCORE  after THREE rolls ", function () {
        //will not work is refractored loop out of here   - is it neccesary to test or can I just delete?
        this.rollCount = 3
        bowling.makeCardTemplate();
        bowling.fillCard(1, 1, 1);
        bowling.fillCard(2, 3, 2);
        expect(bowling.fillCard(1, 100, 3)["frame3"]["r1Score"]).toEqual(9);
      });

      describe("fills in card based on roll count", function () {
        it("fills in the number of PINS on roll 2 ", function () {
          bowling.rollCount = 2
          bowling.makeCardTemplate();
          expect(bowling.fillCard(1, 4, 3)["frame3"]["r2PinsDown"]).toEqual(1);
          expect(bowling.fillCard(1, 4, 3)["frame3"]["r1PinsDown"]).toEqual(0);
        });

        it("fills in the SCORE on roll 2 ", function () {
          bowling.rollCount = 2
          bowling.makeCardTemplate();
          expect(bowling.fillCard(1, 4, 3)["frame3"]["r2Score"]).toEqual(4);
          expect(bowling.fillCard(1, 4, 3)["frame3"]["r1Score"]).toEqual(0);
        });


      });
    });
  });







  describe("runCardMaking", function () {
    xdescribe("returns the correct amount of PINS", function () {
      it("fills in the roll 1 number of PINS for Frame 1  as 3", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(3);
        expect(bowlingMock.runCardMaking()[1]["r1PinsDown"]).toEqual(3)
      });

      it("fills in the roll 1 number of PINS for Frame 3 as 5 ", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        expect(bowlingMock.runCardMaking()[3]["r1PinsDown"]).toEqual(5)
      });
    });

    describe("returns the correct score", function () {
      it("fills in the roll 1 and 2 SCORE for Frame One", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(3);
        expect(bowlingMock.runCardMaking()[1]["r1Score"]).toEqual(3);
        expect(bowlingMock.card[1]["r2Score"]).toEqual(6);
      });

      xit("fills in the roll 1 and 2 SCORE for Frame three  ", function () {
        var bowlingMock = new Bowling();
        bowlingMock.makeCardTemplate();
        spyOn(bowlingMock, "getInput").and.returnValue(2);
        expect(bowlingMock.runCardMaking()[1]["r1Score"]).toEqual(2);
        //expect(bowlingMock.card["frame3"]["r1Score"]).toEqual(10);
        //expect(bowlingMock.card["frame3"]["r2Score"]).toEqual(12);
      });
    });

    xdescribe("Spares and Stirkes", function () {
      it("if a score is a spare, strike equals true", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        expect(bowlingMock.runCardMaking()[1]["spare"]).toEqual(true);
      });

      it("if a score is not a spare, spare equals false", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(2);
        expect(bowlingMock.runCardMaking()[1]["spare"]).toEqual(false);
      });

      it("if a score is a stike equals true", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(10);
        expect(bowlingMock.runCardMaking()[1]["strike"]).toEqual(true);
      });

      it("if a score is not a stirke, stike equals false", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        expect(bowlingMock.runCardMaking()[1]["strike"]).toEqual(false);
      });
    });
  

    
    });

    
    describe("Spares & Stikes", function () {

      it("If a spare is not thrown spare returns false", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        bowlingMock.runCardMaking()
        expect(bowlingMock.spare).toEqual(true)
      });

      it("If a spare has been thrown, spare will change to true", function () {
        var bowlingMock = new Bowling();
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        bowlingMock.runCardMaking()
        expect(bowlingMock.spare).toEqual(true)
      });
     
      it("If a spare is not thrown and spare is true, spare will change to  false", function () {
        var bowlingMock = new Bowling();
        bowlingMock.spare = true
        spyOn(bowlingMock, "getInput").and.returnValue(2);
        bowlingMock.runCardMaking()
        expect(bowlingMock.spare).toEqual(false)
      });
      
      xit("If a spare is thrown the score from the first roll of the next frame will be added  it to the score of the frame", function () {
        bowlingMock.spare = true
        spyOn(bowlingMock, "getInput").and.returnValue(5);
        bowlingMock.runCardMaking()
        expect(bowlingMock.spare).toEqual(false)
      });
      
    });

  });



 