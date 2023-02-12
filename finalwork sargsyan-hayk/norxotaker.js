
class newGrassEater extends zawarudo{
    constructor(x,y){
        super(x,y)
        this.energy  = 8;
    }
    
     die(){
        matrix[this.y][this.x] = 0;
        for (var i in newGrassEatArr) {
            if (this.x == newGrassEatArr[i].x && this.y == newGrassEatArr[i].y) {
                newGrassEatArr.splice(i, 1);
                break;
            }
        }
        
     }

mul(){
if(this.energy>=10){
var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
if (newCell) { //[3,4]
var GrassEater = new newGrassEater(newCell[0], newCell[1]);
newGrassEatArr.push(GrassEater);
matrix[newCell[1]][newCell[0]] = 7;
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
            matrix[newY][newX] = 7;
            this.x = newX;
            this.y = newY;
        } 
        } else {
        this.die();

    }
         }   

         eat(){
             let grasses = this.chooseCell(6);
             let oneGrass = random(grasses)
            if (oneGrass){
                this.energy++;
                matrix[this.y][this.x] = 0;
                var oneGrassX = oneGrass[0];
                var oneGrassY = oneGrass[1];
                matrix[oneGrassY][oneGrassX] = 7;
                this.x = oneGrassX;
                this.y = oneGrassY;

                for (var i in newGrassArr) {
                    if (oneGrassX == newGrassArr[i].x && oneGrassY == newGrassArr[i].y) {
                        newGrassArr.splice(i, 1);
                        break;
                    }
                }
                
            } else {
                this.move();
            }
         }
}