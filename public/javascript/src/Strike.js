class Strike {
    constructor(id) {
        this._id = id;
        this._score1 = null;
        this._score2 = null;
    }

    getId() {
        return this._id
    }

    getScore2() {
        return this._score2
    }

    updateScore(value) {
        if (this._score1 || this._score1 === 0) {
            this._score2 = value;
        } else {
            this._score1 = value;
        }
    }

    total() {
        return this._score1 + this._score2 + 10
    }
}