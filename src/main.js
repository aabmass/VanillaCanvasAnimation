// these callbacks will be set up in main() and get
// called by buttons in the DOM
let startAnimation = null;
let stopAnimation = null;

let main = function() {
  const canvas1 = document.getElementById('a1');
  const canvas2 = document.getElementById('a2');
  const canvas3 = document.getElementById('a3');
  const canvas4 = document.getElementById('a4');
  const canvas5 = document.getElementById('a5');
  const canvas6 = document.getElementById('a6');

  let fps = 120;

  startAnimation = () => {
    // start the game loop
    let handles = [];

    /**
     * Init some canvases. I can pass several config options to override the defaults.
     * Check gameloop.js to see more options.
     *
     */
    handles.push(window.setInterval(eventLoopFactory(canvas1), 1000 / fps));

    handles.push(window.setInterval(eventLoopFactory(canvas2, {
      wind: [2, 1],
      colors: [ "#814374", "#51A39D", "#B7695C", "#CDBB79", "#F2F2F2", "#06425C" ],
      numRects: 500
    }), 1000 / fps));

    handles.push(window.setInterval(eventLoopFactory(canvas3, {
      wind: [-2, -1],
      colors: [ "#CDBB79", "#F2F2F2", "#06425C" ],
      numRects: 20
    }), 1000 / fps));

    handles.push(window.setInterval(eventLoopFactory(canvas4, {
      wind: [1.2, -2],
      colors: [ "#814374", "#51A39D", "#B7695C", "#06425C" ]
    }), 1000 / fps));

    handles.push(window.setInterval(eventLoopFactory(canvas5, {
      mutationFactor: 200,
      colors: [ "#000000", "#FFFFFF", "green", "blue" ]
    }), 1000 / fps));

    handles.push(window.setInterval(eventLoopFactory(canvas6, {
      speedScale: 0.5,
      maxRectLength: 60,
      colors: ["cyan", "grey"]
    }), 1000 / fps));

    stopAnimation = () => {
      handles.forEach((handle) => {
        window.clearInterval(handle);
      });
    };
  };
};

// document ready
document.addEventListener("DOMContentLoaded", main);
