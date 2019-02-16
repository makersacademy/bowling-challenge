// Have scripts contained execute only when window has finished loading all
window.onload = function() {

    // Instantiate constructors
    bowlers = new Bowlers()
    game = new Game()


    // Event responses
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
            Display frames
            Displayer current bowler name
    */
    document.getElementById('begin-game').addEventListener('click', function(event) {
        document.getElementById('get-bowlers').style.display = 'none';
        document.getElementById('play-game').style.display = 'block';
        // Begin game with all bowlers
        game.begin(bowlers.all)
        
        DisplayFrames()
        DisplayCurrentBowler()
    })

    // Helper functions
    function DisplayFrames() {
        // frameRows becomes array of html strings each of which can display a row in frames table
        let frameRows = []
        for(i = 0; i < Object.keys(game.frames).length; i++) {
            let bowler = Object.keys(game.frames)[i]
            let frames = game.frames[bowler]
            frameRows.push(
                '<tr>' +
                    '<td id="name-' + bowler + '">' + bowler + '</td>' +
                    '<td id="' + bowler + '-f0">' + game.presentThrows(frames[0].throws) + '</td>' +
                    '<td id="' + bowler + '-f1">' + game.presentThrows(frames[1].throws) + '</td>' +
                    '<td id="' + bowler + '-f2">' + game.presentThrows(frames[2].throws) + '</td>' +
                    '<td id="' + bowler + '-f3">' + game.presentThrows(frames[3].throws) + '</td>' +
                    '<td id="' + bowler + '-f4">' + game.presentThrows(frames[4].throws) + '</td>' +
                    '<td id="' + bowler + '-f5">' + game.presentThrows(frames[5].throws) + '</td>' +
                    '<td id="' + bowler + '-f6">' + game.presentThrows(frames[6].throws) + '</td>' +
                    '<td id="' + bowler + '-f7">' + game.presentThrows(frames[7].throws) + '</td>' +
                    '<td id="' + bowler + '-f8">' + game.presentThrows(frames[8].throws) + '</td>' +
                    '<td id="' + bowler + '-f9">' + game.presentThrows(frames[9].throws) + '</td>' +
                '</tr>'
            )
        }
        document.getElementById('frames').innerHTML = "<table>" + frameRows.join("") + "</table>";
    }

    function DisplayCurrentBowler() {
        document.getElementById('current-bowler-name').innerText = game.currentBowler() + "'s turn"
    }
}
