describe('Game, ',function() {

  var pinsPerRoll;
  var game;
  var game2;
  var expectedScore;
  var perfectGame;
  var perfectScore;

  beforeEach(function() {
    game = new Game(12);

    pinsPerRoll = {
      frame:[
        {roll:[10,0]},
        {roll: [7,3]},
        {roll: [9,0]},
        {roll: [10,0]},
        {roll: [0,8]},
        {roll: [8,2]},
        {roll: [0,6]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [8,1]},
        {roll: [0,0]}
        ]
    };

    game2 = new Game(12);

    perfectGame = {
      frame:[
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]},
        {roll: [10,0]}
        ]
    };
    expectedScore = [20,39,48,66,74,84,90,120,149,168];
    perfectScore =[30,60,90,120,150,180,210,240,270,300];
  });

  describe('when no stikes or spares',function() {

    it('score for open game roll 0 9',function() {
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      expect(game.score(2)).toEqual(9);
    });
    it('score for open game roll 0 9; roll 1 0',function() {
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,1,pinsPerRoll.frame[2].roll[1]);
      expect(game.score(2)).toEqual(9);
    })
    it('score for open game roll 0 9; roll 1 0; roll 0 0',function() {
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,1,pinsPerRoll.frame[2].roll[1]);
      game.setPinsPerRoll(4,0,pinsPerRoll.frame[4].roll[0]);
      expect(game.score(2)).toEqual(9);
    });
  it('result for open game roll 0 9',function() {
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      expect(game.frameResultOne(2)).toEqual('9');
      expect(game.frameResultTwo(2)).toEqual('-');
      expect(game.frameResultThree(2)).toEqual('');
    });
    it('result for open game roll 0 9; roll 1 0',function() {
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,1,pinsPerRoll.frame[2].roll[1]);
      expect(game.frameResultOne(2)).toEqual('9');
      expect(game.frameResultTwo(2)).toEqual('-');
      expect(game.frameResultThree(2)).toEqual('');
    });
    it('result for open game roll 0 9; roll 1 0; roll 0 0',function() {
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,1,pinsPerRoll.frame[2].roll[1]);
      game.setPinsPerRoll(3,0,pinsPerRoll.frame[4].roll[0]);
      expect(game.frameResultOne(2)).toEqual('9');
      expect(game.frameResultTwo(2)).toEqual('-');
      expect(game.frameResultThree(2)).toEqual('');
    });
  });

  describe('when stikes',function() {

    it('score for strike roll 0 10',function() {
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      expect(game.score(0)).toEqual(10);
    });
    it('score for strike roll 0 10; roll 1 3',function() {
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      game.setPinsPerRoll(0,1,pinsPerRoll.frame[0].roll[1]);
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      expect(game.score(0)).toEqual(17);
    })
    it('score for strike roll 0 10; roll 1 3; roll 0 7',function() {
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      game.setPinsPerRoll(0,1,pinsPerRoll.frame[0].roll[1]);
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,1,pinsPerRoll.frame[1].roll[1]);
      expect(game.score(0)).toEqual(20);
    });
    it('result for strike roll 0 10',function() {
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      expect(game.frameResultOne(0)).toEqual('');
      expect(game.frameResultTwo(0)).toEqual('X');
      expect(game.frameResultThree(0)).toEqual('');
    });
    it('result for strike roll 0 10; roll 1 0',function() {
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      game.setPinsPerRoll(0,1,pinsPerRoll.frame[0].roll[1]);
      expect(game.frameResultOne(0)).toEqual('');
      expect(game.frameResultTwo(0)).toEqual('X');
      expect(game.frameResultThree(0)).toEqual('');
    });
    it('result for strike roll 0 9; roll 1 0; roll 0 0',function() {
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      game.setPinsPerRoll(0,1,pinsPerRoll.frame[0].roll[1]);
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[1]);
      expect(game.frameResultOne(0)).toEqual('');
      expect(game.frameResultTwo(0)).toEqual('X');
      expect(game.frameResultThree(0)).toEqual('');
    });
  });

  describe('when spares',function() {

    it('score for spares roll 0 7',function() {
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      expect(game.score(1)).toEqual(7);
    });
    it('score for spares roll 1 7; roll 1 3 roll 0 9',function() {
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,1,pinsPerRoll.frame[1].roll[1]);
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      expect(game.score(1)).toEqual(19);
    })
    it('score for spares roll 0 10; roll 1 3; roll 0 7',function() {
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,1,pinsPerRoll.frame[1].roll[1]);
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,1,pinsPerRoll.frame[2].roll[1]);
      expect(game.score(1)).toEqual(19);
    });
    it('result for spares roll 0 7',function() {
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      expect(game.frameResultOne(1)).toEqual('7');
      expect(game.frameResultTwo(1)).toEqual('-');
      expect(game.frameResultThree(1)).toEqual('');
    });
    it('result for spares roll 0 7; roll 1 3',function() {
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,1,pinsPerRoll.frame[1].roll[1]);
      expect(game.frameResultOne(1)).toEqual('7');
      expect(game.frameResultTwo(1)).toEqual('/');
      expect(game.frameResultThree(1)).toEqual('');
    });
    it('result for spares roll 0 7; roll 1 3; roll 0 9',function() {
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,1,pinsPerRoll.frame[1].roll[1]);
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[1]);
      expect(game.frameResultOne(1)).toEqual('7');
      expect(game.frameResultTwo(1)).toEqual('/');
      expect(game.frameResultThree(1)).toEqual('');
    });
  });
  describe('when a game bowled,',function() {
    beforeEach(function(){
      game.setPinsPerRoll(0,0,pinsPerRoll.frame[0].roll[0]);
      game.setPinsPerRoll(0,1,pinsPerRoll.frame[0].roll[1]);
      game.setPinsPerRoll(1,0,pinsPerRoll.frame[1].roll[0]);
      game.setPinsPerRoll(1,1,pinsPerRoll.frame[1].roll[1]);
      game.setPinsPerRoll(2,0,pinsPerRoll.frame[2].roll[0]);
      game.setPinsPerRoll(2,1,pinsPerRoll.frame[2].roll[1]);
      game.setPinsPerRoll(3,0,pinsPerRoll.frame[3].roll[0]);
      game.setPinsPerRoll(3,1,pinsPerRoll.frame[3].roll[1]);
      game.setPinsPerRoll(4,0,pinsPerRoll.frame[4].roll[0]);
      game.setPinsPerRoll(4,1,pinsPerRoll.frame[4].roll[1]);
      game.setPinsPerRoll(5,0,pinsPerRoll.frame[5].roll[0]);
      game.setPinsPerRoll(5,1,pinsPerRoll.frame[5].roll[1]);
      game.setPinsPerRoll(6,0,pinsPerRoll.frame[6].roll[0]);
      game.setPinsPerRoll(6,1,pinsPerRoll.frame[6].roll[1]);
      game.setPinsPerRoll(7,0,pinsPerRoll.frame[7].roll[0]);
      game.setPinsPerRoll(7,1,pinsPerRoll.frame[7].roll[1]);
      game.setPinsPerRoll(8,0,pinsPerRoll.frame[8].roll[0]);
      game.setPinsPerRoll(8,1,pinsPerRoll.frame[8].roll[1]);
      game.setPinsPerRoll(9,0,pinsPerRoll.frame[9].roll[0]);
      game.setPinsPerRoll(9,1,pinsPerRoll.frame[9].roll[1]);
      game.setPinsPerRoll(10,0,pinsPerRoll.frame[10].roll[0]);
      game.setPinsPerRoll(10,1,pinsPerRoll.frame[10].roll[1]);
      game.setPinsPerRoll(11,0,pinsPerRoll.frame[11].roll[0]);
      game.setPinsPerRoll(11,1,pinsPerRoll.frame[11].roll[1]);
    });

    it('cum score for frame 1',function() {
      expect(game.cumScore(0)).toEqual(expectedScore[0])
    });
    it('cum score for frame 2',function() {
      expect(game.cumScore(1)).toEqual(expectedScore[1])
    });
    it('cum score for frame 3',function() {
      expect(game.cumScore(2)).toEqual(expectedScore[2])
    });
    it('cum score for frame 4',function() {
      expect(game.cumScore(3)).toEqual(expectedScore[3])
    });
    it('cum score for frame 5',function() {
      expect(game.cumScore(4)).toEqual(expectedScore[4])
    });
    it('cum score for frame 6',function() {
      expect(game.cumScore(5)).toEqual(expectedScore[5])
    });
    it('cum score for frame 7',function() {
      expect(game.cumScore(6)).toEqual(expectedScore[6])
    });
    it('cum score for frame 8',function() {
      expect(game.cumScore(7)).toEqual(expectedScore[7])
    });
    it('cum score for frame 9',function() {
      expect(game.cumScore(8)).toEqual(expectedScore[8])
    });
    it('cum score for frame 10',function() {
      expect(game.cumScore(9)).toEqual(expectedScore[9])
    });
  });

describe('when a PERFECT game bowled,',function() {
    beforeEach(function(){
      game2.setPinsPerRoll(0,0,perfectGame.frame[0].roll[0]);
      game2.setPinsPerRoll(0,1,perfectGame.frame[0].roll[1]);
      game2.setPinsPerRoll(1,0,perfectGame.frame[1].roll[0]);
      game2.setPinsPerRoll(1,1,perfectGame.frame[1].roll[1]);
      game2.setPinsPerRoll(2,0,perfectGame.frame[2].roll[0]);
      game2.setPinsPerRoll(2,1,perfectGame.frame[2].roll[1]);
      game2.setPinsPerRoll(3,0,perfectGame.frame[3].roll[0]);
      game2.setPinsPerRoll(3,1,perfectGame.frame[3].roll[1]);
      game2.setPinsPerRoll(4,0,perfectGame.frame[4].roll[0]);
      game2.setPinsPerRoll(4,1,perfectGame.frame[4].roll[1]);
      game2.setPinsPerRoll(5,0,perfectGame.frame[5].roll[0]);
      game2.setPinsPerRoll(5,1,perfectGame.frame[5].roll[1]);
      game2.setPinsPerRoll(6,0,perfectGame.frame[6].roll[0]);
      game2.setPinsPerRoll(6,1,perfectGame.frame[6].roll[1]);
      game2.setPinsPerRoll(7,0,perfectGame.frame[7].roll[0]);
      game2.setPinsPerRoll(7,1,perfectGame.frame[7].roll[1]);
      game2.setPinsPerRoll(8,0,perfectGame.frame[8].roll[0]);
      game2.setPinsPerRoll(8,1,perfectGame.frame[8].roll[1]);
      game2.setPinsPerRoll(9,0,perfectGame.frame[9].roll[0]);
      game2.setPinsPerRoll(9,1,perfectGame.frame[9].roll[1]);
      game2.setPinsPerRoll(10,0,perfectGame.frame[10].roll[0]);
      game2.setPinsPerRoll(10,1,perfectGame.frame[10].roll[1]);
      game2.setPinsPerRoll(11,0,perfectGame.frame[11].roll[0]);
      game2.setPinsPerRoll(11,1,perfectGame.frame[11].roll[1]);
    });

    it('cum score for frame 1',function() {
      expect(game2.cumScore(0)).toEqual(perfectScore[0])
    });
    it('cum score for frame 2',function() {
      expect(game2.cumScore(1)).toEqual(perfectScore[1])
    });
    it('cum score for frame 3',function() {
      expect(game2.cumScore(2)).toEqual(perfectScore[2])
    });
    it('cum score for frame 4',function() {
      expect(game2.cumScore(3)).toEqual(perfectScore[3])
    });
    it('cum score for frame 5',function() {
      expect(game2.cumScore(4)).toEqual(perfectScore[4])
    });
    it('cum score for frame 6',function() {
      expect(game2.cumScore(5)).toEqual(perfectScore[5])
    });
    it('cum score for frame 7',function() {
      expect(game2.cumScore(6)).toEqual(perfectScore[6])
    });
    it('cum score for frame 8',function() {
      expect(game2.cumScore(7)).toEqual(perfectScore[7])
    });
    it('cum score for frame 9',function() {
      expect(game2.cumScore(8)).toEqual(perfectScore[8])
    });
    it('cum score for bonus frame 10',function() {
      expect(game2.cumScore(9)).toEqual(perfectScore[9])
    });
  });

});