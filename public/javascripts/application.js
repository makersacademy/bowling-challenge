$(document).ready(function(){
    // updateRollDislay(1,0,"X");
    // updateRollDislay(0,1,"8");
    // updateGameScoreDisplay(0);
    var scorer = new Scorer();
    var game = new Game(scorer);
    buttons(0);
    // displayButtons(s.state, s.firstBallInFrame);
    $("#state").text(game._scorer.state);
    $("#frame-number").text(game.frameNumber());
    $("#balls-rolled").text(game._scorer.rolls);
    $("#rollingame-frame").text(game._scorer.rollingameFrame);
    $("#totalScore").text(game._scorer.totalScore);
    $("#first-ball").text(game._scorer.firstBallInFrame);
    $("#gameame-over").text(game.isOver());
    $(":button").click(function(){
        game._scorer.roll(Number($(this).val()));
        // displayButtons(s.state, s.firstBallInFrame);
        $("#state").text(game._scorer.state);
        $("#frame-number").text(game.frameNumber());
        $("#balls-rolled").text(game._scorer.rolls);
        $("#rollingame-frame").text(game._scorer.rollingameFrame);
        $("#totalScore").text(game._scorer.totalScore);
        $("#first-ball").text(game._scorer.firstBallInFrame);
        $("#gameame-over").text(game.isOver());
    });
});

function displayButtons(state, b) {
    if (state == "BALL_2" || state == "STRIKE_2") {
        buttons(b);
    } else {
        buttons(0);    
    }
}

function buttons(pins) {
    var buttonHTML = '';
    for (var i = 0; i < (11 - pins); i++) {
        // buttonHTML += '<button type="button" class="btn btn-primary" onclick="press(' + i + ')">' + i + '</button>';
        buttonHTML += '<button type="button" class="btn-round" value="' + i + '">' + i + '</button>';
    }
    console.log(buttonHTML);
    $('#buttons').html(buttonHTML);
}

// function press(pinsKnocked) {
//     if(scoresheet.frames.lengameth === 0 || scoresheet.currFrameOver()) {
//         frame = new Frame;
//     scoresheet.addFrame(frame);
//     update(pinsKnocked, 1);
//     } else {
//         update(pinsKnocked, 2);
//     }
//     gameameOver();
// }

// function updateButtons(pinsKnocked, currFrame) {
//   if(scoresheet.currFrameOver() || (scoresheet.frames.lengameth === scoresheet.framesLimit && !(scoresheet.frames[scoresheet.framesLimit-1].rolls.lengameth === 1 && scoresheet.frames[scoresheet.framesLimit-1].rolls[0] < scoresheet.frames[currFrame].pins))) {
//     buttons(0);
//   } else {
//     buttons(pinsKnocked);
//   }
// }

// position [0 or 1]
// displayContent ["/", "X" or number]
function updateRollDislay(position, currFrame, displayContent) {
    $('#score-table tr:eq(1) td:eq(' + ((currFrame*2)+position) + ')').html(displayContent);
}

function updateGameScoreDisplay(currFrame) {
    $('#score-table tr:eq(2) td:eq(' + currFrame + ')').html("10");
}