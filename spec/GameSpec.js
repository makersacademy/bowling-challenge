describe("Game", function () {
  var game;

  beforeEach(function () {
    numbers = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    game = new Game(numbers);
  });

  it("should initialize with a score = 0", function () {
    expect(game.score).toEqual(0);
  });

  it("should initialize with a currentGameState = standard", function () {
    expect(game.currentGameState).toEqual('standard');
  });

  describe("play", function () {

    it("should recieve an array of 0's and return a score of 0's", function () {
      expect(game.play()).toEqual(0);
    });

    it("should recieve an array of the score of a game with no spares and return the total of all the rolls together", function () {
      numbers = [[2, 3], [4, 2], [5, 2], [3, 1], [8, 1], [7, 2], [6, 3], [5, 2], [4, 1], [1, 6]]
      game = new Game(numbers);
      expect(game.play()).toEqual(68);
    })

    it("should recieve an array of the score a game with spares and return the correct score", function () {
      numbers = [[2, 3], [5, 5], [5, 2], [8, 2], [8, 1], [7, 2], [6, 4], [5, 2], [4, 1], [1, 6]]
      game = new Game(numbers);
      expect(game.play()).toEqual(97);
    })

    it("should recieve an array of the score a game with spares and strikes are return the correct score", function () {
      numbers = [[2, 3], [5, 5], [10, 0], [7, 2], [8, 1], [7, 3], [10, 0], [5, 2], [10, 0], [1, 6]]
      game = new Game(numbers);
      expect(game.play()).toEqual(130);
    })

    it("should recieve an array of the score a game finishing with a spare return the correct score", function () {
      numbers = [[2, 5], [6, 4], [10, 0], [6, 4], [10, 0], [10, 0], [7, 2], [10, 0], [10, 0], [6, 4], [10, 0]]
      game = new Game(numbers);
      expect(game.play()).toEqual(188);
    })

    it("should recieve an array of the score a game finishing with a strike and return the correct score", function () {
      numbers = [[2, 5], [6, 4], [10, 0], [6, 4], [10, 0], [10, 0], [7, 2], [10, 0], [10, 0], [10, 0], [5, 5]]
      game = new Game(numbers);
      expect(game.play()).toEqual(197);
    })

    it("should recieve an array of the perfect game return 300", function () {
      numbers = [[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10]]
      game = new Game(numbers);
      expect(game.play()).toEqual(300);
    })
  })

  describe("addRolls", function () {

    beforeEach(function () {
      frame = [4, 3]
      game = new Game(numbers);
    });

    it("should recieve a frame of  [4, 3] and 'standard' and add 7 to the total", function () {
      game.addRolls(frame, 'standard')
      expect(game.score).toEqual(7);
    });

    it("should recieve a frame of [4, 3] and 'spare' and add 11 to the total", function () {
      game.addRolls(frame, 'spare')
      expect(game.score).toEqual(11);
    });

    it("should recieve a frame of [4, 3] and 'strike' and add 11 to the total", function () {
      game.addRolls(frame, 'strike')
      expect(game.score).toEqual(14);
    });

    it("should recieve a frame of [4, 3] and 'doublestrike' and add 11 to the total", function () {
      game.addRolls(frame, 'doubleStrike')
      expect(game.score).toEqual(18);
    });
  });

  describe("updateGameState", function () {

    beforeEach(function () {
      game = new Game(numbers);
    });

    it("should recieve a frame of [4, 3] and change the current game state to 'standard'", function () {
      game.updateGameState([4, 3])
      expect(game.currentGameState).toEqual('standard');
    });

    it("should recieve a frame of [4, 6] and change the current game state to 'spare'", function () {
      game.updateGameState([4, 6])
      expect(game.currentGameState).toEqual('spare');
    });

    it("should recieve a frame of [10, 0] and change the current game state to 'strike'", function () {
      game.updateGameState([10, 0])
      expect(game.currentGameState).toEqual('strike');
    });

    it("should recieve a frame of [10, 0] and change the current game state to 'strike' if the currentGameState is 'strike'", function () {
      game.currentGameState = 'strike'
      game.updateGameState([10, 0])
      expect(game.currentGameState).toEqual('doubleStrike');
    });

  });

  describe("checkFinalRoll", function () {

    it("should recieve a game where the final frame ends with two strikes and return the total of the penultimate roll * 2 + final roll", function () {
      numbers = [[2, 5], [6, 4], [10, 0], [6, 4], [10, 0], [10, 0], [7, 2], [10, 0], [10, 0], [10, 0], [5, 5]]
      game = new Game(numbers);
      expect(game.checkFinalRoll()).toEqual(15);
    });

    it("should recieve a game where the final frame ends with one strike and return the total of the penultimate roll + final roll", function () {
      numbers = [[2, 5], [6, 4], [10, 0], [6, 4], [10, 0], [10, 0], [7, 2], [10, 0], [5, 2], [10, 0], [5, 5]]
      game = new Game(numbers);
      expect(game.checkFinalRoll()).toEqual(10);
    });

    it("should recieve a game where the final frame ends with a spare and return the total of the final roll", function () {
      numbers = [[2, 5], [6, 4], [10, 0], [6, 4], [10, 0], [10, 0], [7, 2], [10, 0], [5, 2], [4, 6], [5, 0]]
      game = new Game(numbers);
      expect(game.checkFinalRoll()).toEqual(5);
    });

  });


});
