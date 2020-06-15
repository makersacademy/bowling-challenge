class BowlingGame {

    constructor() {
        this._id = 11
        this._strikes = []
        this._spares = []
        this._finalFrameStrikeScored = false
        this._finalFrameStrikeScored2 = false
    }
    // get functions
    getId() {
        return this._id.toString()
    }

    getIdInt() {
        return this._id
    }

    getSpares() {
        return this._spares
    }

    getStrikes() {
        return this._strikes
    }

    getfinalFrameStrikeScored() {
        return this._finalFrameStrikeScored
    }

    getfinalFrameStrikeScored2() {
        return this._finalFrameStrikeScored2
    }
    // link functions to sinatra
    addScore(id, score, callback) {
        $.post('/score', { id: id, value: score }, callback)
    }

    getScore(callback) {
        $.get("/score", function(data) {
            var scores = JSON.parse(data)
            callback(scores);
        })
    }
    // scoring functions
    strikeScored(callback) {
        this.endOfTurn(10, callback);
        this.strike()
        this.getScore(callback)
        this.finalFrameId('strike')
    }

    spareScored(value, callback) {
        this.endOfTurn(value, callback);
        this.spare(value)
        if (this._id === 103) {
            console.log(value)
            this.finalChecks(callback)
        }
        this.getScore(callback)
        this.finalFrameId()
    }

    score(value, callback) {
        this.endOfTurn(value, callback);
        this.addScore(this.getId(), value, callback);
        this.updateId();
    }

    spare(value) {
        var id = this.getId()
        this._spares.push(new Spare(id, value));
    }

    strike() {
        var id = this.getId()
        var strikeInstance = new Strike(id)
        this._strikes.push(strikeInstance);
    }
    // end of turn functions
    strikesSparesUpdate(array, value) {
        array.forEach( function(instance){
            instance.updateScore(value);
        })
    }

    checkSparesStrikes(array) {
        if (array.length === 0) {
            return false
        } else {
            return true
        }
    }

    deleteFirstValue(array) {
        array.shift()
    }

    endOfTurn(value, callback) {
        if (this.checkSparesStrikes(this.getStrikes())) {
            this.strikesSparesUpdate(this.getStrikes(), value);
            var strikeScore = this.getStrikes()[0];
            if (strikeScore.getScore2() || strikeScore.getScore2() === 0) {
                this.addScore(strikeScore.getId(), strikeScore.total(), callback);
                this.deleteFirstValue(this.getStrikes())
            }
        };
        if (this.checkSparesStrikes(this.getSpares())) {
            this.strikesSparesUpdate(this.getSpares(), value);
            var spareScore = this.getSpares()[0];
            this.addScore(spareScore.getId(), spareScore.total(), callback);
            this.deleteFirstValue(this.getSpares())
        };
    }

    updateId(score = null) {
        if (this._finalFrameStrikeScored) {
            this._id += 1
        }
        else if(score && this.getId().slice(-1) === '1') {
            this._id += 10
        } 
        else if (this.getId().slice(-1) === '2') {
            this._id += 9
        } else {
            this._id += 1
        }
    }
    // end of game functions
    finalTotal(array) {
       return array.reduce((a, b) => a + b, 0)
    }

    finalFrameId(value = null) {
        if (this._id > 100){
            this._id += 1
        } else {
            this.updateId(value)
        }
    }

    clear() {
        this._strikes = []
        this._spares = []
    }

    finalFrameStrike() {
        this._finalFrameStrikeScored = true
    }

    finalFrameStrike2() {
        this._finalFrameStrikeScored = true
    }
    // new game functions
    reset() {
        this._id = 11
        this._finalFrameStrikeScored = false
        this._finalFrameStrikeScored2 = false
        this.clear()
    }

    finalChecks(callback) {
            this.strikesSparesUpdate(this.getSpares(), 0);
            var spareScore = this.getSpares()[0];
            this.addScore(spareScore.getId(), spareScore.total(), callback);
    }

}

