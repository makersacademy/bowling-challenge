
$(document).ready(function(){

    scorer = new Scorer();

    markerSelect = function() {
      return "#marker" + String(scorer.currentFrame);
    }
    subSelect = function() {
      return "#sub" + String(scorer.currentFrame + 1);
    }
    frameSelect = function() {
      return "#frame" + String(scorer.currentFrame + 1)
    }
    isSpare = function() {
      if (scorer.scoreOfCurrentFrame() === 10) {
        return true;
      }
    }

    $('#0').click(function() {
        scorer.insert(0);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("0")
        }
        else {
          $(frameSelect()).text("0")
        }
        $(markerSelect()).text(scorer.totalScore())
        
    });

    $('#1').click(function() {
        scorer.insert(1);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("1")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("1")
        }
        $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#2').click(function() {
        scorer.insert(2);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("2")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("2")
        }
        $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#3').click(function() {
        scorer.insert(3);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("3")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("3")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#4').click(function() {
        scorer.insert(4);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("4")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("4")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#5').click(function() {
        scorer.insert(5);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("5")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("5")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#6').click(function() {
        scorer.insert(6);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("6")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("6")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#7').click(function() {
        scorer.insert(7);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("7")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("7")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#8').click(function() {
        scorer.insert(8);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("8")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("8")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#9').click(function() {
        scorer.insert(9);
        if ($(subSelect()).is(':empty')) {
          $(subSelect()).text("9")
        }
        else if (isSpare()) {
          $(frameSelect()).text("/")
        }
        else {
          $(frameSelect()).text("9")
        }
          $(markerSelect()).text(scorer.totalScore())
       
    });

    $('#10').click(function() {
        scorer.insert(10);
        $(frameSelect()).text("X")
          $(markerSelect()).text(scorer.totalScore()) 
    });

});
