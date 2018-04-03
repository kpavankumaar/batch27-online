class Plant {
    

    constructor(public planttype, private size) {
        console.log(planttype);
    }
    growing(){
        console.log(`${this.planttype} ${this.size} plant is growing`)
    }
    stoppedGrowing(){
        console.log(`plant ${this.size} is not growing`)
    }   
}
var Tulasi = new Plant('Tulsi','small');
console.log(Tulasi.size);
// console.log(Plant)
