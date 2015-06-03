describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

    it("can take a frame", function(){
      scorecard.addFrame({});
      expect(scorecard.frames).toEqual([{}]);
    });

    it("can calculate a total of a series of frames", function(){
      scorecard.addFrame({total : function() { return 3} });
      scorecard.addFrame({total : function() { return 3} });
      expect(scorecard.total()).toEqual(6);
    });

    xit("knows the score of a particular ball in a particular frame", function() {
      scorecard.addFrame({total : function() { return 1} });
      scorecard.addFrame({total : function() { return 1} });
      expect(scorecard.frames[0].rolls[0]).toEqual(1);
    });

});