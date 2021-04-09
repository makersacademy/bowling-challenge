### Interface plan

State which frame it is
Drop down menu for rolls - could change displayed numbers depending on previous roll???
or have a check to not allow extra pins falling within one frame

Show results: individual rolls (number of pins) - \ for spare X for strike
show cumulative scores per frame


Display a end of game message at the end

Add a reload/restart/clear button!


Need methods:
frameNumber()
remainingPins()



frameNumber()
at the start of the game | 1
roll 4 | 1
roll 5 | 2
roll 2 | 2
roll 7 | 3

at the start of the game | 1
roll 10 | 2

maybe better as
let frameNumber
setFrameNumber()


10th frame displayResults()
input | output
--------
2, 3 | "2", "3", "", ""
10, 3 | "", "X", "3", ""
2, 8, 3 | "", "/", "3", ""
10, 3, 7 | "", "X", "/", ""
10, 10, 10 | "", "X", "X", "X"
10, 10, 2 | "", "X", "X", "2"



Bug: input form remembers last choice, can keep pressing enter
Bug: frame 10 number of pins available not correct
