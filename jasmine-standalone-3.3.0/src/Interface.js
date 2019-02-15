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
    */
    document.getElementById('begin-game').addEventListener('click', function(event) {
        document.getElementById('get-bowlers').style.display = 'none';
        document.getElementById('play-game').style.display = 'block';
    })
}