describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game(new Bonus());
  });

  describe("#score", function() {
    it("Should return a regular score of 9", function() {
      expect(game.score(5,4)).toEqual(9)
    });
  });

  describe("#bonusScore", function() {

    it("Should return a bonus score of 0", function() {
      expect(game.bonusScore(5,4)).toEqual(0)
    });

    it("Should return a bonus score of 0", function() {
      game.bonus.firstBonus = 1
      expect(game.bonusScore(5,4)).toEqual(5)
    });

    it("Should return a bonus score of 0", function() {
      game.bonus.firstBonus = 1
      game.bonus.secondBonus = 1
      expect(game.bonusScore(5,4)).toEqual(9)
    });

  });

  describe("#roll", function() {

    it("Should add to total", function() {
      game.roll(5,4)
      expect(game.total).toEqual(9)
    });

    it("Should add 1 to the frame", function() {
      game.roll(5,4)
      expect(game.frame).toEqual(2)
    });

    it("Should return the frame, the score and the bonus score", function() {
      expect(game.roll(5,4)).toEqual('Frame: 1 | Score: 9 | Bonus Score: 0 | Total: 9')
    });

  });

  describe("#edgeCase", function() {

    it("Should not allow you to do more than 10 frames", function() {
      game.frame = 11
      expect(function(){
        game.edgeCase(5,4);
      }).toThrowError('You have already had 10 frames');
    });

    it("Should not allow you to knock more than 10 pins", function() {
      expect(function(){
        game.edgeCase(5,6);
      }).toThrowError('You can only knock over 10 pins');
    });

    it("Should not allow 3 balls on any frames apart from 10th", function() {
      expect(function(){
        game.edgeCase(5,5,5);
      }).toThrowError('You cannot have 3 balls');
    });

    it("Should only allow 3 balls on 10th with a spare/strike", function() {
      game.frame = 10
      expect(function(){
        game.edgeCase(5,4,5);
      }).toThrowError('You cannot have 3 balls');
    });

    it("Should not allow you to knock more than 10 pins even on 10th", function() {
      game.frame = 10
      expect(function(){
        game.edgeCase(5,6,5);
      }).toThrowError('You can only knock over 10 pins');
    });

    it("Should allow you to do 10,10,10", function() {
      game.frame = 10
      expect(function(){
        game.edgeCase(10,10,10);
      }).not.toThrowError('You can only knock over 10 pins');
    });

    it("Should tell you to use all three balls on the 10th frame", function() {
      game.frame = 10
      expect(function(){
        game.edgeCase(5,5);
      }).toThrowError('You should use all 3 balls');
    });

  });

  describe("#tenthScore", function() {

    it("Should give a score of 30", function() {
      game.frame = 10
      game.roll(10,10,10)
      expect(game.total).toEqual(30)
    });
    
    it("Should give a score of 30", function() {
      game.frame = 10
      game.roll(1,9,10)
      expect(game.total).toEqual(20)
    });

  });

});
