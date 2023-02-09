class GrassEater{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.directions = []
    }
    //getting new coordinates for neighbor cells
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
    // choosing cell between empty(0) and grass(1)
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
     die(){
        matrix[this.y][this.x] = 0;
        for (var i in grassEatArr) {
            if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                grassEatArr.splice(i, 1);
                break;
            }
        }
        
     }

mul(){
if(this.energy>=10){
var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
if (newCell) { //[3,4]
var newGrassEater = new GrassEater(newCell[0], newCell[1]);
grassEatArr.push(newGrassEater);
matrix[newCell[1]][newCell[0]] = 2;
this.energy = 5
        }
    }
}
     
     // method that allows to move within changing cell coordinates
    move(){
        if(this.energy > 0){
        this.energy--;
        var emptyCells = this.chooseCell(0)
        var oneEmptyCell = random(emptyCells);
        if (oneEmptyCell){
            matrix[this.y][this.x] = 0;
            var newX = oneEmptyCell[0];
            var newY = oneEmptyCell[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;
        } 
        } else {
        this.die();

    }
         }   

         eat(){
             let grasses = this.chooseCell(1);
             let oneGrass = random(grasses)
            if (oneGrass){
                this.energy++;
                matrix[this.y][this.x] = 0;
                var oneGrassX = oneGrass[0];
                var oneGrassY = oneGrass[1];
                matrix[oneGrassY][oneGrassX] = 2;
                this.x = oneGrassX;
                this.y = oneGrassY;

                for (var i in grassArr) {
                    if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                
            } else {
                this.move();
            }
         }
}