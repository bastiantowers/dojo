import Espada from './cards/espada/Espada'

class Envido {
  constructor(...cards) {
    this.cards = cards;
  }

  challenge(envido) {
    //new AnchoDeEspada(), new SieteDeEspada(), new CincoDeCopa()
    const myEnvido = this.getMejorEnvidoPosible();
    const otherEnvido = envido.getMejorEnvidoPosible();
    return myEnvido > otherEnvido ? this : envido;
  }

  getMejorEnvidoPosible() {
    const samePalo = this.getCardsWithSamePalo();
    return this.getSamePaloEnvidoOrDefault(samePalo, this.getHighestEnvidoValue);
  }

  getSamePaloEnvidoOrDefault(samePalo, defaultFunction) {
      let value = 0;
      samePalo.forEach(cardIndex => {
        console.log(this.cards[cardIndex]);
        console.log(this.cards[cardIndex].getEnvidoValue());
        value += this.cards[cardIndex].getEnvidoValue();
      });
      return value ? value : defaultFunction();
  }

  getHighestEnvidoValue() {
      let value = 0;
      this.cards.forEach((card) => {
          if(card.getEnvidoValue() > value) {
            value = card.getEnvidoValue();
          }
      });
      return value;
  }

  getCardsWithSamePalo() {
      const samePalo = [];
      this.cards.forEach((card, index) => {
          const cardPalo = card.getPalo();
          for (let i = 0; i < this.cards.length; i++) {
              if (i !== index && cardPalo === this.cards[i].getPalo()) {
                  samePalo.push(i);
              }
          }
      });
      return samePalo;
  }
}

export default Envido;