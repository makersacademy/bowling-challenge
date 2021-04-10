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
  });

  describe('bowl2', function(){
    it('returns the score for bowl1 and bowl2', function(){
    bowling.bowl1(3);
    expect(bowling.bowl2(5)).toEqual([3, 5])
    });
    it('returns spare if the total for the first and second bowl is 10', function(){
      bowling.bowl1(7)
      expect(bowling.bowl2(3)).toEqual('spare')
    });
  });

  describe('frame', function(){
    it('is an empty array', function(){
      expect(bowling.frame).toEqual([])
    });
    it('receives the score for the first bowl if not a strike', function(){
      bowling.bowl1(3)
      expect(bowling.frame).toEqual([3])
    });
  });
});
