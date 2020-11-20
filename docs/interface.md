# Interface Design

[README file](../README.md)

[Analysis Discussion](./analysis.md)

[Domain Model](./domain_model.md)

## Design discussion
- aim for a graphical representation of the scorecard
  - similar to the table provided in the challenge.
- have the frame on a single line, rather than two/three
- have the interface self generate as the game progresses
  - possible extension Task
- have the score entry via dropdowns
  - minimises entry errors / need for error capture and management
- get user's name - for personalisation at game start
- thought about 'celebration' alerts, but this breaks the game flow.
  - limit to a transition or flashed celebration
  - possible score embellishment on the scorecard.
  - possible score value replacement with 'X' and '/'
- have 'notes' column
  - switch (maybe at start of game setup?) for different comment styles
  - might be able to switch layout as part of setup phase
    - vertical (default) and horizontal (compact)
