    function rollSpare(game) {
        game.roll(6);
        game.roll(4);
    };

    function rollStrike(game) {
        game.roll(10);
        rollHelper(18, 1, game);
    };

    function rollStandardFrame(game) {
        game.roll(4);
        game.roll(2);
        rollHelper(18, 0, game);
    };

    function standardGame(game) {
        rollHelper(20, 3, game);
    };

    function perfectGame(game) {
        rollHelper(12, 10, game);
    };

    function gutterGame(game) {
        rollHelper(20, 0, game);
    };

    function rollHelper(numberOfRolls, numberOfPins, game) {
        for (i = 0; i < numberOfRolls; i++) {
            game.roll(numberOfPins);
        };
    };