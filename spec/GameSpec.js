describe("Game", function() {
  var game;
  var frame1;
  var frame2;
  var frame3;

  beforeEach(function() {
    game = new Game();
    frame1 = jasmine.createSpy("Frame1")
    frame2 = jasmine.createSpy("Frame2")
    frame3 = jasmine.createSpy("frame3")
  })

  describe('#newFrame', function() {
    it('adds new frame to frames array', function(){

      game.newFrame(frame1);
      expect(game.allFrames()).toContain(frame1);
    });

    it("you can see what frame your currently on", function(){
      var game = new Game(frame1);
      game.newFrame(frame2);
      game.newFrame(frame3);
      expect(game.allFrames().length).toEqual(3)
    })
  });

  describe("#currentFrame", function(){
    it("you can access the most recent frame", function(){
      game.newFrame(frame1);
      game.newFrame(frame2);
      game.newFrame(frame3);
      expect(game.currentFrame()).toEqual(frame3)
    })
  });

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
      expect(game.scorecard()).toEqual([[2,5], [4,6]])
    })

    it('strike status is changed if there is a strike', function(){
      game.play(2)
      game.play(5)
      game.play(10)
      expect(game.allFrames()[game.allFrames().length - 2].strikeStatus()).toBeTrue()
    })
  });

  describe('#score', function(){
    it('if there are no bonus points it will return the sum of rolls', function(){
      game.play(2)
      game.play(5)
      game.play(4)
      game.play(3)
      expect(game.score()).toEqual(14)
    })

  })

  describe('#strikeScorer', function(){


    it("calculates correct score if strike is played", function(){
      game.play(2)
      game.play(5)
      game.play(10)
      game.play(2)
      game.play(2)
      expect(game.score()).toEqual(25)
    })


  });

});
