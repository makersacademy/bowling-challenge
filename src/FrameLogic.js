_isfirstBowlInFrame = function(bowlsTrackerObject) {
  return (bowlsTrackerObject.bowlsLeft % 2 != 0);
};

_isFinalFrame = function(bowlsTrackerObject) {
  return (bowlsTrackerObject.bowlsLeft <= 3);
};
