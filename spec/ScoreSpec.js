describe('Score', () => {
  var score;
  var frame;
  var game; 

  beforeEach(()=> {
    score = new Score();
    frame = spyOn(frame);
    game = spyOn(game);
  })
  describe("Frame Scores", () => {

    it("should calculate the frame score", () => {
      
      expect(score.frame(frame)).toEqual();
    })
  })

})