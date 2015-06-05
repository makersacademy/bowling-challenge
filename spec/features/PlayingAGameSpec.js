describe("Playing a game", function() {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe("Perfect game", function(){

    it("has a score of 300", function(){
      for(var i = 0; i <= 10; i ++) {
        var frame = new Frame;
        frame.registerGo(10);
        scorecard.addFrame(frame);
      };
      expect(scorecard.total()).toEqual(300);
    });
  });

  describe("Gutter game", function(){

    it("has a score of zero", function(){
      for(var i = 0; i <= 10; i ++) {
        var frame = new Frame;
        frame.registerGo(0);
        scorecard.addFrame(frame);
      };
      expect(scorecard.total()).toEqual(0);
    });

  });
    
});
