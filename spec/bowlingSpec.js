describe("ScoreCalculator", function() {
  var s;
  beforeEach(function(){
    s = new ScoreCalculator();
  });

  it("has a score map when created", function() {
    var emptyScore = [
      {1: [0,0]},
      {2: [0,0]},
      {3: [0,0]},
      {4: [0,0]},
      {5: [0,0]},
      {6: [0,0]},
      {7: [0,0]},
      {8: [0,0]},
      {9: [0,0]},
      {10: [0,0]},
      {11: [0,0]}
    ];

      expect(s.score).toEqual(emptyScore);
  });

  describe("addFrame", function() {
    it("adds scores to the correct frame", function() {
      s.addFrame(0, 1, 5, 5);
      expect(s.score[0]).toEqual({1: [5, 5]});
    });
  });

  describe("calculate", function() {
    it("returns 300 for a perfect score", function() {
      s.score = [
        {1: [10,0]},
        {2: [10,0]},
        {3: [10,0]},
        {4: [10,0]},
        {5: [10,0]},
        {6: [10,0]},
        {7: [10,0]},
        {8: [10,0]},
        {9: [10,0]},
        {10: [10,0]},
        {11: [10,10]} ];
      expect(s.calculate()).toEqual(300);
    });

    it("returns 133 for this game", function() {
      s.score = [
        {1: [1,4]},
        {2: [4,5]},
        {3: [6,4]},
        {4: [5,5]},
        {5: [10,0]},
        {6: [0,1]},
        {7: [7,3]},
        {8: [6,4]},
        {9: [10,0]},
        {10: [2,8]},
        {11: [6,0]} ];
      expect(s.calculate()).toEqual(133);
    });

    it("returns 167 for this game", function() {
      s.score = [
        {1: [10,0]},
        {2: [7,3]},
        {3: [9,0]},
        {4: [10,0]},
        {5: [0,8]},
        {6: [8,2]},
        {7: [0,6]},
        {8: [10,0]},
        {9: [10,0]},
        {10: [10,0]},
        {11: [8,1]} ];
      expect(s.calculate()).toEqual(167);
    });
  });






});
