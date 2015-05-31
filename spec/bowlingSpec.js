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

    xit('for scoring a strike in the previous frame', function() {
      player.firstBowl(10);
      player.calculateScore();
      player.firstBowl(5);
      player.secondBowl(4);
      player.calculateScore();
      expect(player.score).toEqual([19, 9]);
    });
  });

});

xdescribe('The player gets correct bonus points', function() {

  beforeEach(function() {
    player = new Player
  });

  it('for scoring a double strike', function () {
    for(i = 1; i < 3; i ++ ) {
      player.firstBowl(10);
      player.calculateScore();
    };
    player.firstBowl(4);
    player.secondBowl(2);
    player.calculateScore();
    expect(player.score).toEqual([24, 16, 6])
  });

  it('for scoring three strikes in a row', function () {
    for(i = 1; i < 4; i ++ ) {
      player.firstBowl(10);
      player.calculateScore();
    };
    player.firstBowl(0);
    player.secondBowl(9);
    player.calculateScore();
    expect(player.score).toEqual([30, 20, 19, 9])
  });

  it('for scoring three strikes, but not in a row', function () {
    for(i = 1; i < 3; i ++ ) {
      // strike two frames in a row
      player.firstBowl(10);
      player.calculateScore();
    };
    player.firstBowl(4);
    player.secondBowl(2);
    player.calculateScore();
    player.firstBowl(10);
    player.calculateScore();
    expect(player.score).toEqual([24, 16, 16, 10])
  })

  it('for scoring four strikes in a row', function () {
    for(i = 1; i < 5; i ++ ) {
      player.firstBowl(10);
      player.calculateScore();
    };
    player.firstBowl(2);
    player.secondBowl(1);
    player.calculateScore();
    expect(player.score).toEqual([30, 30, 22, 13, 3])
  });

  it('for scoring a perfect game', function () {
    for(i = 1; i < 11; i ++ ) {
      // Strike ten frames in a row
      player.firstBowl(10);
      player.calculateScore();
    };
    // plays two bonus bowls and strike on both
      player.extraBowl(10);
      player.extraBowl(10);
      expect(player.score).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30])
  });

});

describe('On the tenth frame', function() {

  beforeEach(function() {
    player = new Player
  });

  describe('a player does not score spare/strike', function () {

    it('and finishes the game', function () {
      for(i = 1; i < 11; i ++ ) {
        player.firstBowl(5);
        player.secondBowl(3);
        player.calculateScore();
      };
      expect(player.score).toEqual([8, 8, 8, 8, 8, 8, 8, 8, 8, 8])
    })
    it('and gets no more bowls', function () {
      for(i = 1; i < 11; i ++ ) {
        player.firstBowl(5);
        player.secondBowl(3);
        player.calculateScore();
      };
      expect( function(){ player.firstBowl(2); } ).toThrow(new Error("Game has ended"));
    });
  });

  xdescribe('a player scores a spare', function() {
    it('and gets one more bowl, with correct bonuses', function () {
    for(i = 1; i < 10; i ++ ) {
      // plays 9 frames
      player.firstBowl(5);
      player.secondBowl(5);
      player.calculateScore();
    };
    // plays the tenth frame and gets a spare
    player.firstBowl(8);
    player.secondBowl(2);
    player.calculateScore();
    // get one bonus bowl
    player.extraBowl(5);
    expect(player.score).toEqual([15, 15, 15, 15, 15, 15, 15, 15, 18, 15])
    });
  });

  xdescribe('a player scores a strike', function() {
    it('and gets two more bowls, with correct bonuses', function () {
    for(i = 1; i < 10; i ++ ) {
      // plays 9 frames
      player.firstBowl(5);
      player.secondBowl(5);
      player.calculateScore();
    };
    // plays the tenth frame and gets a strike
    player.firstBowl(10);
    player.calculateScore();
    // get two bonus bowls
    player.extraBowl(5);
    player.extraBowl(2);
    expect(player.score).toEqual([15, 15, 15, 15, 15, 15, 15, 15, 20, 17])
    });
  });

});