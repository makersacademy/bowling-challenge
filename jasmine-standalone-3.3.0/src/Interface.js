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
        let frameRows = []
        for(i = 0; i < Object.keys(game.frames).length; i++) {
            //Add a long string to frameRows which will be used to draw and label the table
            frameRows.push(
                '<tr>' +
                    '<td id="name-' + Object.keys(game.frames)[i] + '">' + Object.keys(game.frames)[i] + '</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f01">' + Object.keys(game.frames)[i].toLowerCase() + '-f01</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f02">' + Object.keys(game.frames)[i].toLowerCase()+ '-f02</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f03">' + Object.keys(game.frames)[i].toLowerCase()+ '-f03</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f04">' + Object.keys(game.frames)[i].toLowerCase()+ '-f04</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f05">' + Object.keys(game.frames)[i].toLowerCase()+ '-f05</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f06">' + Object.keys(game.frames)[i].toLowerCase()+ '-f06</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f07">' + Object.keys(game.frames)[i].toLowerCase()+ '-f07</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f08">' + Object.keys(game.frames)[i].toLowerCase()+ '-f08</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f09">' + Object.keys(game.frames)[i].toLowerCase()+ '-f09</td>' +
                    '<td id="' + Object.keys(game.frames)[i] + '-f10">' + Object.keys(game.frames)[i].toLowerCase()+ '-f10</td>' +
                '</tr>'
            )
        }
        document.getElementById('frames').innerHTML = "<table>" + frameRows.join("") + "</table>";
        /*
            Set innerHtml of #frames current player's name (have Game function figure this out)
        */
    })
}