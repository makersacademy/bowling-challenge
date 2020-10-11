

describe("Player", function() {
  var player
  
  beforeEach(function() {
    player = new Player();
  });
  
  describe("#throw", function() {
  
    // Gutter game
    it("should score 0 if 0 pin down", function() {
      for (let i = 0; i < 20; i++) {
        player.throw(0)
      }
      expect(player.Score()).toEqual(0)
    })
    // scoring without spares etc
    it("should score 20 if 1 pin down each throw", function() {
      for (let i = 0; i < 20; i++) {
      player.throw(1)
      }
      expect(player.Score()).toEqual(20)
    })
    // Spare!
    it("Spare should return 22", function() {
      player.throw(6)
      player.throw(4) // 10 + 6 then bonus from below next throw
      player.throw(6) // 10 + 6(bonus) + 6 so total is 22 
      for (let i = 0; i < 17; i++) {
      player.throw(0)
      }
      expect(player.Score()).toEqual(22)
    });
    // Strike!
    it("1 Strike should return 22 if spare once", function() {
      player.throw(10)
      player.throw(4) 
      player.throw(3) // 10 + 4(bonus) + 3(bonus) + 4 + 3 should be 26
      for (let i = 0; i < 16; i++) {
      player.throw(0)
      }
      expect(player.Score()).toEqual(24)
    });
    // Strikes!
    it("All Strikes should return 300", function() {
      for (let i = 0; i < 12; i++) {
        player.throw(10)
      }
      expect(player.Score()).toEqual(300)
    });

  });
});
