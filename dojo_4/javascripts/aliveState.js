const DeadState = require('./deadState');

function AliveState() {

}

AliveState.prototype.changeStateToDeadState = function (toThisBeing) {
  toThisBeing._lifeState = new DeadState();
};

module.exports = AliveState;