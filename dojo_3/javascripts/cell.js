//const Empty = require('./empty');

function Cell(content) {
  this._content = content || new Empty();
}

Cell.prototype.isEmpty = function(){
  return this._content instanceof Empty;
};

Cell.prototype.reclaimedBy = function(reclaimer){
  this._content.bumpsInto(reclaimer);
  this._content = reclaimer;
};

Cell.prototype.isFilledWith = function (occupant) {
  return this._content === occupant;
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Cell = Cell;
} else {
  module.exports = Cell;
}
