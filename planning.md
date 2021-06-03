### Interface plan
Done:
State which frame it is
Drop down menu for rolls - could change displayed numbers depending on previous roll???
Show results: individual rolls (number of pins) - \ for spare X for strike
show cumulative scores per frame
refactor the Frame displayResults to have 10th frame separately
Add a reload/restart/clear button!
Hide the roll input form at the end
Stop the scorecard moving up when the form is hidden at the end
For spares, keep the first roll number visible in display



Not done:
Display a end of game message at the end - special message for perfect/gutter game
styling/design

fix the scorecard border

looks terrible on mobile. layout/look should be completely different
About section - if need to give image attibutions (modal?)


Nice to Have:
Save the results to file??
add footer to link to my github/main page



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



Bug: in 10th frame, rolling a strike and then a normal roll  - normal roll doesn't show up
