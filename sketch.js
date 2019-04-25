var screenX = window.innerWidth;
var screenY = window.innerHeight;
var grid;
var globalScale = 30;
var mapGrid;


function setup(){
  createCanvas(screenX, screenY);
  grid = new Grid(screenX, screenY, globalScale);
  fill(200, 200, 200);
  // circle(mouseX, mouseY, 10);
  filter(BLUR, 3);
}
function mousePressed(){
  grid.changeOnGrid(mouseX, mouseY);
  grid.defineCorners();
}

function draw(){
  background(50);
  grid.run();
}

function keyPressed(){

}

//
// function createGrid(){
//   let scale = globalScale;
//   let grid = [];
//   let x = Math.floor(screenX/scale);
//   let y = Math.floor(screenY/scale);
//   for(let i = 0; i < y; i++){
//     let placeholder = [];
//     for(let i = 0; i < x; i++){
//       placeholder.push(0);
//     }
//     grid.push(placeholder);
//   }
//   return grid;
// }

// function changeOnGrid(ximp, yimp){
//   let x = Math.floor(ximp/globalScale);
//   let y = Math.floor(yimp/globalScale);
//   if(mapGrid[y][x] === 1){
//     mapGrid[y][x] = 0;
//   }
//   else{
//     mapGrid[y][x] =1;
//   }
// }

// function showGrid(){
//   for(let columnNumber = 0; columnNumber < mapGrid.length; columnNumber++){
//     for(let rowPosition = 0; rowPosition < mapGrid[0].length; rowPosition++){
//       if(mapGrid[columnNumber][rowPosition] === 1){
//         fill(255,255,255);
//         rect(rowPosition*globalScale, columnNumber*globalScale, globalScale, globalScale);
//       }
//     }
//   }
// }
//
// function defineCorners(){
//
// }
