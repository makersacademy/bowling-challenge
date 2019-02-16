// Have scripts contained execute only when window has finished loading all
window.onload = function() {

    // Instantiate constructors
    bowlers = new Bowlers()
    game = new Game()

    /*
        When user enters name and clicks submit
            Add bowler to list of bowlers
            Clear input field
            Update the list-of-bowlers to show each bowler
    */
    document.getElementById('bowler-input-submit').addEventListener('click', function(event) {
        event.preventDefault();
        let bowler = document.getElementById('bowler-input-field').value
        bowlers.add(bowler)
        document.getElementById('bowler-input-field').value = ''
        document.getElementById('list-of-bowlers').innerText = bowlers.all.join(" ")
    })

    /*
        When user clicks Begin Game
            Hide get-bowlers section
            Show play-game section
            Begin game with players(setting up frames)
            Create frames display
    */
    document.getElementById('begin-game').addEventListener('click', function(event) {
        document.getElementById('get-bowlers').style.display = 'none';
        document.getElementById('play-game').style.display = 'block';
        // Begin game with all bowlers
        game.begin(bowlers.all)
        // frameRows becomes array of html strings each of which can display a row in frames table
        let frameRows = []
        for(i = 0; i < Object.keys(game.frames).length; i++) {
            let bowler = Object.keys(game.frames)[i]
            let frames = game.frames[bowler]
            frameRows.push(
                '<tr>' +
                    '<td id="name-' + bowler + '">' + bowler + '</td>' +
                    '<td id="' + bowler + '-f01">' + game.presentFrame(frames[0].throws) + '</td>' +
                    '<td id="' + bowler + '-f02">' + game.presentFrame(frames[1].throws) + '</td>' +
                    '<td id="' + bowler + '-f03">' + game.presentFrame(frames[2].throws) + '</td>' +
                    '<td id="' + bowler + '-f04">' + game.presentFrame(frames[3].throws) + '</td>' +
                    '<td id="' + bowler + '-f05">' + game.presentFrame(frames[4].throws) + '</td>' +
                    '<td id="' + bowler + '-f06">' + game.presentFrame(frames[5].throws) + '</td>' +
                    '<td id="' + bowler + '-f07">' + game.presentFrame(frames[6].throws) + '</td>' +
                    '<td id="' + bowler + '-f08">' + game.presentFrame(frames[7].throws) + '</td>' +
                    '<td id="' + bowler + '-f09">' + game.presentFrame(frames[8].throws) + '</td>' +
                    '<td id="' + bowler + '-f10">' + game.presentFrame(frames[9].throws) + '</td>' +
                '</tr>'
            )
        }
        document.getElementById('frames').innerHTML = "<table>" + frameRows.join("") + "</table>";
        /*
            Set innerHtml of #frames current player's name (have Game function figure this out)
        */
    })
}