class Creatures{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    eat(){
        console.log("eat")
    }
    die(){
        console.log('die')
    }
}

class GrassEater extends Creatures{   
    multiply(){
        console.log('multiply')
    }
   
    move(){
        console.log('move')
    }
}

class Predator extends Creatures{
    constructor(x,y,energy){
        super(x,y)
        this.energy = energy
    }
    chooseCell(){
        console.log('choose')
    }
}

var lion = new Predator(1,2,3)