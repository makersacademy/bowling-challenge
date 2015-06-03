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

    // it("can handle a spare")


});