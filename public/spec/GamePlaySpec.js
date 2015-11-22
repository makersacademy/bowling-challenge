describe('Play a game',function() {

  var player;
  var gamePlay;

  beforeEach(function(){
    player = new Player("Ezzy");
    gamePlay = new GamePlay(player);
  });

  describe('when start game',function() {
    it('play first frame 1 ball',function() {
      gamePlay.pinsBowled(5)
      expect(gamePlay.currentFrame()).toEqual(1)
      expect(gamePlay.cumScore()).toEqual(5)
      expect(gamePlay.getName()).toEqual('Ezzy')
    });
    it('play first frame 2 falls',function() {
      gamePlay.pinsBowled(5,4)
      expect(gamePlay.currentFrame()).toEqual(1)
      expect(gamePlay.cumScore()).toEqual(9)
    });
    it('play two frames 3 balls recorded together',function() {
      gamePlay.pinsBowled(5,4,2)
      expect(gamePlay.currentFrame()).toEqual(2)
      expect(gamePlay.cumScore()).toEqual(11)
    });
    it('play two frames 3 balls recorded separately',function() {
      gamePlay.pinsBowled(5,4,2)
      gamePlay.pinsBowled(3,1)
      expect(gamePlay.currentFrame()).toEqual(3)
      expect(gamePlay.cumScore()).toEqual(15)
    });

    it('play first frame spare',function() {
      gamePlay.pinsBowled(4,6)
      expect(gamePlay.currentFrame()).toEqual(1)
      expect(gamePlay.cumScore()).toEqual(10)
      expect(gamePlay.getName()).toEqual('Ezzy')
    });
    it('play first frame spare plus ball',function() {
      gamePlay.pinsBowled(6,4,5)
      expect(gamePlay.currentFrame()).toEqual(2)
      expect(gamePlay.cumScore()).toEqual(20)
    });
    it('play two frames spare plus  2 balls',function() {
      gamePlay.pinsBowled(6,4,5,1)
      expect(gamePlay.currentFrame()).toEqual(2)
      expect(gamePlay.cumScore()).toEqual(21)
    });
    it('play 3 frames 5 balls strike plus 4 balls',function() {
      gamePlay.pinsBowled(10,4,2)
      gamePlay.pinsBowled(3,1)
      expect(gamePlay.currentFrame()).toEqual(3)
      expect(gamePlay.cumScore()).toEqual(26)
    });
    it('play 3 frames strike plus spare',function() {
      gamePlay.pinsBowled(10,2)
      gamePlay.pinsBowled(8,1,5)
      expect(gamePlay.currentFrame()).toEqual(3)
      expect(gamePlay.cumScore()).toEqual(37)
    });

  });

  describe('when get a open game in frame 10',function() {
    it('no strike or spare in 10th ',function() {
      gamePlay.pinsBowled(7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2)
      expect(gamePlay.currentFrame()).toEqual(10)
      expect(gamePlay.cumScore()).toEqual(90)
    });
    it('if get spare in frame 10 can have one extra throw',function() {
      gamePlay.pinsBowled(7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,3,6,4,8)
      expect(gamePlay.currentFrame()).toEqual(11)
      expect(gamePlay.cumScore()).toEqual(97)
    });
    it('if get spare in frame 10 can have one extra throw',function() {
      gamePlay.pinsBowled(7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,2,7,3,10,10,8)
      expect(gamePlay.currentFrame()).toEqual(12)
      expect(gamePlay.cumScore()).toEqual(101)
    });
    it('perfect game',function() {
      gamePlay.pinsBowled(10,10,10,10,10,10,10,10,10,10,10,10,2,4)
      expect(gamePlay.currentFrame()).toEqual(12)
      expect(gamePlay.cumScore()).toEqual(300)
    });
  });

});