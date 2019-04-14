# Bowling challenge attempt 03 (no TDD)

This was done late at night after wrestling with attempt 02 for most of the afternoon and evening, just to see how easy it was to write the program with a `Frame` and `Game` class like this. I wrote this without test-driving it in about an hour. The fact that writing this program was quite straightforward but test-driving it was so painful I take as proof that my division of responsibilities between my classes was misguided. (You might say I should have noticed this much earlier.)

For example, the `Frame` class has a method which scores a particular frame, but since frame scores can depend on subsequent frames, the bonus is passed in from the outside. So the logic for the scoring is in fact split between the `Frame` and `Game` classes. Not well encapsulated, not a clear allocation of responsibility, and as a consequence and in addition, complicated to test independently.

Next up, for fun, I wrote [another version](../attempt-04-no-tdd) using a different approach with no classes, and no test-driving again, to get a different perspective on the logic.

