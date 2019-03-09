describe("Count",function(){
  describe("Every count object has an array of frames.",function(){
    it("When a Counter object is made, it has an ampty array",function(){
      var count = new Count();
      expect(count.array).toEqual([]);
    });
  });
});
