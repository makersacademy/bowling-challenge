describe("Scorecard", function() {
  var scorecard;
  var frameDouble;
  var spareDouble;

  beforeEach(function() {
    scorecard = new Scorecard();
    frameDouble = { 
      rolls: [2,2],
      total : function() { return 4}
    }
    spareDouble = { 
      rolls: [4,6],
      total : function() { return 10}
    }
  });

    it("can take a frame", function(){
      scorecard.addFrame({});
      expect(scorecard.frames).toEqual([{}]);
    });

    it("can calculate a total of a series of frames", function(){
      var frame1Double = {total : function() { return 3} }
      var frame2Double = {total : function() { return 3} }
      scorecard.addFrame(frame1Double);
      scorecard.addFrame(frame2Double);
      expect(scorecard.total()).toEqual(6);
    });

    it("knows the score of a particular ball in a particular frame", function() {
      frameDouble.rolls = [4,6]
      scorecard.addFrame(frameDouble);
      expect(scorecard.getRollScore(0, 1)).toEqual(6);
    });

    it("accumulates bonus points from spare frames", function(){
      scorecard.addFrame(spareDouble);
      scorecard.addFrame(frameDouble);
      expect(scorecard.total()).toEqual(16);
    });


});