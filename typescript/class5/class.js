var Plant = /** @class */ (function () {
    function Plant(planttype, size) {
        this.planttype = planttype;
        this.size = size;
        console.log(planttype);
    }
    Plant.prototype.growing = function () {
        console.log(this.planttype + " " + this.size + " plant is growing");
    };
    Plant.prototype.stoppedGrowing = function () {
        console.log("plant " + this.size + " is not growing");
    };
    return Plant;
}());
var Tulasi = new Plant('Tulsi', 'small');
console.log(Tulasi.size);
// console.log(Plant)
