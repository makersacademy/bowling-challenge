/* jshint undef: true, unused: true */
/* globals Frame */

Frame = function(rolls) { 'use strict';
  this._rolls = rolls;
}

Frame.prototype = {
    total: function() {
      return this._rolls.reduce(function(a,b){
        return a + b;
      })
    }
}
