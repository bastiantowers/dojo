import { expect, assert } from 'chai';

import AnchoDeEspada from './../main/AnchoDeEspada'
import AnchoDeBasto from './../main/AnchoDeBasto'
import SieteDeEspada from './../main/SieteDeEspada'
import DosDeBasto from './../main/DosDeBasto'
import SieteDeCopa from './../main/SieteDeCopa'

describe('dojo', () => {

  it("el ancho de espada le gana al ancho de basto", () => {
    //const carta =
    //const anchoDeEspada = new Card('AnchoDeEspada');
    const anchoDeEspada = new AnchoDeEspada();
    const anchoDeBasto = new AnchoDeBasto();

    //assert.equal(anchoDeEspada.wins(anchoDeBasto), true);
    assert.equal(anchoDeEspada.challenge(anchoDeBasto), anchoDeEspada);

  });

  it("el ancho de basto pierde con el ancho de espada", () => {
    const anchoDeEspada = new AnchoDeEspada();
    const anchoDeBasto = new AnchoDeBasto();

    assert.equal(anchoDeBasto.challenge(anchoDeEspada), anchoDeEspada);
  });

  it("el ancho de basto le gana al siete de espada", () => {
    const anchoDeBasto = new AnchoDeBasto();
    const sieteDeEspada = new SieteDeEspada();

    assert.equal(anchoDeBasto.challenge(sieteDeEspada), anchoDeBasto);
  });

  it("en el envido el siete de basto le gana al ancho de espada", () => {
    const envido1 = new Envido(new AnchoDeEspada(), new SieteDeEspada(), new CuatroDeCopa());
    const envido2 = new Envido(new AnchoDeBasto(), new TresDeBasto(), new CincoDeOro());

    assert.equal(envido1.challenge(envido2), envido1);
  });

  // TODO: fix
  it.skip("el 2 de basto le gana al 7 de copa", () => {
    const dosDeBasto = new DosDeBasto();
    const sieteDeCopa = new SieteDeCopa();

    assert.equal(dosDeBasto.challenge(sieteDeCopa), dosDeBasto);
  });



  /*it('should return the correct sensei name', () => {
    const dojo = new Dojo({
      sensei: 'Diego'
    });

    const expected = '{"sensei":"Diego"}';

    expect(dojo.toJSON()).to.be.equal(expected);
  });

  it("it should not be equal", () => {
    const dojoSouth = new Dojo({ sensei: 'Diego' });
    const dojoNorth = new Dojo({ sensei: 'Juan' });

    assert.equal(dojoSouth.isEqual(dojoNorth), false);
  });

  it("it should be equal", () => {
    const dojoSouth = new Dojo({ sensei: 'Diego' });
    const dojoNorth = new Dojo({ sensei: 'Diego' });

    assert.equal(dojoSouth.isEqual(dojoNorth), true);
  });

  it("it should throw an exception", () => {
    const dojito = new Dojo();

    assert.throws(() => {	dojito.explode() });
  });

  it("it should throw an exception", () => {
    const dojito = new Dojo();

    assert.throws(() => {	dojito.explode() });
  });*/

});