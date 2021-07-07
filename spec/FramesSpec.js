describe("Frame",function(){
  describe("Every frame has two roles",function(){
    it("We can have access to every frame's movement",function(){
      var first ;
      var second ;
      var frame = new Frame(first,second);
      expect(frame.first_role).toEqual(first);
      expect(frame.showFirst()).toEqual(first);
      expect(frame.second_role).toEqual(second);
      expect(frame.showSecond()).toEqual(second);
    });
  });
  describe("Every frame can understand if it is sapre or strike.",function(){
    it("understads if it is strike.",function(){
      var frame1 = new Frame(10,0);
      var frame2 = new Frame(5,5);
      var frame3 = new Frame(0,10);
      expect(frame1._isStrike()).toEqual(true);
      expect(frame2._isStrike()).toEqual(false);
      expect(frame3._isStrike()).toEqual(false);
    });
    it("understads if it is spare.",function(){
      var frame1 = new Frame(10,0);
      var frame2 = new Frame(5,5);
      var frame3 = new Frame(0,10);
      expect(frame1._isSpare()).toEqual(false);
      expect(frame2._isSpare()).toEqual(true);
      expect(frame3._isSpare()).toEqual(true);
    });
  });





});
