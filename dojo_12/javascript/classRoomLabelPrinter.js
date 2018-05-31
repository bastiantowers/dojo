function ClassRoomLabelPrinter(name, capacity) {
}

ClassRoomLabelPrinter.prototype.getClassroomLabel = function(classRoom) {
  return classRoom.label;
};

module.exports = ClassRoomLabelPrinter;