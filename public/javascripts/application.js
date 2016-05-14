$(document).ready(function(){
    // updateRollDislay(1,0,"X");
    // updateRollDislay(0,1,"8");
    // updateGameScoreDisplay(0);
    var omar = new Player("Omar");
    var g = new Game(omar);
    buttons(0);
    // displayButtons(s.state, s.firstBallInFrame);
    $("#state").text(g.player.score.state);
    $("#frame-number").text(g.frameNumber());
    $("#balls-rolled").text(g.player.score.rolls);
    $("#rolling-frame").text(g.player.score.rollingFrame);
    $("#totalScore").text(g.player.score.totalScore);
    $("#first-ball").text(g.player.score.firstBallInFrame);
    $("#game-over").text(g.gameIsOver());
    $(":button").click(function(){
        g.player.score.roll(Number($(this).val()));
        // displayButtons(s.state, s.firstBallInFrame);
        $("#state").text(g.player.score.state);
        $("#frame-number").text(g.frameNumber());
        $("#balls-rolled").text(g.player.score.rolls);
        $("#rolling-frame").text(g.player.score.rollingFrame);
        $("#totalScore").text(g.player.score.totalScore);
        $("#first-ball").text(g.player.score.firstBallInFrame);
        $("#game-over").text(g.gameIsOver());
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
//     if(scoresheet.frames.length === 0 || scoresheet.currFrameOver()) {
//         frame = new Frame;
//     scoresheet.addFrame(frame);
//     update(pinsKnocked, 1);
//     } else {
//         update(pinsKnocked, 2);
//     }
//     gameOver();
// }

// function updateButtons(pinsKnocked, currFrame) {
//   if(scoresheet.currFrameOver() || (scoresheet.frames.length === scoresheet.framesLimit && !(scoresheet.frames[scoresheet.framesLimit-1].rolls.length === 1 && scoresheet.frames[scoresheet.framesLimit-1].rolls[0] < scoresheet.frames[currFrame].pins))) {
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