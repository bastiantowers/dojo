const chai = require('chai');
const ClassRoom = require('../classRoom');
const ClassRoomCalendarFinder = require('../classRoomCalendarFinder');
const ClassRoomLabelPrinter = require('../classRoomLabelPrinter');

describe("Dojo 11", () => {
    it('Dado un conjunto de Aulas disponibles, se solicita una de ellas con capacidad para al menos 10 personas', () => {

        let classRooms = [ new ClassRoom('Lab A', 5, 'Aula: Lab A'), new ClassRoom('Aula: Lab B', 15, 'Aula: Lab B') ];

        const classRoomCalendarFinder = new ClassRoomCalendarFinder();
        const availableClassroom = classRoomCalendarFinder.getFreeClassroomByCapacity(classRooms, 10);

        chai.expect(availableClassroom.label).to.equal('Aula: Lab B');
    });
    it('Dado el mismo listado, se solicita un aula para 30 personas. Se espera como respuesta: “No hay aula disponible” ', () => {
        let classRooms = [ new ClassRoom('Lab A', 5, 'Aula: Lab A'), new ClassRoom('Aula: Lab B', 15, 'Aula: Lab B') ];

        const classRoomCalendarFinder = new ClassRoomCalendarFinder();
        const availableClassroom = classRoomCalendarFinder.getFreeClassroomByCapacity(classRooms, 30);
        chai.expect(availableClassroom.label).to.equal('No hay aula disponible');
    });

    /*
     - La gente de arquitectura necesita además de capacidad en el aula, que la misma cumpla con cierta cantidad de metros cuadrados para poder exponer sus maquetas.
     Ej:  [{nombre:”Lab A”, capacidad:5, m2:’10},{nombre:”Lab B”, capacidad:15, m2:20}, {nombre:”Lab C”, capacidad:15, m2:50}]   -> capacidad 10, 30m2 -> "Aula: Lab C"


     facundo.daranno [5:46 PM]
     - Ciertas materias pueden solicitar que el aula que necesiten, disponga de cierta cantidad de computadoras. Dicha solicitud, al igual que los metros cuadrados son opcionales.

     facundo.daranno [5:53 PM]
     -  Dado el aumento de alumnos no videntes en la universidad, se desea que las etiquetas se impriman en braille.
     */
});


const MyClass = require('../MyClass');
