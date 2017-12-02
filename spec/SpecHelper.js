    function rollSpare(game) {
        game.scoreRoll(0, 0, 6);
        game.scoreRoll(0, 1, 4);
    };

    function rollStrike(game) {
        game.scoreRoll(0, 0, 10);
    };

    function rollStandardSecondFrame(game) {
        game.scoreRoll(1, 0, 3);
        game.scoreRoll(1, 1, 4);
    };

    function rollStandardFirstFrame(game) {
        game.scoreRoll(0, 0, 9);
        game.scoreRoll(0, 1, 0);
    };

    function rollPerfectGame(game) {
        for (i = 0; i < 11; i++) {
            game.scoreRoll(i, 0, 10);
        };
    };