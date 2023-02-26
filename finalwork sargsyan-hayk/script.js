

let matrix = []
const side = 60;
var grassArr = [];
let grassEatArr = [];
var predArr = [];
var firstcharArr = [];
var secondcharArr = [];
var newGrassArr = [];
var newGrassEatArr = [];

function matrixGenerator(size, countGrass, countGrassEater, predatorCount, secondcharCount, newgrcount, newgreatcount, firstcharCount) {
    for (let i = 0; i < size; i++) {
        matrix.push([])
        for (let j = 0; j < size; j++) {
            matrix[i].push(0)
        }

    }
    for (let k = 0; k < countGrass; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let k = 0; k < countGrassEater; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let k = 0; k < firstcharCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }

    }
    for (let k = 0; k < secondcharCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }

    }
    for (let k = 0; k < predatorCount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }

    }
    for (let k = 0; k < newgrcount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }

    }
    for (let k = 0; k < newgreatcount; k++) {
        let x = Math.floor(random(size))
        let y = Math.floor(random(size))
        if (matrix[y][x] == 0) {
            matrix[y][x] = 7
        }

    }
}
var hndzvor = 0;
var btn = document.querySelector('#btn')
btn.addEventListener('click',()=>{
    hndzvor = 20;
})
function createWorld() {
    matrixGenerator(30, 500, 50, 50, 50, 20, 200, 75, hndzvor)
    createCanvas(30 * side, 30 * side);
}
   



function setup() {
  
createWorld()

    frameRate(5);

    background('#acacac');



    // filling array with automatic created grass objects within 0,1
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                grassArr.push(new Grass(j, i))
            } else if (matrix[i][j] == 2) {
                grassEatArr.push(new GrassEater(j, i))
            } else if (matrix[i][j] == 3) {
                predArr.push(new Predator(j, i))
            } else if (matrix[i][j] == 4) {
                firstcharArr.push(new firstchar(j, i))
            } else if (matrix[i][j] == 5) {
                secondcharArr.push(new secondchar(j, i))
            } else if (matrix[i][j] == 6) {
                newGrassArr.push(new newGrass(j, i))
            } else if (matrix[i][j] == 7) {
                newGrassEatArr.push(new newGrassEater(j, i))
            }
        }
    }
}




function draw() {

    //drawing the area with matrix info
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
            } else if (matrix[y][x] == 4) {
                fill("blue");
            } else if (matrix[y][x] == 5) {
                fill("white");
            } else if (matrix[y][x] == 6) {
                fill("lime");
            } else if (matrix[y][x] == 7) {
                fill("cyan");
            }


            rect(x * side, y * side, side, side);



        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEatArr) {
        grassEatArr[i].eat();
    }
    for (let i in grassEatArr) {
        grassEatArr[i].mul();
    }
    for (let i in predArr) {
        predArr[i].eat();
    }
    for (let i in firstcharArr) {
        firstcharArr[i].hndzelxot();
    }
    for (let i in secondcharArr) {
        secondcharArr[i].eat();
    }
    for (let i in secondcharArr) {
        secondcharArr[i].mul();
    }
    for (let i in newGrassArr) {
        newGrassArr[i].mul();
    }
    for (let i in newGrassEatArr) {
        newGrassEatArr[i].eat();
    }
    for (let i in newGrassEatArr) {
        newGrassEatArr[i].mul();
    }
}

