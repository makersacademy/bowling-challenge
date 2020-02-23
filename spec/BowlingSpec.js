describe ("Bowling", () => {
  let testBowling;

  beforeEach(() => {
    testBowling = new Bowling;
  });

  describe("score", () => {
    it("should be able to keep score of a gutter game", () => {
      for(let i = 0; i < 20; i++) {
        testBowling.roll(0)
      }
      expect(testBowling.score()).toEqual(0)
    })

    it("should be able to add the pins", () => {
      for(let i = 0; i < 20; i++) {
        testBowling.roll(1)
      }
      expect(testBowling.score()).toEqual(20)
    });
  });

  it("should be able to keep track of score", () => {
    testBowling.roll(1)
    testBowling.roll(4)
    testBowling.roll(4)
    testBowling.roll(5)
    testBowling.roll(6)
    testBowling.roll(4)
    testBowling.roll(5)
    testBowling.roll(5)
    testBowling.roll(10)
    testBowling.roll(0)
    testBowling.roll(1)
    testBowling.roll(7)
    testBowling.roll(3)
    testBowling.roll(6)
    testBowling.roll(4)
    testBowling.roll(10)
    testBowling.roll(2)
    testBowling.roll(8)
    testBowling.roll(6)
    expect(testBowling.score()).toEqual(133)
  })
});
