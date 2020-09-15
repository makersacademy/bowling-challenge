$(document).ready(function() {

    var scorecard = new Scorecard();
    var idx1 = 1
    var idx2 = 2
    var tidx = 1
    var fidx = 0

    $('#btn0').click(function() {
        scorecard.bowl(0);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn0').prop('disabled', true);
    });

    $('#btn11').click(function() {
        scorecard.bowl(0);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn1').click(function() {
        scorecard.bowl(1);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn1').prop('disabled', true);
    });

    $('#btn12').click(function() {
        scorecard.bowl(1);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn2').click(function() {
        scorecard.bowl(2);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn2').prop('disabled', true);
    });

    $('#btn13').click(function() {
        scorecard.bowl(2);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn3').click(function() {
        scorecard.bowl(3);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn3').prop('disabled', true);
    });

    $('#btn14').click(function() {
        scorecard.bowl(3);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn4').click(function() {
        scorecard.bowl(4);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn4').prop('disabled', true);
    });

    $('#btn15').click(function() {
        scorecard.bowl(4);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn5').click(function() {
        scorecard.bowl(5);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn5').prop('disabled', true);
    });

    $('#btn16').click(function() {
        scorecard.bowl(5);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn6').click(function() {
        scorecard.bowl(6);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn6').prop('disabled', true);
    });

    $('#btn17').click(function() {
        scorecard.bowl(6);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn7').click(function() {
        scorecard.bowl(7);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn7').prop('disabled', true);
    });

    $('#btn18').click(function() {
        scorecard.bowl(7);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn8').click(function() {
        scorecard.bowl(8);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn8').prop('disabled', true);
    });

    $('#btn19').click(function() {
        scorecard.bowl(8);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn9').click(function() {
        scorecard.bowl(9);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#btn9').prop('disabled', true);
    });

    $('#btn20').click(function() {
        scorecard.bowl(9);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    $('#btn10').click(function() {
        scorecard.bowl(10);
        $('#bowl' + idx1).text(scorecard.frames[fidx].firstBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        $('#bowl' + idx2).text('-');
        $('#btn10').prop('disabled', true);
    });

    $('#btn21').click(function() {
        scorecard.bowl(10);
        $('#bowl' + idx2).text(scorecard.frames[fidx].secondBall());
        $('#total' + tidx).text(scorecard.frames[fidx].scoreTotal());
        gameTotal();
        resetButton();
        nextFrame();
    });

    function resetButton() {
        $(':button').prop('disabled', false);
    }

    function gameTotal() {
        $('#gametotal').text(scorecard.calculateScore());
    }

    function nextFrame() {
        if (scorecard.lastFrame().frameCompleted() === true) {
            $('#bowl1').attr("id", "#bowl3");
            $('#bowl2').attr("id", "#bowl4");
            $('#total1').attr("id", "#total2");
            idx1 += 2;
            idx2 += 2;
            tidx += 1;
            fidx += 1;
        }
    }

})