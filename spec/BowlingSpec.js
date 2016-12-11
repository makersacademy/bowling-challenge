describe("Bowling", function(){
  var games =[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [5,5,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [10,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [10,0,10,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,0,10,10,10]]
  var bowling;
  var index = 0;
  beforeEach(function(){
    bowling = new Bowling(games[index]);
  })
  afterEach(function() {
    index++;
  });

  it("should sum a game with all gutter balls to 0", function(){
    expect(bowling.score()).toEqual(0);
  });

  it("should sum all bowls of 1 to 21", function(){
    expect(bowling.score()).toEqual(20);
  });

  it("should calculate a game with a spare followed by 5", function(){
    expect(bowling.score()).toEqual(37);
  });

  it("should calculate a game with a spare followed by 8", function(){
    expect(bowling.score()).toEqual(43);
  })

  it("should calculate a game with a strike followed by 2", function(){
    expect(bowling.score()).toEqual(30)
  });

  it("should calculate a game with two consecutive strikes", function(){
    expect(bowling.score()).toEqual(49);
  })
  it("should calculate a perfect game", function(){
    expect(bowling.score()).toEqual(300);
  });
});
