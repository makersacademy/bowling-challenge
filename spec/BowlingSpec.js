describe("Frame",function(){
  describe("Every frame has two roles",function(){
    it("We can have access to every frame's movement",function(){
      var first ;
      var second ;
      var frame = new Frame(first,second);
      expect(frame.first_role).toEqual(first);
      expect(frame.second_role).toEqual(second);
    });
  });





});
