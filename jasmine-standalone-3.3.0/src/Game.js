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
    Add scores to each frame
    Know when to give the frame to the next player
    Pass these scores to the gameResults data object
*/