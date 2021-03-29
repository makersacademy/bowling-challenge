## Bowling Scorecard

1. Create a new instance of the Scorecard class
2. To add rolls to the scorecard use the #addRoll(Frame.Roll, pinsknocked) function.
   E.g. A player knocks down 5 pins in frame 1 roll 1 enter #addRoll(1.1, 5)
   You cant enter more than one turn at a time.
3. Use the #total(frame_to_total) function to output total.  
   E.g. If you want the total of frame 5 enter total(5)
4. To print the scorecard use #print(frame_to_total)
5. To reset the scorecard to zero all entries use resetScorecard()
