const ClassRoom = require('./classRoom');
const ClassRoomUnavailable = require('./classRoomUnavailable');

function ClassRoomCalendarFinder() {
}

ClassRoomCalendarFinder.prototype.getFreeClassroomByCapacity = function(classrooms, capacityNeeded) {
  let resultantClassroom = new ClassRoomUnavailable();
  classrooms.forEach(function(classroom){
    resultantClassroom = classroom.returnIfAppliesByCapacityOrDefault(capacityNeeded, resultantClassroom);
  });
  return resultantClassroom;
};

module.exports = ClassRoomCalendarFinder;