describe("Bowling", function() {
  var bowling;
  var times;

  beforeEach(function() {
    bowling = new Bowling();
  })

  describe("A new instance of bowling", function() {
    it ("has a total of zero", function() {
      expect(bowling.total).toEqual(0);
    })
    it ("has an empty array of frames", function() {
      expect(bowling.frames).toEqual([]);
    })
  })

  describe("Bowling calculates scores", function() {

    it("[[1,4],[4,5],[6,4],[5,5],[10,0],[0,1],[7,3],[6,4],[10,0],[2,8,6]] => 133", function() {
      bowling.bowl([1,4]);
      bowling.bowl([4,5]);
      bowling.bowl([6,4]);
      bowling.bowl([5,5]);
      bowling.bowl([10,0]);
      bowling.bowl([0,1]);
      bowling.bowl([7,3]);
      bowling.bowl([6,4]);
      bowling.bowl([10,0]);
      bowling.bowl([2,8,6]);
      expect(bowling.total).toEqual(133);
    })

    it("[[0,1],[2,3],[4,5],[6,4],[3,6],[5,4],[5,5],[3,5],[2,7],[3,7,6]] => 92", function() {
      bowling.bowl([0,1]);
      bowling.bowl([2,3]);
      bowling.bowl([4,5]);
      bowling.bowl([6,4]);
      bowling.bowl([3,6]);
      bowling.bowl([5,4]);
      bowling.bowl([5,5]);
      bowling.bowl([3,5]);
      bowling.bowl([2,7]);
      bowling.bowl([3,7,6]);
      expect(bowling.total).toEqual(92);
    })

    it("[[9,1],[2,4],[6,4],[6,2],[6,4],[10,0],[7,3],[0,1],[10,0],[9,1,9]] => 132", function() {
      bowling.bowl([9,1]);
      bowling.bowl([2,4]);
      bowling.bowl([6,4]);
      bowling.bowl([6,2]);
      bowling.bowl([6,4]);
      bowling.bowl([10,0]);
      bowling.bowl([7,3]);
      bowling.bowl([0,1]);
      bowling.bowl([10,0]);
      bowling.bowl([9,1,9]);
      expect(bowling.total).toEqual(132);
    })

    it("[[5,5],[4,6],[6,4],[4,6],[7,3],[2,8],[8,2],[2,8],[7,3],[2,8,7]] => 149", function() {
      bowling.bowl([5,5]);
      bowling.bowl([4,6]);
      bowling.bowl([6,4]);
      bowling.bowl([4,6]);
      bowling.bowl([7,3]);
      bowling.bowl([2,8]);
      bowling.bowl([8,2]);
      bowling.bowl([2,8]);
      bowling.bowl([7,3]);
      bowling.bowl([2,8,7]);
      expect(bowling.total).toEqual(149);
    })

    it("[[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[2,7] => 260", function() {
      times = 9;
      for (var i=0; i<times; i++) {
        bowling.bowl([10,0]);
      }
      bowling.bowl([2,7]);
      expect(bowling.total).toEqual(260);
    })

    it("[[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]] => 300", function() {
      times = 9;
      for (var i=0; i<times; i++) {
        bowling.bowl([10,0]);
      }
      bowling.bowl([10,10,10]);
      expect(bowling.total).toEqual(300);
    })

  })
});
