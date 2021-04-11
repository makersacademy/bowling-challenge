function Frame (seqNum) {
        this.rolls = [];
        this.frames = [];
        this.seqNum = seqNum || 0;

    Frame.prototype.totalRolls = function() {
        // if (this.rolls.length === 3) {
        //     this.rolls.splice(0, this.rolls.length)
        // }
        return (this.rolls.length);
    };
    Frame.prototype.storeRoll = function(roll) {
        return (this.rolls.push(roll));
    };

    Frame.prototype.newFrame = function(updateFrame) {
        if (this.rolls.length === 2) {
            this.rolls.splice(0, this.rolls.length)
            this.frames.push(updateFrame)
        }
        return (this.rolls.length);
    };

    Frame.prototype.maxFrames = function() {
        if (this.frames.length === 10) {
            return (this.frames.length);
        }
    };
};