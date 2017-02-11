function oneThrowGame() {
    var game1 = new Game;
    game1.throwBall();
    return game1.frames;
}

function scoreTwelve() {
    
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(4);
    for(var i = 0; i < 3; i++) {
        game.throwBall();
    }
    return game.frames;
}

function scoreTwentyTwo() {
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(10);
    game.throwBall();
    shot.bowl.and.returnValue(3);
    twoThrows(game);
    return game.frames;
}

function scoreTwentyThree() {
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(5);
    for(var i = 0; i < 3; i++) {
        game.throwBall();
    }
    shot.bowl.and.returnValue(3);
    game.throwBall();
    return game.frames;
}
