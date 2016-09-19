describe("StrikeFrame", function() {

  beforeEach(function() {
    strikeFrame = new StrikeFrame();
  });

    describe("Strike Bonus Game", function(){
      it('should add bonus of both scores', function(){
        strikeFrame.addScore(2);
        strikeFrame.addScore(3);
        expect(strikeFrame.calculateScore()).toEqual(10);
      });
      it('should finish on first roll strike', function(){
        strikeFrame.addScore(10);
        expect(function(){strikeFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
      })

    });

    describe('Frame Type', function() {
      it("Knows the result of the frame - normal", function() {
        strikeFrame.addScore(5);
        strikeFrame.addScore(1);
        expect(strikeFrame.frameResult()).toEqual('frame');
      });

      it("Knows the result of the frame - spare", function() {
        strikeFrame.addScore(5);
        strikeFrame.addScore(5);
        expect(strikeFrame.frameResult()).toEqual('spare');
      });
      it("Knows the result of the frame - strike", function() {
        strikeFrame.addScore(10);
        expect(strikeFrame.frameResult()).toEqual('strike');
      });
    });

    describe('Defending Against Edge Cases', function() {
      it("should not accept more than two scores", function() {
        strikeFrame.addScore(5);
        strikeFrame.addScore(1);
        expect(function(){strikeFrame.addScore(5)}).toThrow(new Error("The Frame is already over"));
      });
      it("should not accept two scores over 10", function() {
        strikeFrame.addScore(6);
        expect(function(){strikeFrame.addScore(7)}).toThrow(new Error("Max Score Reached"));
      });
    });
    describe('Returning Display Symbols', function() {
      it("should return numbers on normal frame", function() {
        strikeFrame.addScore(5);
        strikeFrame.addScore(1);
        expect(strikeFrame.getDisplaySymbols()).toEqual({first: 5, second: 1})
      });
      it("should return whitespace/strike on strike", function() {
        strikeFrame.addScore(10);
        expect(strikeFrame.getDisplaySymbols()).toEqual({ first: '\u00A0', second: 'X' })
      });
      it("should return number/spare on spare", function() {
        strikeFrame.addScore(3);
        strikeFrame.addScore(7);
        expect(strikeFrame.getDisplaySymbols()).toEqual({ first: 3, second: '/' })
      });
    });

  });
