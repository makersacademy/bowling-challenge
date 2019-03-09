describe("Count",function(){
  describe("Every count object has an array of frames.",function(){
    it("When a Counter object is made, it has an ampty array",function(){
      var count = new Count();
      expect(count.array).toEqual([]);
    });
    it("When a frame is added, it will be in count's array",function(){
      var frame ;
      var count = new Count();
      count.add(frame);
      expect(count.array).toContain(frame);
    });
  });
});
