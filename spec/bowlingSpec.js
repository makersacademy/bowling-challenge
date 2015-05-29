describe('In the first frame, the player', function() {

  beforeEach(function() {
    player = new Player
  });

  describe('can score', function() {
    it('a 3 and a 2', function (){
      player.firstBowl(3);
      player.secondBowl(2);
      player.calculateScore();
      expect(player.score).toEqual([5]);
    });

    it('a 7 and a 1', function (){
      player.firstBowl(7);
      player.secondBowl(1);
      player.calculateScore();
      expect(player.score).toEqual([8]);
    });

    it('a spare', function () {
      player.firstBowl(9);
      player.secondBowl(1);
      player.calculateScore();
      expect(player.score).toEqual([10]);
    });

    it('a strike', function () {
      player.firstBowl(10);
      player.calculateScore();
      expect(player.score).toEqual([10]);
    });
  });

  describe('cannot', function () {

    it('hit more than 10 pins in one bowl', function() {
      expect( function(){ player.firstBowl(11); } ).toThrow(new Error("Cannot hit more than 10 pins"));
    });

    it('hit more than 10 pins over two bowls', function() {
      player.firstBowl(3);
      expect( function() { player.secondBowl(8); } ).toThrow(new Error("Cannot hit more than 10 pins"));
    });

    it('bowl twice if a strike is scored', function() {
      player.firstBowl(10);
      expect( function() { player.secondBowl(1); } ).toThrow(new Error("Cannot bowl twice on a strike"));
    });
  });
});

describe('In the second frame, the player', function() {

  beforeEach(function() {
    player = new Player
  });

  describe('keeps score from previous frame', function() {
    it('and scores more points', function() {
      player.firstBowl(4);
      player.secondBowl(3);
      player.calculateScore();
      player.firstBowl(5);
      player.secondBowl(4);
      player.calculateScore();
      expect(player.score).toEqual([7, 9]);
    });
  });

  beforeEach(function() {
    player = new Player
  });

  describe('gets bonus points', function() {
    it('for scoring a spare in the previous frame', function() {
      player.firstBowl(4);
      player.secondBowl(6);
      player.calculateScore();
      player.firstBowl(5);
      player.secondBowl(4);
      player.calculateScore();
      expect(player.score).toEqual([15, 9]);
    });

    it('for scoring a strike in the previous frame', function() {
      player.firstBowl(10);
      player.calculateScore();
      player.firstBowl(5);
      player.secondBowl(4);
      player.calculateScore();
      expect(player.score).toEqual([19, 9]);
    });
  });
});