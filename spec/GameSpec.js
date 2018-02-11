describe("Game", function() {
  var game;

  describe("general game behaviour", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("has 10 empty frames when the game starts", function() {
      expect(game.frames.length).toEqual(10);
    });

    // it("knows to enter into first frame", function() {
    //   game.roll(1,1,3);
    //   expect(game.frames[0].bowls[0]).toEqual(3);
    // });

    it("knows it is the first roll", function() {
      game.roll(1,7);
      game.roll(1,3);
      expect(game.frames[1].isRoll).toEqual(1);
    });

    it("has a running total", function() {
      game.roll(1,3);
      game.roll(1,4);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(7)
    });

    it("cannot add a roll if it takes the total over 10", function() {
      game.roll(1,3);
      expect( function() { game.roll(1,9) } ).toThrow('not enough pins!');
    });
  });

  describe("enters bowl scores", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("enters a first bowl into a frame", function() {
      game.roll(1,3);
      expect(game.frames[0].bowls).toEqual([3])
    });

    it("enters a second bowl into a frame", function() {
      game.roll(1,3);
      game.roll(1,4);
      expect(game.frames[0].bowls).toEqual([3,4])
    });
  });

  describe("spare", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("adds the next roll to the previous frame score", function() {
      game.roll(1,7);
      game.roll(1,3);
      game.roll(2,1);
      game.roll(2,3);
      expect(game.frames[0].total).toEqual(11)
    });

    it("has the correct running total", function() {
      game.roll(1,7);
      game.roll(1,3);
      game.roll(2,1);
      game.roll(2,3);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(15)
    });
  });

  describe("strike", function() {
    beforeEach(function() {
      game = new Game();
      game.start(10);
    });

    it("adds the next two rolls to the previous frame score", function() {
      game.roll(1,10);
      game.roll(2,1);
      game.roll(2,3);
      expect(game.frames[0].total).toEqual(14)
    });

    it("adds the next two rolls if the first of them is strike", function() {
      game.roll(1,10);
      game.roll(2,10);
      game.roll(3,3);
      game.roll(3,5);
      expect(game.frames[0].total).toEqual(23)
      expect(game.frames[1].total).toEqual(18)
    });

    it("has the correct running total after 2 strikes", function() {
      game.roll(1,10);
      game.roll(2,10);
      game.roll(3,3);
      game.roll(3,5);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(49)
    });
  });

  describe("10th frame", function() {

    beforeEach(function() {
      game = new Game();
      frame = new Frame();
      frame.bowls = [2,5]
      for(var i=0; i < 9; i++){
        game.frames.push(frame);
        game.frames[i].sumTotal();
      }
    });

    it("ends the game after 10th frame without bonuses", function() {
      frame1 = new Frame();
      frame1.bowls = [2,5]
      game.frames.push(frame1);
      game.frames[9].sumTotal();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(70);
    });

    it("allows 3rd roll", function() {
      frame1 = new Frame();
      game.frames.push(frame1);
      game.roll(10,2);
      game.roll(10,8);
      expect(game.frames[9].isRoll).toEqual(3)
    });

    it("counts extra roll score if 10th frame is spare", function() {
      frame1 = new Frame();
      frame1.bowls = [5,5]
      game.frames.push(frame1);
      game.roll(10,5)
      game.frames[9].sumTotal();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(78)
    });

    it("does not allow more than 10 pins when 1st bowl of 10th frame is a strike", function() {
      frame1 = new Frame();
      frame1.bowls = [10,8]
      frame1.isRoll = 3
      game.frames.push(frame1);
      expect( function() { game.roll(10,8); } ).toThrow('not enough pins!');
    });

    it("counts 2 extra rolls if 10th frame is strike", function() {
      frame1 = new Frame();
      frame1.bowls = [10]
      game.frames.push(frame1);
      game.roll(10,10);
      game.roll(10,4);
      game.frames[9].sumTotal();
      game.calculateTotal();
      expect(game.runningTotal).toEqual(87)
    });
  });

  describe("special cases", function() {
    beforeEach(function() {
      game = new Game();
    });

    describe("perfect game", function() {
      it("has a score of 300", function() {
        frame = new Frame();
        frame.bowls = [10]
        for(var i=0; i < 10; i++){
          game.frames.push(frame);
          game.frames[i].sumTotal();
        }
        game.roll(10,10);
        game.roll(10,10);
        game.frames[9].sumTotal();
        game.calculateTotal();
        expect(game.runningTotal).toEqual(300)
      });
    });

    describe("gutter game", function() {
      it("has a score of 0", function() {
        frame = new Frame();
        frame.bowls = [0]
        for(var i=0; i < 10; i++){
          game.frames.push(frame);
          game.frames[i].sumTotal();
        }
        game.roll(10,0);
        game.frames[9].sumTotal();
        game.calculateTotal();
        expect(game.runningTotal).toEqual(0)
      });
    });

    it("gives the correct total for the example README game", function() {
      game.start(10);
      game.roll(1,1);
      game.roll(1,4);
      game.roll(2,4);
      game.roll(2,5);
      game.roll(3,6);
      game.roll(3,4);
      game.roll(4,5);
      game.roll(4,5);
      game.roll(5,10);
      game.roll(6,0);
      game.roll(6,1);
      game.roll(7,7);
      game.roll(7,3);
      game.roll(8,6);
      game.roll(8,4);
      game.roll(9,10);
      game.roll(10,2);
      game.roll(10,8);
      game.roll(10,6);
      game.calculateTotal();
      expect(game.runningTotal).toEqual(133)
    });
  });
});
