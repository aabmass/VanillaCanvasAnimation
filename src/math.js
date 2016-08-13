/** math and utility funtions, written in a functional style */

let randInt = (l, r) => Math.floor(Math.random() * (r - l));

// gives a "scale", a float on the range [-1, 1]
let randScale = () => Math.random() * 2 - 1;

// vector addition
let add = (v, dir) => v.map((comp, i) => comp + dir[i]);

// vector magnitude
let mag = v => Math.sqrt(v.reduce((acum, val, i) => acum + val * val, 0));

// scalar multiplication
let scale = (v, scalar) => v.map(comp => comp * scalar);

// have to use regular function instead of arrow so that thisArg works right
let normalize = v => scale(v, 1 / mag(v));

// gives a slightly mutated vector based on the original. factor argument
// is a scalar factor for the random addition to each component
let mutateSlightly = (v, factor) => v.map(comp => comp + randScale() * factor);
