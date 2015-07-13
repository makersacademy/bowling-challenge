describe("Bowling", function(){

  var bowling;

  // beforeEach(function(){
      // bowling = new Bowling();
  // })


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

    it("when spare occurs (e.g. (10,0), player bonus equal to first roll on next frame)",function(){
      bowling = new Bowling();
      bowling.roll(10,0);
      bowling.roll(1,1);
      expect(bowling.total()).toEqual(14);
    });

    it("when spare occurs (e.g. (2,8), player bonus equal to first roll on next frame)",function(){
      bowling = new Bowling();
      bowling.roll(9,1);
      bowling.roll(1,1);
      expect(bowling.total()).toEqual(13);
    });

    it("can finish",function(){
      bowling = new Bowling();
      for (i = 0; i < 10; i++){
        bowling.roll(1,1);}
        bowling.roll(1,1);
        bowling.checkPlaying();
        expect(bowling.playing).toBe(false);
    });
  });
});