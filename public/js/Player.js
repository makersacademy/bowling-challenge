function Player(name) {
    this.name = name;
    this._score = 0;
    this._frameRecord = [];
    this.getFrame = function(f1 = 0, f2 = 0) {
        this._frameRecord.push({
            "frameOne": f1,
            "frameTwo": f2,
            "bonus": false,
            "bonusScore": 0
        });
    }
    this.getScore = function(score) {
        this._score = score + this._score;
        return this._score;
    };
    this.getFrameRecord = function() {
        return this._frameRecord;
    };
};
