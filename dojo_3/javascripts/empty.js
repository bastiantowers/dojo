function Empty() {}

Empty.prototype.bumpsInto = function(reclaimer){

};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Empty = Empty;
} else {
  module.exports = Empty;
}
