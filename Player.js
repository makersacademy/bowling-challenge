class player {
    constructor() {
        this.player = { 'PlayerName' : "" , "PlayberNumberofWining": 0}
    }

    add(playerName) {
        this.player['PlayerName'] = playerName
    }
    playerStatus() {
        return this.player
    }
}

module.exports.player = player