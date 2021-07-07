class Spare {
    constructor(id, value) {
        this._id = id;
        this._score1 = value;
        this._score2 = null;
    }

    getId() {
        return this._id
    }

    updateScore(value) {
        this._score2 = value;
    }

    total() {
        return this._score1 + this._score2
    }
}