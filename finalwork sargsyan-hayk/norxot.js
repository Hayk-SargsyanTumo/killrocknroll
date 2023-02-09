// grass objects creating constructor
class newGrass{
    constructor(x, y) {
       this.x = x;
       this.y = y;
       this.multiply = 0;

        //all grass directions
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
    // chooses empty or not empty cells within arguments 0,1
    chooseCell(character) {
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
     mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 8 && newCell) {
            var Grass = new newGrass(newCell[0], newCell[1]);
            newGrassArr.push(Grass);
            matrix[newCell[1]][newCell[0]] = 6;
            this.multiply = 0;  
        }
    }
    
    
     
}
