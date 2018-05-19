describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("Creates an incomplete frame", function(){
    expect(frame.isComplete).toBe(false);
  })

  it("Takes the result of the first roll", function(){
    frame.addScore(5);
    expect(frame.rollScores[0]).toEqual(5);
  });

  describe("#addScore", function(){

    describe("normal frame - no strike or spare", function(){
      beforeEach(function(){
        frame.addScore(5);
        frame.addScore(3);
      });

      it("Takes the result of the second roll", function(){
        expect(frame.rollScores[frame.rollScores.length - 1]).toEqual(3);
      });

      it("completes a frame once two normal balls are bowled(no X or /)", function(){
        expect(frame.isComplete).toBe(true);
      });

      it("calculates its score", function(){
        expect(frame.Score).toEqual(8);
      });
    });

    describe("strike", function(){
      beforeEach(function(){
        frame.addScore(10);
      });

      it("registers a strike", function(){
        expect(frame.isStrike).toBe(true)
      });

      it("doesn't complete the frame for a strike", function(){
        expect(frame.isComplete).toBe(false);
      });

      it("doesn't calculate the score a strike", function(){
        expect(frame.Score).toBeUndefined();
      });

      describe("strike with bonus balls", function(){
        beforeEach(function(){
          frame.addScore(5);
        });

        it("doesn't complete the frame for one bonus ball", function(){
          expect(frame.isComplete).toBe(false);
        });

        it("doesn't calculate the score for one bonus ball", function(){
          expect(frame.Score).toBeUndefined();
        });

        it("does complete the frame after second bonus ball", function(){
          frame.addScore(8);
          expect(frame.isComplete).toBe(true);
        });

        it("does calculate the score after the second bonus ball", function(){
          frame.addScore(8);
          expect(frame.Score).toEqual(23);
        });


      });
    });

    describe("spare", function(){
      beforeEach(function(){
        frame.addScore(5);
        frame.addScore(5);
      });

      it("registers a spare", function(){
        expect(frame.isComplete).toBe(false);
      });

      it("doesn't calculate the score a spare before bonus ball", function(){
        expect(frame.Score).toBeUndefined();
      });

      it("adds a bonus ball for a spare", function(){
        frame.addScore(3);
        expect(frame.rollScores.length).toEqual(3)
        expect(frame.rollScores[frame.rollScores.length - 1]).toBe(3);
      });

      it("completes a frame after one bonus ball", function(){
        frame.addScore(3);
        expect(frame.isComplete).toBe(true);
      });

      describe("spare with bonus ball", function(){
        beforeEach(function(){
          frame.addScore(8);
        });

        it("doesn't complete the frame for one bonus ball", function(){
          expect(frame.isComplete).toBe(true);
        });

        it("doesn't calculate the score for one bonus ball", function(){
          expect(frame.Score).toEqual(18);
        });

      });

    });

  });

});
