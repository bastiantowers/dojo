function Biscuit() {
}

Biscuit.prototype.addWeight = function (toThisBeing) {
  return toThisBeing._weight.incrementOnce();
};

// Expose
module.exports = Biscuit;
