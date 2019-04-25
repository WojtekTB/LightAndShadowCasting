class Grid{
  constructor(xLength, yLength, scale){
    this.scale = scale;
    this.gridMap = this.createGrid(xLength, yLength);
    this.gridCornerPoints = [];
    this.gridEdges = [];

    this.player = new Player();
    // console.log(this.gridMap);
  }

  createGrid(w, h){
    let scale = this.scale;
    let grid = [];
    let x = Math.floor(w/scale);
    let y = Math.floor(h/scale);
    for(let i = -1; i < y + 1; i++){
      let placeholder = [];
      for(let j = -1; j < x + 1; j++){
        placeholder.push(0);
      }
      grid.push(placeholder);
    }
    return grid;
  }

  changeOnGrid(ximp, yimp){
    let x = Math.floor(ximp/globalScale);
    let y = Math.floor(yimp/globalScale);
    if(this.gridMap[y][x] === 1){
      this.gridMap[y][x] = 0;
    }
    else{
      this.gridMap[y][x] = 1;
    }
    // this.defineCorners();
  }

  showGrid(){
  for(let columnNumber = 0; columnNumber < this.gridMap.length; columnNumber++){
    for(let rowPosition = 0; rowPosition < this.gridMap[0].length; rowPosition++){
      if(this.gridMap[columnNumber][rowPosition] === 1){
        fill(255,255,255);
        rect(rowPosition*this.scale, columnNumber*this.scale, this.scale, this.scale);
      }
    }
  }
}

  defineCorners(){
    this.gridCornerPoints = [];
    for(let column = 0; column < this.gridMap.length; column++){
    for(let row = 0; row < this.gridMap[0].length; row++){
        // console.log(column, row);
        // console.log(this.gridMap[0].length);
        if(this.gridMap[column][row] === 1){//if block that needs to be checked
          let neighborE;
          let neighborN;
          let neighborW;
          let neighborS;

          let neighborEN;
          let neighborNW;
          let neighborWS;
          let neighborSE;

          if(this.gridMap[column+1][row] === 1){//east check
            neighborE = true;
          }
          else{
            neighborE = false;
          }
          if(this.gridMap[column][row-1] === 1){//north check
            neighborN = true;
          }
          else{
            neighborN = false;
          }
          if(this.gridMap[column-1][row] === 1){//West check
            neighborW = true;
          }
          else{
            neighborW = false;
          }
          if(this.gridMap[column ][row + 1] === 1){//South check
            neighborS = true;
          }
          else{
            neighborS = false;
          }
          if(this.gridMap[column+1][row-1] === 1){//eastnorth check
            neighborEN = true;
          }
          else{
            neighborEN = false;
          }
          if(this.gridMap[column-1][row-1] === 1){//Northwest check
            neighborNW = true;
          }
          else{
            neighborNW = false;
          }
          if(this.gridMap[column-1][row+1] === 1){//Westsouth check
            neighborWS = true;
          }
          else{
            neighborWS = false;
          }
          if(this.gridMap[column+1][row+1] === 1){//Southeast check
            neighborSE = true;
          }
          else{
            neighborSE = false;
          }

          let putPointOnTR = true;
          let putPointOnTL = true;
          let putPointOnBR = true;
          let putPointOnBL = true;

          if(neighborE){
            putPointOnTR = false;
            putPointOnBR = false;
          }
          if(neighborN){
            putPointOnTR = false;
            putPointOnTL = false;
          }
          if(neighborW){
            putPointOnTL = false;
            putPointOnBL = false;
          }
          if(neighborS){
            putPointOnBR = false;
            putPointOnBL = false;
          }
          if(neighborE && neighborN && neighborEN === false){
            putPointOnTR = true;
          }
          if(neighborW && neighborN && neighborNW === false){
            putPointOnTL = true;
          }
          if(neighborW && neighborS && neighborWS === false){
            putPointOnBL = true;
          }
          if(neighborS && neighborE && neighborSE === false){
            putPointOnBR = true;
          }


          if(putPointOnTL){
            this.gridCornerPoints.push([row, column]);
          }
          if(putPointOnBR){
            this.gridCornerPoints.push([row + 1, column + 1]);
          }
          if(putPointOnBL){
            this.gridCornerPoints.push([row + 1, column]);
          }
          if(putPointOnTR){
            this.gridCornerPoints.push([row, column + 1]);
          }
        }


      }
    }
  }

  showCorners(){
    for(let i = 0; i < this.gridCornerPoints.length; i++){
      fill(255, 0, 0);
      circle(this.gridCornerPoints[i][0] * this.scale, this.gridCornerPoints[i][1] * this.scale, 5);
    }
  }

  drawLight(){
    fill(255,255,0);
    for(let i = 0; i < this.gridCornerPoints.length-1; i++){
      triangle(this.gridCornerPoints[i][0] * this.scale, this.gridCornerPoints[i][1] * this.scale, this.gridCornerPoints[i + 1][0] * this.scale, this.gridCornerPoints[i + 1][1] * this.scale, this.player.x, this.player.y);
    }
  }

  drawLinesToCorners(){
    fill(0);
    for(let i = 0; i < this.gridCornerPoints.length; i++){
      let pointX = this.gridCornerPoints[i][0] * this.scale;
      let pointY = this.gridCornerPoints[i][1] * this.scale;
      line(pointX, pointY, this.player.x, this.player.y);
    }
    // this.player.x;
    // this.player.y;

  }

  run(){
    this.showGrid();
    this.player.updatePos(mouseX, mouseY);
    this.showCorners();
    this.drawLinesToCorners();
    // this.drawLight();
  }
}

class Player{
  constructor(){
    this.x;
    this.y;
  }
  updatePos(x, y){
    this.x = x;
    this.y = y;
  }
}
