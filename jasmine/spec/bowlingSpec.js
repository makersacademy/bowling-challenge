describe ('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('frame', function(){
    it('return the score', function(){
      expect(bowling.frame(3)).toEqual(3);
    });
    it("it return 'strike' when 10 is scored", function(){
      expect(bowling.frame(10)).toEqual("strike")
    });
  });

});
