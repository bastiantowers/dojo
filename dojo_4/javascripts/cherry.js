function Cherry() {
}

Cherry.prototype.addWeight = function (toThisBeing) {
  return toThisBeing._weight.duplicate();
};

// Expose
module.exports = Cherry;
