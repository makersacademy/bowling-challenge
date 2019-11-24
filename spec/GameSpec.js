describe("Game", function() {
  var game;
  var frame1;
  var frame2;
  var frame3;

  beforeEach(function() {
    game = new Game;
    frame1 = jasmine.createSpy("Frame1")
    frame2 = jasmine.createSpy("Frame2")
    frame3 = jasmine.createSpy("frame3")
  })

  describe('#newFrame', function() {
    it('adds new frame to frames array', function(){

      game.newFrame(frame1);
      expect(game.allFrames()).toContain(frame1);
    });
  });

  describe("#currentFrame", function(){
    it("you can access the most recent frame", function(){
      game.newFrame(frame1);
      game.newFrame(frame2);
      game.newFrame(frame3);
      expect(game.currentFrame()).toEqual(frame3)

    })
  });

  describe("frameNumber", function(){
    it("you can see what frame your currently on", function(){
      game.newFrame(frame1);
      game.newFrame(frame2);
      game.newFrame(frame3);
      expect(game.frameNumber()).toEqual(3)

    })

  })

  describe("#play", function() {
    it('players first two rolls are saved to scorecard', function() {
      game.play(2)
      game.play(5)
      expect(game.scorecard()).toEqual([[2,5]])
    })

    it('it adds first two turns to scorcard (first 4 rolls)', function(){
      game.play(2)
      game.play(5)
      game.play(4)
      game.play(6)
      expect(game.scorecard()).toEqual([[2,5], [4,'/']])
    })
  });




});
