describe("Playing a game", function() {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe("Perfect game", function(){

    it("has a score of 300", function(){
      for(var i = 0; i < 10; i ++) {
        var frame = new Frame;
        frame.registerGo(10);
        scorecard.addFrame(frame);
      };
      expect(scorecard.total()).toEqual(300);
    });
  });

  describe("Gutter game", function(){

    it("has a score of zero", function(){
      for(var i = 0; i < 10; i ++) {
        var frame = new Frame;
        frame.registerGo(0);
        frame.registerGo(0);
        scorecard.addFrame(frame);
      };
      expect(scorecard.total()).toEqual(0);
    });

  });

  describe("All 3s game", function(){

    it("has a score of sixty", function(){
      for(var i = 0; i < 10; i ++) {
        var frame = new Frame;
        frame.registerGo(3);
        frame.registerGo(3);
        scorecard.addFrame(frame);
      };
      expect(scorecard.total()).toEqual(60);
    });

  });

  describe("All 5s game", function(){

    it("has a score of 150", function(){
      for(var i = 0; i < 10; i ++) {
        var frame = new Frame;
        frame.registerGo(5);
        frame.registerGo(5);
        scorecard.addFrame(frame);
      };
      expect(scorecard.total()).toEqual(150);
    });

  });
    
});
