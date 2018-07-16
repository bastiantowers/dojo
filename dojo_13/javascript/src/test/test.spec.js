import { expect, assert } from 'chai';

import Envido from '../main/Envido'

import AnchoDeEspada from '../main/cards/espada/AnchoDeEspada'
import AnchoDeBasto from './../main/cards/basto/AnchoDeBasto'
import SieteDeEspada from '../main/cards/espada/SieteDeEspada'
import DosDeBasto from '../main/cards/basto/DosDeBasto'
import TresDeBasto from '../main/cards/basto/TresDeBasto'
import SieteDeCopa from '../main/cards/copa/SieteDeCopa'
import CincoDeCopa from '../main/cards/copa/CincoDeCopa'
import CincoDeOro from '../main/cards/oro/CincoDeOro'


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

  it("el 2 de basto le gana al 7 de copa", () => {
    const dosDeBasto = new DosDeBasto();
    const sieteDeCopa = new SieteDeCopa();

    assert.equal(dosDeBasto.challenge(sieteDeCopa), dosDeBasto);
  });

  it("Dadas dos triadas conformadas por espada1 espada7 copa5 y espada1 espada10 copa5 " +
      "ante un envido debe ganar la primer triada de cartas", () => {
    const envido1 = new Envido(new AnchoDeEspada(), new SieteDeEspada(), new CincoDeCopa());
    const envido2 = new Envido(new AnchoDeBasto(), new TresDeBasto(), new CincoDeOro());

    assert.equal(envido1.challenge(envido2), envido1);
  });

});