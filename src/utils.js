/** other utility functions unrelated to math */

// cycle over an array, or iterable. Pass keys to iterate
// specifically over those.
let cycleFactory = function(iterable, keys) {
  if (!keys) {
    let i = 0;
    return () => iterable[i++ % iterable.length];
  }
  else {
    // I am proud of this... I blew my own mind...
    let keyCycle = cycleFactory(keys);
    return () => iterable[keyCycle()];
  }
};
