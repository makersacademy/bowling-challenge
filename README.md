
Bowling Challenge
=================

very small part of what is to be an excellent bowling card one day :)

It currently can do only one thing: it keeps results for first nine frames as a hash, like this:

'0': [ 5, 1 ],
'1': [ 3, 6 ],
'2': [ 4, 3 ],
'3': [ 9, 1, 'spare' ],
'4': [ 6, 4, 'spare' ],
'5': [ 4, 6, 'spare' ],
'6': [ 4, 2 ],
'7': [ 8, 1 ],
'8': [ 3, 2 ]

'Roll' class has become basically useless during the process of evolution of this code, however I still keep it as we may want to have it later.

Roll values are being generated randomly now even though it was requested not to do so. Changes come when I learn how to get user input in plain JavaScript (or project moves to browser stage).
