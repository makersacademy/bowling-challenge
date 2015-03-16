var scorecard = new Scorecard();


$("#0").click(function() {
  scorecard.addPoints(0);
  updateAllScores();
});

$("#1").click(function() {
  scorecard.addPoints(1);
  updateAllScores();
});

$("#2").click(function() {
  scorecard.addPoints(2);
  updateAllScores();
});

$("#3").click(function() {
  scorecard.addPoints(3);
  updateAllScores();
});

$("#4").click(function() {
  scorecard.addPoints(4);
  updateAllScores();
});

$("#5").click(function() {
  scorecard.addPoints(5);
  updateAllScores();
});

$("#6").click(function() {
  scorecard.addPoints(6);
  updateAllScores();
});

$("#7").click(function() {
  scorecard.addPoints(7);
  updateAllScores();
});

$("#8").click(function() {
  scorecard.addPoints(8);
  updateAllScores();
});

$("#9").click(function() {
  scorecard.addPoints(9);
  updateAllScores();
});

$("#strike").click(function() {
  scorecard.addPoints(10);
  updateAllScores();
});

$("#spare").click(function() {
  scorecard.addPoints(scorecard.pointsNeededForSpare());
  updateAllScores();
});

updateFrame1 = function() {
  $("#frame1-1").text(function() {
    return scorecard.frames[0][0];
  });
  $("#frame1-2").text(function() {
    return scorecard.frames[0][1];
  });
  $("#frame1").text(function() {
    return scorecard.frames[0][0] + scorecard.frames[0][1];
  });
};

updateFrame2 = function() {
  $("#frame2-1").text(function() {
    return scorecard.frames[1][0];
  });
  $("#frame2-2").text(function() {
    return scorecard.frames[1][1];
  });
  $("#frame2").text(function() {
    return scorecard.frames[1][0] + scorecard.frames[1][1];
  });
};

updateFrame3 = function() {
  $("#frame3-1").text(function() {
    return scorecard.frames[2][0];
  });
  $("#frame3-2").text(function() {
    return scorecard.frames[2][1];
  });
  $("#frame3").text(function() {
    return scorecard.frames[2][0] + scorecard.frames[2][1];
  });
};

updateFrame4 = function() {
  $("#frame4-1").text(function() {
    return scorecard.frames[3][0];
  });
  $("#frame4-2").text(function() {
    return scorecard.frames[3][1];
  });
  $("#frame4").text(function() {
    return scorecard.frames[3][0] + scorecard.frames[3][1];
  });
};

updateFrame5 = function() {
  $("#frame5-1").text(function() {
    return scorecard.frames[4][0];
  });
  $("#frame5-2").text(function() {
    return scorecard.frames[4][1];
  });
  $("#frame5").text(function() {
    return scorecard.frames[4][0] + scorecard.frames[4][1];
  });
};

updateFrame6 = function() {
  $("#frame6-1").text(function() {
    return scorecard.frames[5][0];
  });
  $("#frame6-2").text(function() {
    return scorecard.frames[5][1];
  });
  $("#frame6").text(function() {
    return scorecard.frames[5][0] + scorecard.frames[5][1];
  });
};

updateFrame7 = function() {
  $("#frame7-1").text(function() {
    return scorecard.frames[6][0];
  });
  $("#frame7-2").text(function() {
    return scorecard.frames[6][1];
  });
  $("#frame7").text(function() {
    return scorecard.frames[6][0] + scorecard.frames[6][1];
  });
};

updateFrame8 = function() {
  $("#frame8-1").text(function() {
    return scorecard.frames[7][0];
  });
  $("#frame8-2").text(function() {
    return scorecard.frames[7][1];
  });
  $("#frame8").text(function() {
    return scorecard.frames[7][0] + scorecard.frames[7][1];
  });
};

updateFrame9 = function() {
  $("#frame9-1").text(function() {
    return scorecard.frames[8][0];
  });
  $("#frame9-2").text(function() {
    return scorecard.frames[8][1];
  });
  $("#frame9").text(function() {
    return scorecard.frames[8][0] + scorecard.frames[8][1];
  });
};

updateFrame10 = function() {
  $("#frame10-1").text(function() {
    return scorecard.frames[9][0];
  });
  $("#frame10-2").text(function() {
    return scorecard.frames[9][1];
  });
  $("#frame10-3").text(function() {
    return scorecard.frames[9][2];
  });
  $("#frame10").text(function() {
    return scorecard.frames[9][0] + scorecard.frames[9][1] + scorecard.frames[9][2];
  });
};


updateTotalScore = function() {
  $("#totalscore").text(function() {
    return scorecard.calculateTotalScore();
  });
};

updateAllScores = function() {
  updateTotalScore();
  updateFrame1();
  updateFrame2();
  updateFrame3();
  updateFrame4();
  updateFrame5();
  updateFrame6();
  updateFrame7();
  updateFrame8();
  updateFrame9();
  updateFrame10();
};