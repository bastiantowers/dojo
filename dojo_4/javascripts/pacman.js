const Weight = require('./weight');
const AliveState = require('./aliveState');

function Pacman(weightUnits) {
  this._weight = new Weight(weightUnits || 1);
  //this._alive = true;
  //this._lifeState = "alive"; // ["alive", "dead", "super"]
  this._lifeState = new AliveState();
}

Pacman.prototype.eat = function(food){
  food.addWeight(this);
};

Pacman.prototype.getWeight = function(){
  return this._weight.getWeight();
};

Pacman.prototype.isFatterThan = function (thisWeight) {
  return this.getWeight() > thisWeight;
};

Pacman.prototype.isTwoTimesFatterThan = function (thisWeight) {
  return this.getWeight() === thisWeight * 2;
};

Pacman.prototype.bumpsWith = function (thing) {
  thing.kill(this);
};

// Expose
module.exports = Pacman;
