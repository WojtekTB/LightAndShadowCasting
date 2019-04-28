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
    let gridWidth = Math.floor(w/scale);
    let gridHeight = Math.floor(h/scale);
    for(let y = -1; y < gridHeight + 1; y++){
      let placeholder = [];
      for(let x = -1; x < gridWidth + 1; x++){
        placeholder.push(new GridBlock(x, y, this.scale));
      }
      grid.push(placeholder);
    }
    return grid;
  }

  changeOnGrid(ximp, yimp){
    let x = Math.floor(ximp/this.scale);
    let y = Math.floor(yimp/this.scale);
    this.gridMap[y + 1][x + 1].clicked();
  }

  showGrid(){
  for(let columnNumber = 0; columnNumber < this.gridMap.length; columnNumber++){
    for(let rowPosition = 0; rowPosition < this.gridMap[0].length; rowPosition++){
      this.gridMap[columnNumber][rowPosition].show();
    }
  }
}

  // defineEdges(){//absolute garbage and doesn't work
  //   for(let column = 0; column < this.gridMap.length; column++){
  //     for(let row = 0; row < this.gridMap[0].length; row++){
  //       if(this.gridMap[column][row].state === 1){//if block that needs to be checked
  //         let block = this.gridMap[column][row];
  //         block.clearEdges();
  //         this.gridEdges = [];
  //         let neighborEState;
  //         let neighborNState;
  //         let neighborWState;
  //         let neighborSState;
  //
  //         let neighborEObj = this.gridMap[column][row + 1];
  //         let neighborNObj = this.gridMap[column - 1][row];
  //         let neighborWObj = this.gridMap[column][row - 1];
  //         let neighborSObj = this.gridMap[column + 1][row];
  //
  //         if(neighborEObj.state === 1){//east check
  //           neighborEState = true;
  //         }
  //         else{
  //           neighborEState = false;
  //         }
  //         if(neighborNObj.state === 1){//north check
  //           neighborNState = true;
  //         }
  //         else{
  //           neighborNState = false;
  //         }
  //         if(neighborWObj.state === 1){//West check
  //           neighborWState = true;
  //         }
  //         else{
  //           neighborWState = false;
  //         }
  //         if(neighborSObj.state === 1){//South check
  //           neighborSState = true;
  //         }
  //         else{
  //           neighborSState = false;
  //         }
  //
  //         console.table(neighborEState, neighborNState, neighborWState, neighborSState);
  //
  //         if(neighborEState === false){//checking if need to create edge on East
  //           if(neighborNState){
  //             if(neighborNObj.edgeE === null){
  //               block.createEdgeEast();
  //             }
  //             else{
  //               neighborNObj.editEdgeEast(neighborNObj.x + 1, neighborNObj.y + 1, block.x + 1, block.y + 1);
  //             }
  //           }
  //           else if(neighborSState){
  //             if(neighborNObj.edgeE === null){
  //               block.createEdgeEast();
  //             }
  //             else{
  //               neighborSObj.editEdgeEast(neighborSObj.x, neighborSObj.y, block.x + 1, block.y);
  //             }
  //           }
  //           else{
  //             block.createEdgeEast();
  //           }
  //         }
  //
  //         if(neighborNState === false){//checking if need to create edge on East
  //           if(neighborWState){
  //             if(neighborWObj.edgeW === null){
  //               block.createEdgeEast();
  //             }
  //             else{
  //               neighborNObj.editEdgeNorth(neighborNObj.x + 1, neighborNObj.y, block.x + 1, block.y);
  //             }
  //           }
  //           else if(neighborEState){
  //             neighborSObj.editEdgeNorth(neighborEObj.x, neighborEObj.y, block.x, block.y);
  //           }
  //           else{
  //             block.createEdgeNorth();
  //           }
  //         }
  //
  //         if(neighborWState === false){//checking if need to create edge on East
  //           if(neighborNState){
  //             neighborNObj.editEdgeWest(neighborNObj.x, neighborNObj.y + 1, block.x, block.y + 1);
  //           }
  //           else if(neighborSState){
  //             neighborSObj.editEdgeWest(neighborSObj.x, neighborSObj.y + 1, block.x, block.y);
  //           }
  //           else{
  //             block.createEdgeWest();
  //           }
  //         }
  //
  //         if(neighborSState === false){//checking if need to create edge on East
  //           if(neighborNState){
  //             neighborNObj.editEdgeNorth(neighborNObj.x + 1, neighborNObj.y + 1, block.x + 1, block.y + 1);
  //           }
  //           else if(neighborEState){
  //             neighborEObj.editEdgeNorth(neighborEObj.x + 1, neighborSObj.y + 1, block.x, block.y + 1);
  //           }
  //           else{
  //             block.createEdgeEast();
  //           }
  //         }
  //
  //       }
  //     }
  //   }
  // }

  defineCorners(){
    this.gridCornerPoints = [];
    for(let column = 0; column < this.gridMap.length; column++){
    for(let row = 0; row < this.gridMap[0].length; row++){
        // console.log(column, row);
        // console.log(this.gridMap[0].length);
        if(this.gridMap[column][row].state === 1){//if block that needs to be checked
          let neighborE;
          let neighborN;
          let neighborW;
          let neighborS;

          let neighborEN;
          let neighborNW;
          let neighborWS;
          let neighborSE;

          if(this.gridMap[column + 1][row].state === 1){//east check
            neighborE = true;
          }
          else{
            neighborE = false;
          }
          if(this.gridMap[column][row - 1].state === 1){//north check
            neighborN = true;
          }
          else{
            neighborN = false;
          }
          if(this.gridMap[column - 1][row].state === 1){//West check
            neighborW = true;
          }
          else{
            neighborW = false;
          }
          if(this.gridMap[column ][row + 1].state === 1){//South check
            neighborS = true;
          }
          else{
            neighborS = false;
          }
          if(this.gridMap[column + 1][row - 1].state === 1){//eastnorth check
            neighborEN = true;
          }
          else{
            neighborEN = false;
          }
          if(this.gridMap[column - 1][row - 1].state === 1){//Northwest check
            neighborNW = true;
          }
          else{
            neighborNW = false;
          }
          if(this.gridMap[column - 1][row + 1].state === 1){//Westsouth check
            neighborWS = true;
          }
          else{
            neighborWS = false;
          }
          if(this.gridMap[column + 1][row + 1].state === 1){//Southeast check
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
            this.gridCornerPoints.push(new Corner(row - 1, column - 1, this.scale));
          }
          if(putPointOnBR){
            this.gridCornerPoints.push(new Corner(row, column, this.scale));
          }
          if(putPointOnBL){
            this.gridCornerPoints.push(new Corner(row, column - 1, this.scale));
          }
          if(putPointOnTR){
            this.gridCornerPoints.push(new Corner(row - 1, column, this.scale));
          }
        }
      }
    }
  }

  showCorners(){
    for(let i = 0; i < this.gridCornerPoints.length; i++){
      this.gridCornerPoints[i].show();
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
      let pointX = this.gridCornerPoints[i].x * this.scale;
      let pointY = this.gridCornerPoints[i].y * this.scale;
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

class GridBlock{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.state = 0;
    this.cornerTL = true;
    this.cornerTR = true;
    this.cornerBL = true;
    this.cornerBL = true;
    //edges
    // this.edgeE;
    // this.edgeN;
    // this.edgeW;
    // this.edgeS;
    // this.createEdgeEast();
    // this.createEdgeNorth();
    // this.createEdgeWest();
    // this.createEdgeSouth();
  }

  clicked(){
    if(this.state === 0){
      this.state = 1;
    }
    else{
      this.state = 0;
    }
  }//changes state of grid block

  setCronerTL(){
    this.cornerTL = true;
  }
  setCronerTR(){}
  setCronerBR(){}
  setCronerBL(){}

  clearCorners(){
    this.cornerTL = false;
    this.cornerTR = false;
    this.cornerBL = false;
    this.cornerBL = false;
  }

  // clearEdges(){
  //   this.edgeE = null;
  //   this.edgeN = null;
  //   this.edgeW = null;
  //   this.edgeS = null;
  // }
  //
  // createEdgeEast(){
  //   this.edgeE = new Edge(this.x + 1, this.y, this.x + 1, this.y + 1, this.scale);//edge from top left to bottom right
  // }
  // createEdgeNorth(){
  //   this.edgeN = new Edge(this.x, this.y, this.x + 1, this.y, this.scale);//edge from top left to top right
  // }
  // createEdgeWest(){
  //   this.edgeW = new Edge(this.x , this.y, this.x, this.y + 1, this.scale);//edge from top left to bottom left
  // }
  // createEdgeSouth(){
  //   this.edgeS = new Edge(this.x, this.y + 1, this.x + 1, this.y + 1, this.scale);//edge from bottom right to bottom left
  // }
  //
  // editEdgeEast(fromX, fromY, toX, toY){
  //   if(this.edgeE.x1 === fromX && this.edgeE.y1 === fromY){
  //     this.edgeE.changeLength(toX, toY, this.edgeE.x2, this.edgeE.y2);
  //   }
  //   else if(this.edgeE.x2 === fromX && this.edgeE.y2 === fromY){
  //     this.edgeE.changeLength(this.edgeE.x1, this.edgeE.y1, toX, toY);
  //   }
  // }
  // editEdgeNorth(fromX, fromY, toX, toY){
  //   if(this.edgeN.x1 === fromX && this.edgeN.y1 === fromY){
  //     this.edgeN.changeLength(toX, toY, this.edgeN.x2, this.edgeN.y2);
  //   }
  //   else if(this.edgeN.x2 === fromX && this.edgeN.y2 === fromY){
  //     this.edgeN.changeLength(this.edgeN.x1, this.edgeN.y1, toX, toY);
  //   }
  // }
  // editEdgeWest(fromX, fromY, toX, toY){
  //   if(this.edgeW.x1 === fromX && this.edgeW.y1 === fromY){
  //     this.edgeW.changeLength(toX, toY, this.edgeW.x2, this.edgeW.y2);
  //   }
  //   else if(this.edgeW.x2 === fromX && this.edgeW.y2 === fromY){
  //     this.edgeE.changeLength(this.edgeW.x1, this.edgeW.y1, toX, toY);
  //   }
  // }
  // editEdgeSouth(fromX, fromY, toX, toY){
  //   if(this.edgeS.x1 === fromX && this.edgeS.y1 === fromY){
  //     this.edgeS.changeLength(toX, toY, this.edgeS.x2, this.edgeE.y2);
  //   }
  //   else if(this.edgeS.x2 === fromX && this.edgeS.y2 === fromY){
  //     this.edgeS.changeLength(this.edgeE.x1, this.edgeS.y1, toX, toY);
  //   }
  // }
  // drawEdges(){
  //
  // }

  show(){
    if(this.state === 0){
      fill(80);
    }
    else{
      fill(0, 200, 255);
    }
    rect(this.x * this.scale, this.y * this.scale, this.scale, this.scale);
  }
}


class Corner{
  constructor(x, y, scale){
    this.x = x;
    this.y = y;
    this.scale = scale;
  }

  show(){
    fill(255, 0, 0);
    circle(this.x * this.scale, this.y * this.scale, 5);
  }
}

class Edge{
  constructor(x1, y1, x2, y2, scale){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.scale = scale;
  }

  changeLength(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  show(){
    fill(0, 50, 255);
    line(x1 * this.scale, y1 * this.scale, x2 * this.scale, y2 * this.scale);
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
