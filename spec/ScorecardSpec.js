describe("Scorecard", function(){
  var scorecard

  beforeEach(function(){
    frameSpy = jasmine.createSpyObj('frame', ['bowl', 'scores'])
    scorecard = new Scorecard(frameSpy)
  })

  describe('default', function(){
    it('has an empty array of scores', function(){
      

    });
  });

  describe("#bowl", function(){
    it("bowls a ball and adds the score to the scorecard", function(){
      scorecard.bowl()
      expect(scorecard.scores).toEqual([1])

    });
  });
})
