'use strict';

function Bowling() {

};

Bowling.prototype.standardFrame = function(r1, r2) {
  return r1 + r2;
};

Bowling.prototype.stricke = function () {
  return 10;
};

Bowling.prototype.spare = function(r1, r2) {
  return r1 + r2;
};
