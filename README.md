Things to consider:

The player wants the program to keep track of which round and ball they're currently on
    -   `Please enter your pins for round ${round}, ball ${ball}`
        round and ball will be held in the constructor and will be altered as the rounds progress and balls are thrown

The player wants to input their scores and have their total score added up
    -   I'll send all of the scores to an array of arrays and then add the math later. 
        The array will look like this: [[4, 4], [5, 4], [3, 3]]
        Scores will be added to the scoreboard like this: 
        pins = gets.chomp
        scoreboard[round][ball] = pins
        The round and ball will then be increased so the next pins input will go to the correct index

The player isn't allowed to knock down more than 10 pins per round
    -   An error will be thrown if the round score tries to exceed 10
        This message will likely happen inside of the gets.chomp function and will be on a loop until the user adds a valid input