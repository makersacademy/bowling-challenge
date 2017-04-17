describe("Bowling", function(){

  var bowling;
  beforeEach(function(){
     bowling = new Bowling();
  });


  describe("game function",function(){

    it("can record the first frame'",function(){
      bowling.roll(1,2);
      expect(bowling.framesTally[0]).toEqual([1,2]);
    });

    it("will sum correctly when there are no strikes or spares",function(){
      bowling.roll(1,2);
      expect(bowling.total()).toEqual(3);
    });

    it("when spare occurs (e.g. (10,0), player bonus equal to first roll on next frame)",function(){

      bowling.roll(10,0);
      bowling.roll(1,1);
      expect(bowling.total()).toEqual(14);
    });

    it("when spare occurs (e.g. (2,8), player bonus equal to first roll on next frame)",function(){

      bowling.roll(9,1);
      bowling.roll(1,1);
      expect(bowling.total()).toEqual(13);
    });

    it("can finish",function(){

      for (var i = 0; i < 10; i++){
        bowling.roll(1,1);}
        expect(bowling.playing).toBe(false);
    });

    it("can sum a specific frame when it is not a spare or strike",function(){
        bowling.roll(1,1);
        bowling.roll(2,3);
        expect(bowling.frameSum(2)).toEqual(5);
    });

    it("can update a strike frame for subsequent points",function(){
      bowling.roll(10,0);
      bowling.roll(2,3);
      bowling.frameSum(2);
      expect(bowling.secondLastFrameTotal).toEqual(15);
    });

    it("maximum pins bowled are 10",function(){
      expect( function(){ bowling.roll(4,7); }).toThrow(new Error('Maximum pins are 10'));
    });

    // it("can register a perfect score",function(){
    //   for (var i = 0; i < 14; i++){
    //     bowling.roll(10,0);}
    //     expect(bowling.total()).toBe(300);
    // });

    it("when strike occurs, player bonus equal to next two rolls)",function(){

      bowling.roll(10,0);
      bowling.roll(10,0);
      bowling.roll(10,0);
      expect(bowling.total()).toEqual(90);
    });

  });
});

//OTHER TESTS TO INPUT

//total pins knocked down cannot be greater than 10
//check that the game exits at 12th frame (when less than 10 bowled on 11th frame)
//check that game exits on 13th frame regardless
