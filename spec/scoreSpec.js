describe('score', function() {
  var score1
  var frame1

  beforeEach( function (){
    frame1 = jasmine.createSpyObj('frame1', ['baseScore']);
    frame1.baseScore.and.callFake(function() {
      return (2 + 5);
    });
    score1 = new Score(frame1)
  })

  describe('no spare/strike game', function() {
    it('should return the base score for the round', function(){
      expect(score1.score()).toEqual(7);
    });
  })
})
