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

    Present [1] through [9] as "1/" through "9/"
    Present [10] as "X"
    Present [0,9] through [9, 0] as "0/9" through "9/0"
    Present [0, 10] through [9,1] as "/"
*/
Game.prototype.presentFrame = function(frameThrows) {
    if (frameThrows == [10]) { return 'X' }
}

/*
    Add scores to each frame
    Know when to give the frame to the next player
    Pass these scores to the gameResults data object
*/