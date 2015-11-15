describe("Bowling Score", function() {

  it("a bowling game can only run for 10 frames", function() {
    expect(function(){
      bowlingScore([[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9], [10,10], [1,1]])
    }).toThrow("invalid scorecard length - maximum of 10 frames per game");
  });

  it("pinCheck will check the entire score card for pins greater than 10", function(){
    expect(greaterThan10Check([[1,1], [10], [11]])).toBe(true);
  })

  it("pinCheck will check whether the sum of any frames is greater than 10", function(){
    expect(sumOfPinsCheck([[4,4],[4,7]])).toBe(true);
  })

  it("totalPinsPerFrame will reduce the scorecard to total pins per frame", function(){
    expect(totalPinsPerFrame([[1,1],[2,2],[3,3]])).toEqual([2,4,6])
  })

  it("a player can only knock over a maximum of 10 pins", function() {
    expect(function(){
      bowlingScore([[11]])
    }).toThrow("invalid number of pins supplied (MAX is ten)");
  });

  it("a spare adds the pins from the next roll as a bonus", function() {
    expect(bowlingScore([[3,7], [4,0]])).toEqual(18);
  });

  it("a strike adds the pins from the next two rolls as a bonus", function() {
    expect(bowlingScore([[10], [2,3]])).toEqual(20);
  });

  it("A perfect game is worth 300 points", function(){
    expect(bowlingScore([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10,10,10]])).toEqual(300);
  });
});
