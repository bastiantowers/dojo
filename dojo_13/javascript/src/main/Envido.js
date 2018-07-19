import Espada from './cards/espada/Espada'

class Envido {
  constructor(...cards) {
    this.cards = cards;
  }

  challenge(envido) {
    //new AnchoDeEspada(), new SieteDeEspada(), new CincoDeCopa()
    const myEnvido = this.getMejorEnvidoPosible();
    const otherEnvido = envido.getMejorEnvidoPosible();
    console.log(this.cards);
    console.log(myEnvido);
    console.log(envido.cards);
    console.log(otherEnvido);
    return myEnvido > otherEnvido ? this : envido;
  }

  getMejorEnvidoPosible() {
    const samePalo = this.getCardsWithSamePalo();
    return this.getSamePaloEnvidoOrDefault(samePalo);
  }

  getSamePaloEnvidoOrDefault(samePalo) {
      let value = 0;
      samePalo.forEach(cardIndex => {
        value += this.cards[cardIndex].getEnvidoValue();
      });
      return value ? value + 20 : this.getHighestEnvidoValue();
  }

  getHighestEnvidoValue() {
      let value = 0;
      console.log(this.cards);
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