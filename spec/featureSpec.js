//unisolated

describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game
  });

  it('a 10-frame game is scored correctly', function () {
    for (let i = 0; i < 10; i++) {
      game.addFrame(new Frame([3,4]))
    }
    expect(game.score()).toEqual(70);
  });


  describe('special frame followed by a normal frame', function () {
    it('a spare has bonus points added correctly', function () {
      game.addFrame(new Frame([3,7])) // 10 + 3 bonus
      game.addFrame(new Frame([3,4])) // 7
      expect(game.score()).toEqual(20);
    });

    it('a strike has bonus points added correctly', function () {
      game.addFrame(new Frame([10])) // 10 + 7 bonus
      game.addFrame(new Frame([3,4])) // 7
      expect(game.score()).toEqual(24);
    });
  });

  describe('special frame followed by a special frame', function() {
    it('a spare has bonus points added correctly', function(){
      game.addFrame(new Frame([10])) // 10 + 10 bonus (both rolls in next frame)
      game.addFrame(new Frame([3,7])) // 10 + 3 bonus
      game.addFrame(new Frame([3,4])) // 7
      expect(game.score()).toEqual(40); 
    });

    it('a strike has bonus points added correctly', function(){
      game.addFrame(new Frame([3,7])) // 10 + 10 bonus (first roll in next frame)
      game.addFrame(new Frame([10])) // 10 + 7 bonus
      game.addFrame(new Frame([3,4])) // 7
      expect(game.score()).toEqual(44); 
    });

    it('a double has bonus pts added correctly', function(){
      game.addFrame(new Frame([10])) // 10 + 13 bonus (next two rolls, 10 and 3)
      game.addFrame(new Frame([10])) // 10 + 7 bonus 
      game.addFrame(new Frame([3,4])) // 7
      expect(game.score()).toEqual(47); 
    });
  });

  describe('special 10th frame', function() {
    it('bonus still added for strike 10th frame', function () {
      for (let i = 0; i < 9; i++) {
        game.addFrame(new Frame([3,4]))
      }
      game.addFrame(new Frame([10,3,4]))
      expect(game.score()).toEqual(80);
    });
  

    it('bonus still added for spare 10th frame', function () {
      for (let i = 0; i < 9; i++) {
        game.addFrame(new Frame([3,4])) // 63
      }
      game.addFrame(new Frame([3,7,4])) 
      expect(game.score()).toEqual(77);
    });
  
  });



});
