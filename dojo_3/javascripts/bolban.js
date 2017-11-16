function Bolban(cell) {
  this._cell = cell;
}

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Bolban = Bolban;
} else {
  module.exports = Bolban;
}
