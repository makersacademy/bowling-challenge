describe("Bowling", function(){

  var bowling;

  describe("game function",function(){
    
    it("can record the first frame'",function(){
      bowling = new Bowling();
      bowling.roll(1,2);
      expect(bowling.framesTally[0]).toEqual([1,2]);
    });

    it("will sum correctly when there are no strikes or spares",function(){
      bowling = new Bowling();
      bowling.roll(1,2);
      expect(bowling.total()).toEqual(3);
    });

    it("when strike occurs,player receives bonus equal to number pins knocked down by next two rolls",function(){
      bowling = new Bowling();
      bowling.roll(10,0);
      bowling.roll(1,1);
      expect(bowling.total()).toEqual(14);
    });
  });
});