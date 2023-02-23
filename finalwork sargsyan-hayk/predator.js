class Predator extends zawarudo{
  constructor(x,y){
      super(x,y)
      this.energy = 12;
  }
     die(){
        matrix[this.y][this.x] = 0;
        for (var i in predArr) {
            if (this.x == predArr[i].x && this.y == predArr[i].y) {
                predArr.splice(i, 1);
                break;
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
            matrix[newY][newX] = 3;
            this.x = newX;
            this.y = newY;
        } 
        } else {
        this.die();

    }
         }   

         eat(){
            let eaters = this.chooseCell(2);
             let preds = this.chooseCell(1);
            let all = eaters.concat(preds);
             let oneGrass = random(all);
            if (oneGrass){
                this.energy++;
                matrix[this.y][this.x] = 0;
                var oneGrassX = oneGrass[0];
                var oneGrassY = oneGrass[1];
                matrix[oneGrassY][oneGrassX] = 3;
                this.x = oneGrassX;
                this.y = oneGrassY;

                for (var i in grassArr) {
                    if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                for (var i in grassEatArr) {
                    if (oneGrassX == grassEatArr[i].x && oneGrassY == grassEatArr[i].y) {
                        grassEatArr.splice(i, 1);
                        break;
                    }
                }
                
            } else {
                this.move();
            }
         }
}