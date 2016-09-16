# Bowling Challenge: Review Guidelines

## Style
- Lines no longer than 80 characters
- Short methods
- Descriptively named methods. Function names should ideally start with a verb so it's clear that they do something to something else.
- Methods have a single responsibility
- Appropriate semi-colon use
- No nested conditionals
- Code free of unnecessary comments and commented-out sections
- Consistent indentation

## Testing
- Do the tests pass?
- Is master clean? (does the code work as is?)
- Tests organized under appropriate `describe` blocks.
- Are the tests descriptive?
- Are the tests DRY? (are they repeating themselves in the test in way that could be extracted)
- Is there any state being persisted between tests?
- Have they tested edge cases? Many solutions rely on a 'virtuous consumer' - i.e. they do not validate inputs or check for out of range values etc.

## OOP
- Are your objects [solid](https://github.com/makersacademy/course/blob/master/pills/code_reviews.md#oop---are-your-objects-solid)?
  - Have you separated responsibilities of...
    - knowing whether a frame is a strike / spare
    - keeping track of the progress of a game
    - calculating bonuses
- Reliance on implementation details. It's common to see objects relying on the internals of other objects or their implementation of low-level types (particularly arrays).

## Design
- Have they met the specification? Have they actually modelled the scoring of bowling?
- Is it overly complicated? (what's your gut feeling)
