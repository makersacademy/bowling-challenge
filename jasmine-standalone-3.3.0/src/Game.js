// Calls the appropriate function at each point in the game
// Retains and updates score table: .frames
function Game () {
    this.frames = {}
    // Indicate which 'Frame' the game is in. This term may have been misused.
    this.currentFrameIndex = 0
    this.bowlers
    this.currentBowlerIndex = 0
    // Indicate which turn the bowler is taking out of first and second in frame
    this.currentBowlersFrameIndex = 0
}

Game.prototype.begin = function(players) {
    for (i = 0; i < players.length; i++) {
        this.frames[players[i]] = []
        for (f = 0; f < 10; f++) {
            this.frames[players[i]].push(new Frame())
        }
    }
    this.bowlers = players
}

Game.prototype.currentBowler = function() {
    return this.bowlers[this.currentBowlerIndex]
}

Game.prototype.returnCurrentFrameIndex = function () {
    return this.currentFrameIndex
}

Game.prototype.takeThrow = function(pinsBowled) {
    // Add score to current frame for current bowler
    this.frames[this.currentBowler()][this.returnCurrentFrameIndex()].addScore(pinsBowled)

    /*
        if it's first throw
            if strike
                advance to next player
                    if next player is first player advance game to next frame
            else
                advance currentBowlersFrameIndex
        else it's second throw
            reset currentBowlersFrameIndex
            advance to next player
                if next player is first player advance game to next frame
    */
    if (this.currentBowlersFrameIndex === 0) {
        if (pinsBowled == '10') {
            this._advanceBowlerIndex()
            if (this.currentBowler() == this.bowlers[0]) { this.currentFrameIndex += 1 }
        }
        else { this.currentBowlersFrameIndex = 1 }
    }
    else {
        this.currentBowlersFrameIndex = 0
        this._advanceBowlerIndex()
        if (this.currentBowler() == this.bowlers[0]) { this.currentFrameIndex += 1 }
    }
}

/*
    Display frame function
        This here instead of in Interface as window.onload = function() {} wrapping Interface breaks Jasmine
    Take an array of throw scores and return a legible string
*/
Game.prototype.presentThrows = function(frameThrows) {
    if (frameThrows[0] == 10) { return 'X' }
    else if ( frameThrows[0] + frameThrows[1] == 10 ) { return '/' }
    else if ( frameThrows.length === 2 ) { return frameThrows[0] + ',' + frameThrows[1] }
    else if ( frameThrows.length === 1 ) { return frameThrows[0] + ',' }
    else { return ',' }
}

Game.prototype.presentCurrentFrame = function () {
    return Object.keys(this.frames)[0] + '-f' + 0
}

Game.prototype._advanceBowlerIndex = function() {
    if (this.currentBowlerIndex < this.bowlers.length - 1) { this.currentBowlerIndex ++ }
    else { this.currentBowlerIndex = 0 }
}