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
      var game = new Game(frame1);
      game.newFrame(frame2);
      game.newFrame(frame3);
      expect(game.currentFrame()).toEqual(frame3)

    })
  });

  describe("frameNumber", function(){
    it("you can see what frame your currently on", function(){
      var game = new Game(frame1);
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

    it('strike are returned as X on scorcard', function(){
      game.play(2)
      game.play(5)
      game.play(4)
      game.play(6)
      game.play(10)
      game.play(7)
      game.play(2)
      expect(game.scorecard()).toEqual([[2,5], [4,'/'], ['X'], [7,2]])
    })

    it('game have a maximum of 10 frames', function() {
      var i;
      for (i = 0; i < 10; i++) {
        game.play(2)
        game.play(5)
      }
      expect(game.play(5)).toEqual('Game Over')
    })
  });

  describe('#score', function(){
    it('it tracks to score on a non strike/ non spare round', function(){
      game.play(2)
      game.play(5)
      expect(game.score()).toEqual(7)

    })
  });

  describe('#strike', function(){
    it('you get 2 bonus shot', function(){
      game.strike()
      expect(game.bonusShotsRemaining()).toEqual(2)
    })

    it('both sum of next two shots are added frame', function(){
      game.play(10)
      game.play(3)
      game.play(5)
     expect(game.score()).toEqual(26)
    })
  });

  describe('#spare', function(){
    it('you get 1 bonus shot', function(){
      game.spare()
      expect(game.bonusShotsRemaining()).toEqual(1)
    })

  });







});
