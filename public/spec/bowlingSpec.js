describe ('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('bowl1', function(){
    it('return the score', function(){
      expect(bowling.bowl1(3)).toEqual(3);
    });
    it("it return 'strike' when 10 is scored", function(){
      expect(bowling.bowl1(10)).toEqual("strike")
    });
    it('changes the frameStatus to strike if a strike is bowled', function(){
      bowling.frame(10, 0)
      expect(bowling.frameStatus).toEqual('strike')
    });
  });

  describe('bowl2', function(){
    it('returns the score for bowl1 and bowl2', function(){
      bowling.bowl1(3);
      expect(bowling.bowl2(5)).toEqual([3, 5])
    });
    it('returns another score for bowl1 and bowl2', function(){
      bowling.bowl1(5);
      expect(bowling.bowl2(2)).toEqual([5, 2])
    });
    it('returns spare if the total for the first and second bowl is 10', function(){
      bowling.bowl1(7)
      expect(bowling.bowl2(3)).toEqual('spare')
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
      bowling.bowl1(3)
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
      expect(bowling.frame(3, 5)).toEqual([3, 5])
    });
    it('ends frame if bowl1 is a strike', function(){
      expect(bowling.frame(10, 0)).toEqual('strike')
    });
    it('won\'t let the user enter a score if score1 is 10', function(){
      expect(function() { bowling.frame(10, 3) }).toThrowError('You may not bowl again in this frame')
    });
  });

  // describe('bonus', function (){
  //   it('')
  // });
});
