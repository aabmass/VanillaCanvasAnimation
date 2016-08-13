// these callbacks will be set up in main() and get
// called by buttons in the DOM
let stopGame = null;
let startGame = null;
let [width, height] = [600, 600];

let main = function() {
  const canvas = document.getElementById('animation-canvas');
  canvas.width = width;
  canvas.height = height;
  let fps = 120;

  let config = {
    // override config options here
  };

  startGame = () => {
    // start the game loop
    let handle = window.setInterval(eventLoopFactory(canvas, config), 1000 / fps);

    stopGame = window.clearInterval.bind(null, handle);
  };
};

// document ready
document.addEventListener("DOMContentLoaded", main);
