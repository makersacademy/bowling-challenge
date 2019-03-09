function Frame(finalFrame) {
    this.bowl1 = 0;
    this.bowl2 = 0;
    this.bonus = 0;
    this.bonusesToCome = 0;
    this.secondBowlAllowed = true;
    this.finalFrame = finalFrame;
};

Frame.prototype.getTotal = function() {
    return this.bowl1 + this.bowl2 + this.bonus;
};

Frame.prototype.firstBowl = function(pins) {
    this.bowl1 = pins;
    this.checkIfStrike();
};

Frame.prototype.secondBowl = function(pins) {
    this.bowl2 = pins;
    this.checkIfSpare();
};

Frame.prototype.checkIfStrike = function() {
    if (this.bowl1 == 10) {
        this.bonusesToCome = 2;
        if (!this.finalFrame) {
            this.secondBowlAllowed = false;
        }
    }
};

Frame.prototype.checkIfSpare = function() {
    if (this.bowl1 + this.bowl2 === 10) {
        this.bonusesToCome = 1;
    } 
};

Frame.prototype.addBonus = function(pins) {
    if (this.bonusesToCome > 0) {
        this.bonus += pins;
        this.bonusesToCome -= 1;
    }
};

Frame.prototype.isAwaitingBonus = function() {
    if (this.bonusesToCome > 0) {
        return true
    } else {
        return false
    }
};