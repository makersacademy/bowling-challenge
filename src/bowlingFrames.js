var frames = [
  {frame: 1, bowl1: 0, bowl2: 0}, {frame: 2, bowl1: 0, bowl2: 0},
  {frame: 3, bowl1: 0, bowl2: 0}, {frame: 4, bowl1: 0, bowl2: 0},
  {frame: 5, bowl1: 0, bowl2: 0}, {frame: 6, bowl1: 0, bowl2: 0},
  {frame: 7, bowl1: 0, bowl2: 0}, {frame: 8, bowl1: 0, bowl2: 0},
  {frame: 9, bowl1: 0, bowl2: 0}, {frame: 10, bowl1: 0, bowl2: 0, bowl3: 0}
];

function findObjectByKey(key, value) {
    for (var i = 0; i < frames.length; i++) {
        if (frames[i][key] === value) {
            return frames[i];
        }
    }
    return null;
}

var obj = findObjectByKey('frame', 1);

console.log(obj)
