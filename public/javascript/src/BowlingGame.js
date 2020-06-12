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

    getScore() {
        $.get('/score', function(data) {
            var scores = json.parse(data);
            callback(scores);
        })
    }

    getSpares() {
        return this._spares
    }

    getStrikes() {
        return this._strikes
    }

    spare(value, callback) {
        this._spares.push(new Spare(this.getId(), value));
    }

    strike(callback) {
        this._strikes.push(new Strike(this.getId()));
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

