function Roll() {
  this.pinfall = 0;
}

Roll.prototype = {
    increasePinfall: function() {
      if (this.pinfall < 10) this.pinfall++;
    },

    decreasePinfall: function() {
      if (this.pinfall > 0) this.pinfall--;
    }
}
