- Every game will have 10 frames.
- Every frame will have upto two rolls.
- Every roll will have a value from 0 - 10 or will be skipped.
- After every roll the score should be updated.
- If there's a strike, the score of the frame will wait for two rolls before updating.
- If there's a spare, the score of the frame will wait for 1 roll before updating.
- Strikes should be displayed as X.
- Spares should be displayed as /.
- Misses should be displayed as -.
- Otherwise, the number of pins hit for each roll should be displayed.
- The final frame should allow up to two bonus rolls.
- An overall score should be displayed
- Says 'Perfect game' when they score 300
- Says 'Gutter game' when they score 0

Save all the rolls, and in each frame a reference to the index of the first roll. Using this it can calculate the score accordingly when it needs to add the bonus points for strikes and spares.

– Look up separating class files in javascript.

