describe ('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('bowl1', function(){
    it('return the score', function(){
      expect(bowling._bowl1(3)).toEqual(3);
    });
    it("it return 'strike' when 10 is scored", function(){
      expect(bowling._bowl1(10)).toEqual("strike")
    });
    it('changes the frameStatus to strike if a strike is bowled', function(){
      bowling.frame(10, 0)
      expect(bowling.frameStatus).toEqual('strike')
    });
  });

  describe('bowl2', function(){
    it('returns the score for bowl1 and bowl2', function(){
      bowling._bowl1(3);
      expect(bowling._bowl2(5)).toEqual([3, 5])
    });
    it('returns another score for bowl1 and bowl2', function(){
      bowling._bowl1(5);
      expect(bowling._bowl2(2)).toEqual([5, 2])
    });
    it('returns spare if the total for the first and second bowl is 10', function(){
      bowling._bowl1(7)
      expect(bowling._bowl2(3)).toEqual('spare')
    });
    it('changes the frameStatus to spare if spare is bowled', function(){
      bowling.frame(6, 4)
      expect(bowling.frameStatus).toEqual('spare')
    });
  });

  describe('frameScore', function(){
    it('is an empty array', function(){
      expect(bowling.frameScore).toEqual([])
    });
    it('receives the score for the first bowl if not a strike', function(){
      bowling._bowl1(3)
      expect(bowling.frameScore).toEqual([3])
    });
  });

  describe('score', function(){
    it('starts as an empty array', function(){
      expect(bowling.score).toEqual([])
    });
    it('takes a running total of the score', function (){
      bowling.frame(4, 3)
      bowling.frame(2, 7)
      expect(bowling.score).toEqual([4, 3, 2, 7])
    });
  });

  describe('frame', function(){
    it('returns the frameScore array', function(){
      // expect(bowling.frame(3, 5)).toEqual([3, 5])
      bowling.frame(3, 5)
      expect(bowling.score).toEqual([3, 5])
    });
    it('ends frame if bowl1 is a strike', function(){
      bowling.frame(10, 0)
      expect(bowling.frameStatus).toEqual('strike')
    });
    it('won\'t let the user enter a score if score1 is 10', function(){
      expect(function() { bowling.frame(10, 3) }).toThrowError('You may not bowl again in this frame')
    });
  });

  describe('prevFrame', function(){
    it('constructs as an empty string', function(){
      expect(bowling.prevFrame).toEqual("")
    });
  });

  describe('frameStatus', function(){
    it('initializes as an empty string', function(){
      expect(bowling.frameStatus).toEqual("")
    });
    it('is set to strike when a strike is bowled', function(){
      bowling.frame(10, 0)
      expect(bowling.frameStatus).toEqual('strike')
    });
    it('is set to spare when a spare is bowled', function(){
      bowling.frame(7, 3)
      expect(bowling.frameStatus).toEqual('spare')
    });
    it('is set to openFrame when a strike or spare isn\'t bowled', function(){
      bowling.frame(3, 5)
      expect(bowling.frameStatus).toEqual('openFrame')
    });
  });

  describe('bonus', function (){
    describe('a strike and spare isn\'t bowled', function(){
      it('checks if prevFrame is a spare then adds both scores to the score array', function(){
        bowling.prevFrame = 'spare'
        bowling.frame(3, 5)
        expect(bowling.score).toEqual([13, 3, 5])
      });
      it('checks if prevFrame is 2xstrike and adds the bonus', function(){
        bowling.prevFrame = '2xstrike'
        bowling.frame(3, 5)
        expect(bowling.score).toEqual([23, 18, 3, 5])
      });
    });
    describe('a spare is bowled', function(){
      it('checks if the previous ball is a strike and adds bonus', function(){
        bowling.prevFrame = 'strike'
        bowling.frame(5, 5)
        expect(bowling.score).toEqual([20])
      });
      it('checks if the prevFrame is 2xstrike and adds bonus', function(){
        bowling.prevFrame = '2xstrike'
        bowling.frame(5, 5)
        expect(bowling.score).toEqual([25, 20])
      });
    });
    describe('a strike is bowled', function(){
      it('checks if prevFrame is a spare and adds 20 to the score', function (){
        bowling.prevFrame = 'spare'
        bowling.frame(10)
        expect(bowling.score).toEqual([20])
      });
      it('checks if prevFrame is a strike and changes prevFrame to 2xstrike', function(){
        bowling.prevFrame = 'strike'
        bowling.frame(10)
        expect(bowling.prevFrame).toEqual('2xstrike')
      });
      it('checks if prevFrame is a 2xstrike and adds 30 to the score', function(){
        bowling.prevFrame = '2xstrike'
        bowling.frame(10)
        expect(bowling.score).toEqual([30])
      });
    });
  });

  describe('frameCounter', function(){
    it('counts each frame', function(){
      bowling.frame(2, 5)
      bowling.frame(2, 5)
      bowling.frame(2, 5)
      bowling.frame(2, 5)
      expect(bowling.frameCounter).toEqual(4)
    });
  });

  describe('frameTen', function(){
    describe('first ball is not a strike', function(){
      it('returns the bowl', function(){
          bowling.frameTen(4)
          expect(bowling.frameScore).toEqual([4, 0])
      });
      it('treats the first 2 bowls as a frame', function(){
        bowling.frameTen(6, 2)
        expect(bowling.frameScore).toEqual([6, 2])
      });
    });
  });

  describe('a short game is played', function(){
    it('plays a short game', function(){
      bowling.frame(10)
      bowling.frame(10)
      bowling.frame(3, 7)
      bowling.frame(3, 3)
      expect(bowling.score).toEqual([23, 20, 13, 3, 3])
    });
  });
});
