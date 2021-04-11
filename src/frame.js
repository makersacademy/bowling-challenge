function Frame (seqNum) {
        this.rolls = [];
        this.seqNum = seqNum || 0;

    Frame.prototype.totalRolls = function() {
        return (this.rolls.length);
    };
    Frame.prototype.storeRoll = function(roll) {
        return (this.rolls.push(roll));
    };
};