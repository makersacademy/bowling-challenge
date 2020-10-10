

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
    expect(player.score).toEqual(0)
  })
  // scoring without spares etc
  it("should score 20 if 1 pin down each throw", function() {
    for (let i = 0; i < 20; i++) {
    player.throw(1)
    }
    expect(player.score).toEqual(20)
  })

  it("should score 21 if 2 then 1 pins down", function() {
    player.throw(2)
    for (let i = 0; i < 19; i++) {
    player.throw(1)
    }
    expect(player.score).toEqual(21)
  })
  // scoring a spare
  it("should return 16 ", function() {
    player.throw(6)
    player.throw(4) // 10 + 6 bonus from below next throw
    player.throw(6) // total therefore should be 16 + 6 = 22
    for (let i = 0; i < 17; i++) {
    player.throw(0)
    }
    expect(player.score).toEqual(22)
  })

});

});
