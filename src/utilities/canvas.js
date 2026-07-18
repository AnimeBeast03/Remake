// do canvas settup
export const canvas = document.getElementsByClassName("game_canvas")[0];
export const ctx = canvas.getContext("2d");



// resize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// disable image smoothing
ctx.imageSmoothingEnabled = false;