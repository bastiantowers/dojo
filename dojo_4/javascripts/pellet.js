const SuperState = require('./superState');

function Pellet() {
}

Pellet.prototype.addWeight = function (toThisBeing) {
  return toThisBeing._lifeState = new SuperState();
};

// Expose
module.exports = Pellet;
