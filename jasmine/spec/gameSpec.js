describe("Game", function() {
  var game, frame1, frame2;

  beforeEach(function() {
    game = new Game();
    frame1 = jasmine.createSpyObj('frame', [3, 6], 2, null, 9);
    frame2 = jasmine.createSpyObj('frame', [4, 5], 2, null, 9);
  });

  describe("New Game", function(){

    it('begins with no frames', function(){
      expect(game.framesTotal).toEqual([]);
    });

  });

  describe("It adds frames to the game", function(){

    it('adds the first frame to the game', function(){
      game.addFrames(frame1);
      expect(game.framesTotal).toContain(frame1);
    });

    it("doesn't add more than 10 frames", function(){
      for (var i = 0; i < 10; i++) {
        game.addFrames(frame1);
      }
      expect(function() {game.addFrames(frame2);}).toThrowError("You have reached the limit of frames for the game");
    });

  });

  describe("it calculates score", function() {

    it('calculates the total score', function(){
      frame1.score = 9;
      frame2.score = 9;
      frame1.bonus = null;
      frame2.bonus = null;
      // #### Look at these lines above ####
      game.addFrames(frame1);
      game.addFrames(frame2);
      expect(game.score()).toEqual(18);
    });

    it('calculates the score after a strike', function() {
      // frame1.addRoll(10);
      // frame1.isStrike();
      // frame2.addRoll(3);
      // frame2.addRoll(3);
      // frame1.calcScore();
      // frame2.calcScore();
      frame3 = jasmine.createSpyObj('frame', [10], 2, null, 10);
      frame4 = jasmine.createSpyObj('frame', [6, 2], 2, null, 9);
      // frame3 = { calcScore: function(){} };
      // frame4 = { calcScore: function(){} };
      // spyOn(frame3, 'calcScore').and.returnValue(10);
      // spyOn(frame4, 'calcScore').and.returnValue(8);
      frame3.score = 10;
      frame4.score = 7;
      frame3.bonus = "strike";
      game.addFrames(frame3);
      game.addFrames(frame4);
      expect(game.score()).toEqual(24);
    });

    it('calculates the score after a spare', function() {
      frame3 = jasmine.createSpyObj('frame', [5, 5], 2, null, 10);
      frame4 = jasmine.createSpyObj('frame', [6, 2], 2, null, 9);
      frame3.score = 10;
      frame3.bonus = "spare";
      frame4.rolls = [6, 2];
      frame4.score = 8;
      game.addFrames(frame3);
      game.addFrames(frame4);
      expect(game.score()).toEqual(24);
    });
  });
});
