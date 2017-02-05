describe("Scorecard", function(){
  var scorecard

  beforeEach(function(){
    frameSpy = jasmine.createSpyObj('frame', ['bowl'])
    scorecard = new Scorecard(frameSpy)
  })

  describe('default', function(){
    it('has an empty array of scores', function(){
      expect(scorecard.scores).toEqual([])
    });
  });

  describe("#bowl", function(){
    it("bowls a ball and adds the score to the scorecard", function(){
      frameSpy.bowl.and.callFake(function() { return 1 });
      scorecard.bowl()
      expect(scorecard.scores).toEqual([1])
    });
  });
})
