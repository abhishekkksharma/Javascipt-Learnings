class Human {
    // properties
    age ;  //public - 
    #wt = 70; //private - can be used within the class
    ht = 180;

    constructor (newage,newheight,newweight){
        this.age = newage;
        this.ht = newheight;
        this.#wt = newweight;
    }

    //behavior
    walking(){
        console.log("I am walking");
        
    }

    running(){
        console.log("I am running");
        
    }
    get fetchweight(){ // getter -used for get of private variables out of class
        return this.#wt;
    } 

    set modifyweight(value){ //setter -used for modification of private variables
        this.#wt = value;
    }
}

let obj = new Human(50,190,60);
console.log(obj.fetchweight);
obj.running();
