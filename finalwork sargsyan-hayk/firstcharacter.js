class firstchar{
    constructor(x,y){
this.x = x;
this.y = y;
this.directions =[];

}
 die(){
        matrix[this.y][this.x] = 0;
        for (var i in firstcharArr) {
            if (this.x == firstcharArr[i].x && this.y == firstcharArr[i].y) {
                firstcharArr.splice(i, 1);
                break;
            }
        }
        
     }
getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
 chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){

            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
         }
        }
        return found;
     
     }
    hndzelxot(){
    var xot = this.chooseCell(1);
    var randxot = random(xot);
    if(xot && randxot){
   for(let i =0;i<8;i++){
      matrix[this.y][this.x] = 0;
            var newX = randxot[0];
            var newY = randxot[1];
            matrix[newY][newX] = 4;
            this.x = newX;
            this.y = newY;
   for (var u in grassArr) {
                    if (newX == grassArr[u].x && newY == grassArr[u].y) {
                        grassArr.splice(u, 1);
                        break;
                    }
                }
            break;
}
    
} else {
this.die();
    }
    }
}