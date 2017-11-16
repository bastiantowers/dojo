function Bomber(cell) {
  this._cell = cell;
  this._cell.reclaimedBy(this);
  this._alive = true;
}

Bomber.prototype.stepsIn = function(cell) {
  //return cell.isEmpty() ? this._cell = cell : false;
  cell.reclaimedBy(this);
  this._cell = cell;
};

Bomber.prototype.isIn = function (cell) {
  return this._cell === cell;
};

Bomber.prototype.isDead = function () {
  return !this._alive;
};

Bomber.prototype.isAlive = function () {
  return this._alive;
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Bomber = Bomber;
} else {
  module.exports = Bomber;
}
