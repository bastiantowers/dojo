class Turn {
  constructor(cardOne, cardTwo) {
    this.cardOne = cardOne;
    this.cardTwo = cardTwo;
  }

  placeCard(card){
    this.cardOne ? this.cardTwo = card : this.cardOne = card;
  }

  faceCards() {
    return this.cardOne.faceWithAndReturnWinner(this.cardTwo);
  }

}

export default Turn;