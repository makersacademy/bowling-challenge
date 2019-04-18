describe("Bonus scores in rounds 1-9", function(){
  describe("Spares", function(){
    beforeEach(function() {
      controller = new Controller();
    })

    it("correctly allows a spare to be scored on one occasion", function(){
      for(let i=0; i<10; i++){
        controller.addBall(3);
      }
      expect(controller.totalScore()).toEqual(30);
      controller.addBall(3);
      controller.addBall(7);
      controller.addBall(7);
      expect(controller.totalScore()).toEqual(54);
    });

    it("correctly allows a spare to be scored on two occasions", function(){
      for(let i=0; i<10; i++){
        controller.addBall(3);
      }
      controller.addBall(3);
      controller.addBall(7);
      for(let j=0; j<2; j++){
        controller.addBall(3);
      }
      expect(controller.totalScore()).toEqual(49);
      controller.addBall(6);
      controller.addBall(4);
      controller.addBall(8);
      expect(controller.totalScore()).toEqual(75);
    });

    it("correctly allows a spare to be scored on consecutive occasions", function(){
      for(let i=0; i<10; i++){
        controller.addBall(3);
      }
      controller.addBall(3);
      controller.addBall(7);
      controller.addBall(6);
      expect(controller.totalScore()).toEqual(52);
      controller.addBall(4);
      controller.addBall(8);
      expect(controller.totalScore()).toEqual(72);
    });
  });

  describe("Strikes", function(){

    it("correctly allows a strike to be scored on one occasion", function(){
      controller = new Controller();
      for(let i=0; i<10; i++){
        controller.addBall(3);
      }
      expect(controller.totalScore()).toEqual(30);
      controller.addBall(10);
      controller.addBall(7);
      controller.addBall(7);
      expect(controller.totalScore()).toEqual(68);
    });
  });

  describe("DoubleStrike", function(){

    it("correctly allows 2 strikes in a row", function(){
      controller = new Controller();
      for(let i=0; i<8; i++){
        controller.addBall(3);
      }
      expect(controller.totalScore()).toEqual(24);
      controller.addBall(10);
      controller.addBall(10);
      controller.addBall(7);
      controller.addBall(5);
      controller.addBall(5);
      // 24 + (10 + 10 + 7) + (10 + 7 + 5) + 7 + 5 + 5
      expect(controller.totalScore()).toEqual(90);
    });
  });
});
