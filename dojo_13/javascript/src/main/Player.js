class Player {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  placeCard(turn, card) {
    turn.placeCard(this.cards[0])
  }
}

export default Player;