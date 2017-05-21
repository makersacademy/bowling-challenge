// Array of Hashes
var scorecard = [
  {name: "First Frame", status: "open", scores:[]},
  {name: "Second Frame", status: "pending", scores:[]},
  {name: "Third Frame", status: "pending", scores:[]},
  {name: "Fourth Frame", status: "pending", scores:[]},
  {name: "Fifth Frame", status: "pending", scores:[]},
  {name: "Sixth Frame", status: "pending", scores:[]},
  {name: "Seventh Frame", status: "pending", scores:[]},
  {name: "Eight Frame", status: "pending", scores:[]},
  {name: "Ninth Frame", status: "pending", scores:[]},
  {name: "Final Frame", status: "pending", scores:[]}
];

// Give points to open frames
enterBowl = function(pinsKnockedDown) {
  var points = pinsKnockedDown;
  scorecard.forEach(function(frame){
    if (frame.status === "open") {
      frame.scores.push(points);
    };
  });
};

// Determine whether new frame should be opened for scoring
function _isNewFrameOpenRequired(pinsObject, bowlsTrackerObject) {
  if (_isAStrike(pinsObject, bowlsTrackerObject) || _isASpare(pinsObject, bowlsTrackerObject) || _isARegularFrame(pinsObject, bowlsTrackerObject)) {
    return (true);
  } else {
    return (false);
  };
};

// Finds first frame that is pending and opens it
function findPendingFrame(callback) {
  var pendingFrame = scorecard.findIndex(function(frame) {
    pendingFrame = (frame.status == "pending");
    return pendingFrame;
  });
  callback(pendingFrame);
};

// Opens Frames as per Logic above
openFrames = function (pinsObject, bowlsTrackerObject) {
  if (_isNewFrameOpenRequired(pinsObject, bowlsTrackerObject)) {
    findPendingFrame(function(pendingFrame) {
      scorecard[pendingFrame].status = "open";
    });
  };
};

// Closes frames
closeFrames = function(pinsObject, bowlsTrackerObject) {
  var pinsObject = pinsObject;
  var bowlsTrackerObject = bowlsTrackerObject;
  scorecard.forEach(function(frame) {
    if ((frame.scores.length === 3) || ((frame.status === "open") && (_isARegularFrame(pinsObject, bowlsTrackerObject)))) {
      frame.status = "closed";
    };
  });
};

//Post score

scoreCardEntry = function (pinsKnockedDown, pinsObject, bowlsTrackerObject) {
  enterBowl(pinsKnockedDown);
  closeFrames(pinsObject, bowlsTrackerObject);
  openFrames(pinsObject, bowlsTrackerObject);
};
