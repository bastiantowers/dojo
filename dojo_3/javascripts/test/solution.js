const chai = require('chai');

const Bomber = require('../bomber');
const Bolban = require('../bolban');
const Cell = require('../cell');
const Wall = require('../wall');
const Empty = require('../empty');

describe("bomberman", () => {
    describe("bomberman", () => {
        it("steps into a cell which is empty then it moves in", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var here = new Cell();
            bomber.stepsIn( here );
            chai.assert.equal( bomber.isIn(here), true);

        });



        it("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var here = new Cell( new Wall() );
            chai.assert.throws( () => {
                bomber.stepsIn( here );
            });
            chai.assert.equal( bomber.isIn(bornPlace), true);
            //chai.assert.equal( bomber.stepsIn(here), false); // esto es mio
        });

        it("creates a bomberman with a bornplace and its cell should be the bornplace with we created it ", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            chai.assert.equal( bornPlace.isFilledWith(bomber), true);

        });

        it.skip("steps into a cell which is busy with an enemy then it dies", () => {
            var bomber = new Bomber( new Cell() );
            var here = new Cell( new Bolban() );
            bomber.stepsIn( here );
            chai.assert.equal( bomber.isDead(), true);
            chai.assert.equal( bomber.isAlive(), false);
        });

        it.skip("leaves a boom next to a wall, the boom explodes and the wall disappears", () => {
            var bomber = new Bomber( new Cell() );
            var cellWithWall = new Cell( new Wall() );


            var bomb = bomber.leavesBomb();
            bomb.ticks();
            var explotion = bomb.ticks();
            explotion.damages(cellWithWall);

            chai.assert.isTrue( cellWithWall.isEmpty() );

        });

        it.skip("throws a boom to a brick, the boom explodes and the bricks disappears", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber (bornPlace);
            var wallCell = new Cell ( new Wall() );

            chai.assert.equal(bombedCell.emptyContent(), false);

            var trajectory = bomber.throwsBomb (wallCell);
            var emptyCell = new Cell( new Empty() );

            trajectory.swish(emptyCell);
            trajectory.swish(wallCell);
            chai.assert.equal( wallCell.emptyContent(), true);
        });
    });

});
