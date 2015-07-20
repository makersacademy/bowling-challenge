# Bowling Challenge: Review Guidelines

## Style
- Lines no longer than 80 characters
- Short methods
- Descriptively named methods
- Methods have a single responsibility
- Appropriate semi-colon use
- No nested conditionals
- Code free of comments
- Consistent indentation

## Testing
- Do the tests pass?
- Is master clean? (does the code work as is?)
- Tests organized under appropriate `describe` blocks.
- Are the tests descriptive?
- Are the tests DRY? (are they repeating themselves in the test in way that could be extracted)
- Is there any state being persisted between tests?

## OOP
- Are your objects [solid](https://github.com/makersacademy/course/blob/master/pills/code_reviews.md#oop---are-your-objects-solid)?
  - Have you separated responsibilities of...
    - knowing whether a frame is a strike / spare
    - keeping track of the progress of a game
    - calculating bonuses

## Design
- Have they met the specification?
- Is it overly complicated? (what's your gut feeling)
