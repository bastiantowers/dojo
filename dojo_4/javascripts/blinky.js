const DeadState = require('./deadState');
const AliveState = require('./aliveState');

function Blinky() {
  this._lifeState = new AliveState;
}

Blinky.prototype.kill = function (being){
  //being._lifeState = "dead"
  being._lifeState.changeStateToDeadState(being);
};

// Expose
module.exports = Blinky;
