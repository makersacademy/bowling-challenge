class BowlingGame {

    constructor() {
        this._id = 11
    }

    getId() {
        return this._id.toString()
    }

    addScore(score, callback) {
        $.post('/score', { id: this.getId(), value: score }, callback)
    }

    getScore() {
        $.get('/score', function(data) {
            var scores = json.parse(data),
            callback(data);
        })
    }

}

