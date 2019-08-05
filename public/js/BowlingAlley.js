function BowlingAlley() {
    this.round = 0;
    this.sum1 = 0;
    this.sum2 = 0;
    this.spareFlag = false;
    this.strikeFlag = false;
    this.score = 0;
    this._defaultPins = 10;
    this.pins = this._defaultPins;
    this.frameCount = 0;
    this.getScore = function() {
        return this.score;
    };

    this.player;
    this.randPinHit = function() {
       var rand =  Math.floor(Math.random() * this.pinsCount() + 1);
       return rand;
    };

    this.isStrike = function() {
      if(this.pins == 0 && this.frameCount == 1) {
        this.sum2 = 0;
        this.strikeFlag = true;
        console.log("Its's a strike!");
        this.frameCount = 4;
      }
    };

    this.calculator = function() {
      var a = this.sum1;
      var b = this.sum2;
      if(this.strikeFlag) {
        this.bonusScore(a, b);
        console.log("Strke Bonus Added");
      } else if (this.spareFlag) {
        this.bonusScore(a, 0);
        console.log("Spare Bonus Added");
      }
      this.clearBonus();
    }

    this.bonusScore = function(a, b) {
      var points = a + b;
      this.player.getFrameRecord()[(this.round-1)].bonusScore = points;
    };

    this.isSpare = function() {
      if(this.pins == 0 && this.frameCount == 2) {
        this.spareFlag = true;
        console.log("Its's a spare!");
        this.frameCount = 3;

      }
    };

    this.isBonus = function() {
      if(this.strikeFlag) {
        this.player.getFrameRecord()[this.round].bonus = this.strikeFlag;
      } else if(this.spareFlag) {
        this.player.getFrameRecord()[this.round].bonus = this.spareFlag;

      }
    }

    this.lastBonus = function() {
      if(this.player.getFrameRecord()[this.round-1].bonus) {
        this.calculator();
      }
    }

    this.clearBonus = function() {
      this.strikeFlag = false;
      this.spareFlag = false;
    }

    this.pinsCount = function() {
        return this.pins
    };

    this.pinHit = function() {
        this.pins = this._defaultPins;
        // this.spareFlag || this.strikeFlag ? this.calculator() : console.log("No bonus yet");
        while(this.frameCount != 3) {
            this.frameCount += 1;
            if(this.frameCount == 1) {
                var frameOne = this.randPinHit();  //number of pins knocked down
                this.pins -= frameOne; //number of pins remaining
                this.sum1 = frameOne;
                console.log(frameOne, "we have these many pins left: ", this.pinsCount());
                this.isStrike();
            } else if(this.frameCount == 2) {
                var frameTwo = this.randPinHit();
                this.pins -= frameTwo;
                this.sum2 = frameTwo;
                console.log(frameTwo, "we have these many pins left: ", this.pinsCount());
                console.log("Pins Left: ", this.pins);
                this.isSpare();
            }
        }
        this.round > 0 ? this.lastBonus() : console.log("...");

        this.player.getFrame(frameOne, frameTwo);
        this.isBonus();
        this.player.getFrameRecord();
        this.frameCount = 0;
        this.round += 1;
    }
}
