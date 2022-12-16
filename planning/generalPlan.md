JS Bowling Challenge Plan

Split into classes:
- Frame
- Scorecard
- (Bonus, if time: CLI, if including user input)

Split code up into small methods, aiming for approx max 3 lines per method (declarative code rather than imperative code)
- Re CLI (which is a bonus):
    - Can split these puts/print messages into methods e.g., beginGame message, askForRoll message, etc.

TDD it:
- class/method by class/method
- mock test where necessary
- feature/integration test(s)
- test edge cases (e.g., gutter game and perfect game)

(Raise error for invalid input - e.g., more than 10 for a roll or frame - and maybe for a non-integer value)