Approach

My ruby version of the bowling challenge was fully functional. In that exercise, I stuck closely to the described scope, and didn't implement a UI such as a web interface.

When I came to the JS version, the task was therefore straightforward - to duplicate the functionality that already exists in the ruby version. 

The code is built so that one can interrogate total score, regular score, or bonus score at any point. I reasoned that this would be desireable because a physical scorecard would show as much. This also made it easy to break down productioon of the code into relatively isolated steps. For example, calucalating the regular score per frame is straightforward and independent of the bonus score per frame.

I researched how to, for example, iterate and sum in JS.

To validate the code, make use of the automated tests via jest. The file 'functional_tests.js' contains some lines of code that allow you to interact with the codebase via a repl such as node.

The next step is to produce a web interface.
