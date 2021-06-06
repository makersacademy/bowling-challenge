Things to consider:

The player wants the program to keep track of which round and ball they're currently on
    -   `Please enter your pins for round ${round}, ball ${ball}`
        round and ball will be held in the constructor and will be altered as the rounds progress and balls are thrown

The player wants to input their scores and have them saved on the scorechart
    -   I'll send all of the scores to an array of arrays and then add the math later. 
        The array will look like this: [[4, 4], [5, 4], [3, 3]]
        Scores will be added to the scoreboard like this: 
        scoreboard[round][ball] = pins
        The round and ball will then be increased so the next pins input will go to the correct index

The player isn't allowed to knock down more than 10 pins per round
    -   An error will be thrown if the round score tries to exceed 10

Round ten receives 3 balls and can exceed 10 pins in the round
    -   

Adds the scores up correctly 
    - All rounds that aren't strikes or spares go to the scorecard immediately
    - Spares don't go to the scorechart until they receive the bonus of one extra throw
        - After a spare, hold the 10 points until the next pin is thrown, 
          and then give the spare round 10 points plus the value of the next ball thrown
    - Strikes don't go to the scorechart until they receive the bonus of two extra throws
        - After a strike, hold the 10 points until the next two pins are thrown,
          and then give the strike round 10 points plus the value of the next two balls thrown