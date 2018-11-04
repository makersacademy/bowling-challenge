describe("Scorer", function() {

  beforeEach(function() {
    scorer = new Scorer();
  });

  it("should calculate a single frame score", function() {
    scorer.scores = [5, 4];
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([9]);
  });

  it("should be able to keep track of totals", function() {
    scorer.scores = [5,4,7,2,1,0]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([9,9,1]);
  });

  it("totals should only be calculated once a frame is complete", function() {
    scorer.scores = [5]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([])
  });

  it("strikes are only calculated once two more rolls have been made", function() {
    scorer.scores = [5,4,10,'-']
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([9]);
  });

  it("strikes are only calculated once two more rolls have been made", function() {
    scorer.scores = [5,4,10,'-',0]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([9]);
  });

  it("strikes score 10 plus the addition of the next two rolls", function() {
    scorer.scores = [5,4,10,'-',10,'-',10]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([9,30]);
  });

  it("strikes score 10 plus the addition of the next two rolls", function() {
    scorer.scores = [5,4,10,'-',2,0,10]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([9,12,2]);
  });

  it("spares are only calculated once one more roll has been made", function() {
    scorer.scores = [5,5]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([]);
  });

  it("spares score 10 plus the addition of the next roll", function() {
    scorer.scores = [6,4,2,1]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([12,3]);
  });

  it("spares score 10 plus the addition of the next roll", function() {
    scorer.scores = [6,4,7,3]
    scorer.scoreFrames()
    expect(scorer.frame_scores).toEqual([17]);
  });

});
