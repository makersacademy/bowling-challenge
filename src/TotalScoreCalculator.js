function TotalScoreCalculator() {
// Array of Hashes
this.scorecard = [
  {name: "First Frame", status: "open", scores:[], totalScore: null },
  {name: "Second Frame", status: "pending", scores:[], totalScore: null },
  {name: "Third Frame", status: "pending", scores:[], totalScore: null },
  {name: "Fourth Frame", status: "pending", scores:[], totalScore: null },
  {name: "Fifth Frame", status: "pending", scores:[], totalScore: null },
  {name: "Sixth Frame", status: "pending", scores:[], totalScore: null },
  {name: "Seventh Frame", status: "pending", scores:[], totalScore: null },
  {name: "Eight Frame", status: "pending", scores:[], totalScore: null },
  {name: "Ninth Frame", status: "pending", scores:[], totalScore: null },
  {name: "Final Frame", status: "pending", scores:[], totalScore: null }
];
var scorecard = this.scorecard;
this.currentScore = 0;
var currentScore = this.currentScore;

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
    if ((frame.scores.length === 3) || ((frame.status === "open") && (_isARegularFrame(pinsObject, bowlsTrackerObject)) && (frame.scores.length === 2))) {
      frame.status = "closed";
    };
  });
};

//Post score

scorecardEntry = function (pinsKnockedDown, pinsObject, bowlsTrackerObject) {
  enterBowl(pinsKnockedDown);
  closeFrames(pinsObject, bowlsTrackerObject);
  scorecardTotalScorer();
  scorecardTotalScorer();
  scorecardTotalScorer();
  if (!_isFinalFrame(bowlsTrackerObject)) {
    openFrames(pinsObject, bowlsTrackerObject);
  };
};

// Calculate current Total Score
scorecardTotalScorer = function () {
      scorecard.find(function(frame) {
        if (frame.status === "closed") {
          frame.totalScore = frame.scores.reduce(function(acc, val) {
            return acc + val;
          }, currentScore);
          frame.status = "scored";
        };
        currentScore = frame.totalScore;
      });
    };

}
