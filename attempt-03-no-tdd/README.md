# Bowling challenge attempt 03 (no TDD)

This was done late at night after wrestling with attempt 02 for most of the afternoon and evening, just to see if it was possible to write the program this way. I wrote this without test-driving it in about an hour. The fact that writing this program was quite straightforward but test-driving it was so painful I take as proof that my division of responsibilities between my classes was misguided. (You might say I should have noticed this much earlier.)

For example, the `Frame` class has a method which scores a particular frame, but since frame scores can depend on subsequent frames the logic for this method passes between the `Frame` and `Game` classes. Not well encapsulated, not a clear allocation of responsibility, and as a consequence and in addition, very complicated to test independently.

Next up, for fun, I wrote [another version](../attempt-04-no-tdd) using a different approach with no classes, and no test-driving again, to get a different perspective on the logic.

