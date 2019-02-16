// Calls the appropriate function at each point in the game
// Retains and updates score table: .frames
function Game () {
    this.frames = {}
}

Game.prototype.begin = function(players) {
    for (i = 0; i < players.length; i++) {
        this.frames[players[i]] = []
        for (f = 0; f < 10; f++) {
            this.frames[players[i]].push(new Frame())
        }
    }
}

/*
    Display frame function
        Have this here instead of in Interface as window.onload = function() {} wrapping Interface breaks Jasmine
    Take an array of throw scores and return an expressive string
*/
Game.prototype.presentFrame = function(frameThrows) {
    if (frameThrows[0] === 10) { return 'X' }
    else if ( frameThrows[0] + frameThrows[1] === 10 ) { return '/' }
    else if ( frameThrows.length === 2 ) { return frameThrows[0] + ',' + frameThrows[1] }
    else if ( frameThrows.length === 1 ) { return frameThrows[0] + ',' }
    else { return ',' }
}

Game.prototype.currentBowler = function() {
    return Object.keys(this.frames)[0]
}

/*
    Add scores to each frame - receiveThrow(0through10)
    Know when to give the frame to the next player
    Pass these scores to the gameResults data object
*/