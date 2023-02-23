class secondchar extends zawarudo{
   constructor(x,y){
       super(x,y)
       this.energy = 4;
   }


   
     die(){
        matrix[this.y][this.x] = 0;
        for (var i in secondcharArr) {
            if (this.x == secondcharArr[i].x && this.y == secondcharArr[i].y) {
                secondcharArr.splice(i, 1);
                break;
            }
        }
        
     }

mul(){
if(this.energy>=8){
var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
if (newCell) { //[3,4]
var newGrassEater = new secondchar(newCell[0], newCell[1]);
secondcharArr.push(newGrassEater);
matrix[newCell[1]][newCell[0]] = 5;
this.energy = 4;
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
            matrix[newY][newX] = 5;
            this.x = newX;
            this.y = newY;
        } 
        } else {
        this.die();

    }
         }   

         eat(){
             let grasses = this.chooseCell(3); 
             let oneGrass = random(grasses);
            if (oneGrass){
                this.energy+=5;
                matrix[this.y][this.x] = 0;
                var oneGrassX = oneGrass[0];
                var oneGrassY = oneGrass[1];
                matrix[oneGrassY][oneGrassX] = 5;
                this.x = oneGrassX;
                this.y = oneGrassY;

                for (var i in predArr) {
                    if (oneGrassX == predArr[i].x && oneGrassY == predArr[i].y) {
                        predArr.splice(i, 1);
                        break;
                    }
                }
                
            } else {
                this.move();
            }
         }
}