function Wall() {
}

Wall.prototype.bumpsInto = function (reclaimer) {
  throw new Error('not empty content!');
};

// For tests
var window = window || undefined;

// Expose
if(window){
  window.Wall = Wall;
} else {
  module.exports = Wall;
}
