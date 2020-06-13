class BowlingGame {

    constructor() {
        this._id = 11
        this._strikes = []
        this._spares = []
    }

    getId() {
        return this._id.toString()
    }

    addScore(id, score, callback) {
        $.post('/score', { id: id, value: score }, callback)
    }

    getScore(callback) {
        $.get("/score", function(data) {
            var scores = JSON.parse(data)
            callback(scores);
        })
    }

    strikeScored(callback) {
        this.endOfTurn(10, callback);
        this.strike(callback)
        this.updateId('strike')
    }

    spareScored(value, callback) {
        this.endOfTurn(value, callback);
        this.spare(value, callback)
        this.updateId()
    }

    score(value, callback) {
        this.endOfTurn(value, callback);
        this.addScore(this.getId(), value, callback);
        this.updateId();
    }

    endOfTurn(value, callback) {
        if (this.checkSparesStrikes(this.getStrikes())) {
            this.strikesSparesUpdate(this.getStrikes(), value);
            var strikeScore = this.getStrikes()[0];
            if (strikeScore.getScore2()) {
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

    getSpares() {
        return this._spares
    }

    getStrikes() {
        return this._strikes
    }

    spare(value, callback) {
        var id = this.getId()
        this._spares.push(new Spare(id, value));
    }

    strikesSparesUpdate(array, value) {
        array.forEach( function(instance){
            instance.updateScore(value);
        })
    }

    strike(callback) {
        var id = this.getId()
        var strikeInstance = new Strike(id)
        this._strikes.push(strikeInstance);
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

    updateId(score = null) {
        if(score && this.getId().slice(-1) === '1') {
            this._id += 10
        } 
        else if (this.getId().slice(-1) === '2') {
            this._id += 9
        } else {
            this._id += 1
        }
    }

}

