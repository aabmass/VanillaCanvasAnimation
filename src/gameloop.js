/**
 * Event loop factory creates event loop functions to be run with
 * window.setInterval(..). See invocation in main(). Config is an object
 * with keys that can override the defaults:
 *
 */

 const defaultConfig = {
   // number of rectangles to render
   numRects: 50,
   minRectLength: 10,
   maxRectLength: 40,
   colors: [
     "#5E412F",
     "#FCEBB6",
     "#78C0A8",
     "#F07818",
     "#F0A830"
   ],

   // a factor that influences how quickly a particle's direction mutates
   directionMutationFactor: 0.10,

   // multiplicative scale on all speeds
   speedScale: 0.5,

   // a constant "wind" vector pushing rectanges in a specific
   // direction at all times
   wind: [0, 0]
 };

let eventLoopFactory = function(canvas, config = {}) {
  // fill in with defaults
  Object.keys(defaultConfig).forEach((key,index) => {
    config[key] = config[key] || defaultConfig[key];
  });

  // make the context...
  const ctx = canvas.getContext('2d');
  let length = () => Math.min(canvas.width, canvas.height);

  // cycles over the colors in the config
  let nextColor = cycleFactory(config.colors);

  // create some shapes to render
  let renderables = [];
  for (var i = 0; i < config.numRects; ++i) {
    // random width and height rect
    let rect = new Rect(
      randInt(config.minRectLength, config.maxRectLength),
      randInt(config.minRectLength, config.maxRectLength),
      nextColor()
    );

    // random beginning position
    let pos = [randInt(0, length()), randInt(0, length())];

    // random beginning direction
    let dir = normalize([randScale(), randScale()]);

    renderables.push({ rect, pos, dir });
  }

  // use arrow function to bind to this up above here...
  return () => {
    // this is the inner loop that runs the animations!

    // clear the old..
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    renderables.forEach(obj => {
      obj.rect.render(ctx, obj.pos);

      // move in the direction
      obj.pos = obj.pos.map((comp, i) => {

        // add the direction, keep each component in range [0, length()]
        let newComp = config.speedScale * obj.dir[i] + comp + config.wind[i];
        return newComp < 0 ? length() + newComp : newComp % length();
      });

      // slightly mutate direction
      obj.dir = normalize(mutateSlightly(obj.dir, config.directionMutationFactor));
    });
  }
};
