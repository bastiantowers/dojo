const chai = require('chai');

const Pacman = require('../pacman');
const Biscuit = require('../biscuit');
const Cherry = require('../cherry');
const Blinky = require('../blinky');
const Pellet = require('../pellet');
const DeadState = require('../deadState');
const AliveState = require('../aliveState');
const SuperState = require('../superState');
//const Weight = require('../weight');

describe("pacman", () => {
    it("should get fat whether it eats biscuits", () => {
        const pacman = new Pacman();
        const oldWeight = pacman.getWeight();
        pacman.eat(new Biscuit());
        chai.assert.isTrue(pacman.isFatterThan(oldWeight));
    });

    it("should get two times fatter when it eats a cherry", () => {
        const pacman = new Pacman();
        const oldWeight = pacman.getWeight();
        pacman.eat(new Cherry());
        chai.assert.isTrue(pacman.isTwoTimesFatterThan(oldWeight));
    });

    it("should create a pacman with an initial weight", () => {
        const pacman = new Pacman(20);
        const actualWeight = pacman.getWeight();
        chai.assert.isFalse(pacman.isFatterThan(actualWeight));
    });

    it("should die whether bumps into phanton", () => {
        const pacman = new Pacman();
        const blinky = new Blinky();
        pacman.bumpsWith(blinky);
        chai.expect(pacman._lifeState).to.be.instanceOf(DeadState);
    });

    it("should convert its state to super when it eats a pellet", () => {
        const pacman = new Pacman();
        pacman.eat(new Pellet());
        chai.expect(pacman._lifeState).to.be.instanceOf(SuperState);
    });

    it("should weaken phantom whether it eats a pellet", () => {
        const pacman = new Pacman();
        const blinky = new Blinky();
        pacman.eat(new Pellet());
        pacman.bumpsWith(blinky);
        chai.expect(pacman._lifeState).to.be.instanceOf(SuperState);
    });

    it.skip("should kill a weaked phantom when pacman hits it", () => {
        const pacman = new Pacman();
        const blinky = new Blinky();
        pacman.eat(new Pellet());
        pacman.bumpsWith(blinky);
        chai.expect(blinky._lifeState).to.be.instanceOf(DeadState);
    });

    // Pacman come a un fantasma debilitado y este queda en un estado tal
    // que si el pacman lo come, no vuelve a morir (el fantasma en estado "ojitos")

    // Pacman come a un fantasma debilitado, la digestión entrega un regalo
    // tal que si el pacman lo come y pasa por arriba de los fantasmas aunque
    // no este debilitado

});
