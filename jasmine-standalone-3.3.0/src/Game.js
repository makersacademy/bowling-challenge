// Calls the appropriate function at each point in the game
// Retains and updates score table: .frames
function Game () {
    this.frames = {}
    this.currentFrameIndex = 0
}

Game.prototype.begin = function(players) {
    for (i = 0; i < players.length; i++) {
        this.frames[players[i]] = []
        for (f = 0; f < 10; f++) {
            this.frames[players[i]].push(new Frame())
        }
    }
}

Game.prototype.currentBowler = function() {
    return Object.keys(this.frames)[0]
}

Game.prototype.returnCurrentFrameIndex = function () {
    return this.currentFrameIndex
}

Game.prototype.takeThrow = function(pinsBowled) {
    this.frames[this.currentBowler()][this.returnCurrentFrameIndex()].addScore(pinsBowled)
}

/*
    Display frame function
        This here instead of in Interface as window.onload = function() {} wrapping Interface breaks Jasmine
    Take an array of throw scores and return a legible string
*/
Game.prototype.presentThrows = function(frameThrows) {
    if (frameThrows[0] === 10) { return 'X' }
    else if ( frameThrows[0] + frameThrows[1] === 10 ) { return '/' }
    else if ( frameThrows.length === 2 ) { return frameThrows[0] + ',' + frameThrows[1] }
    else if ( frameThrows.length === 1 ) { return frameThrows[0] + ',' }
    else { return ',' }
}

Game.prototype.presentCurrentFrame = function () {
    return Object.keys(this.frames)[0] + '-f' + 0
}

