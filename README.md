## Bowling Challenge

# My Approach

I took a test-driven approach in creating the bowling challenge project. I decided to use 2 objects to complete the task, using Game and Frame. Game is responsible for holding each completed frame, and tallying their individual points.

Frame holds 2 throws, with throws determining a Frame's state (e.g. strike, spare) and the Frame's points given throws and bonus points that come from strikes and spares.

# Next Steps

I think the Frame object currently handles too many responsibilities, and refactoring the code to create an object that only handles Bonuses would be helpful.

Logic for the final frame is still also missing from the code, and that would be the priority moving forward. Currently, the Frame object can only handle 'regular' 2-throw frames, so maybe a new object for Final Frames would be the best course of action.

Finally, an interactive interface using jQuery would be a nice extension to this code.
