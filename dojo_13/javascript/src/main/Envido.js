class Envido {
  constructor(...cards) {
    this.cards = cards;
  }

  challenge(envido) {
    //new AnchoDeEspada(), new SieteDeEspada(), new CincoDeCopa()
    this.getMejorEnvidoPosible();
  }

  getMejorEnvidoPosible() {
    this.cards.forEach(card => {
      card.getPalo();
    });
  }
}

export default Envido;