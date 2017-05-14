
Bowling Challenge
=================

## Installation:
## Usage:

## Challenges:

### Weekend 1—Business Logic:
1. Simplicity: I spent a few hours trying to create as simple a domain model as possible, but the result is still far too complex. Games and frames need to know too much about each other, which requires some hacky and unintuitive logic. My `Frame` definition is also on the long side (~130 lines).
2. Tests: I had problems with tests this week, I suspect partly due to my domain model. I wasn't always clear on the right things to test for, or how to test for them, and I found that my tests didn't always keep me safe from bugs. Part of this feels due to a need for a mishmash of feature and unit testing in my unit tests, which may be unavoidable when working strictly on business logic but trying to keep eventual features in mind. Still, tests are an area for improvement this week.
3. No separate constructor for 10th frames. I think this would have been a better design, but I ran out of time. I will implement this if there's time next weekend.

## Strengths:

### Weekend 1—Business Logic:

1. Functionality: My code may be complicated, but it can return all the data needed for a fully-functional bowling display. I'm pleased at having managed to create that in less than two days.

## Technologies: