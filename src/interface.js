$(function () {
    var game = new Game();
    var frame = 1;
    var lastFrame = 10;
    //Setup roll 1 drop down list
    $('#bonus-roll').hide();
    for (i = 0; i < 11; i++) {
        $("#roll1").append($("<option>", {
            value: i,
            text: i
        }));
        $("#roll2").append($("<option>", {
            value: i,
            text: i
        }));
    }
    

    $('#bonus-roll').click(function (event) {
        
        var firstBonusRoll = parseInt($("#roll1").val());
        var secondBonusRoll = parseInt($("#roll2").val());
    });

    $("#roll").click(function (event) {
        var firstRoll = parseInt($("#roll1").val());
        var secondRoll = parseInt($("#roll2").val());
        
        if (frame === 10 && firstRoll !== 10 && firstRoll + secondRoll === 10) {
        $('#bonus-roll').show();
    
            // lastFrame = 11;
            //if roll spare in frame 10 1 bonus ball
        }
        if (frame === 10 && firstRoll === 10) {
        $('#bonus-roll').show();
    
            // lastFrame = 11;
            //if roll strike in frame 10 2 bonus balls
        }
        if (frame <= lastFrame) {
            game.roll(firstRoll);
            game.roll(secondRoll);
            $("#scoretable").append($("<tr><td>" + frame + "</td><td>" + firstRoll + "</td><td>" + secondRoll + "</td></tr>"))
            
        } else {
            $("#score").text(game.score());
        }
        frame++;
    });

    // when roll 1 is 10 lock roll 2 to 0
    $("#roll1").change(function () {
        console.log($("#roll1").val());
        if ($("#roll1").val() == 10) {
            $("#roll2").val(0);
            $("#roll2").prop("disabled", true);
        } else {
            $("#roll2").prop("disabled", false);
        };
    });
    $("#roll").click(function () {
        $("#ball").animate({
            //   opacity: 0.25,
            left: "+=75"
            //   height: "toggle"
        }, 300, function () {
            // Animation complete.
        });
    })

    var rotation = function () {
        $("#ball").rotate({
            angle: 0,
            animateTo: 360,
            callback: rotation
        });
    }
    rotation();


});