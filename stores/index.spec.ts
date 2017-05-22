import { observable, computed, action, extendObservable } from "mobx";
import { cards, getShuffledCardsForGame } from "../cards";
import {
  Card,
  Guess,
  GameAction,
  GameState,
  Level,
  GameStatus
} from "../types";

import { cardAhearts, card2hearts, card3hearts } from "../cards";

class Game {
  @observable state: GameState;

  constructor(state) {
    this.state = extendObservable(this, state);
  }

  @action start(level: Level) {
    let cardsForGame: Array<Card>;
    switch (level) {
      case Level.hard:
        cardsForGame = getShuffledCardsForGame(cards);
        break;
      default:
        cardsForGame = getShuffledCardsForGame(cards.slice(1, 9));
        break;
    }

    this.state = {
      status: GameStatus.started,
      previousCards: [],
      currentCard: Object.assign({}, cardsForGame[0], { flipped: true }),
      remainingCards: cardsForGame.slice(1),
      level
    };
  }

  @action guess(guess: Guess) {
    if (
      this.state.status === GameStatus.notStarted ||
      !this.state.remainingCards
    ) {
      return;
    }

    if (!this.state.remainingCards.length) {
      this.state = Object.assign({}, this.state, {
        status: "won",
        hasWon: true
      });
    }

    let nextCard = Object.assign({}, this.state.remainingCards[0], {
      flipped: true
    });
    let nextRemainingCards = this.state.remainingCards.slice(1);
    // flip the next card

    let guessIsOK = false;
    if (guess === Guess.high) {
      guessIsOK = nextCard.value > this.state.currentCard.value;
    } else {
      guessIsOK = this.state.currentCard.value > nextCard.value;
    }

    if (!guessIsOK) {
      this.state = Object.assign({}, this.state, {
        remainingCards: [nextCard].concat(nextRemainingCards),
        status: "lost"
      });
      return;
    }

    let hasWon = nextRemainingCards.length === 0 ? true : undefined;

    if (hasWon) {
      this.state = Object.assign({}, this.state, {
        remainingCards: [nextCard],
        status: "won"
      });
      return;
    }

    this.state = Object.assign({}, this.state, {
      previousCards: this.state.previousCards.concat(this.state.currentCard),
      currentCard: nextCard,
      remainingCards: nextRemainingCards
    });
  }
}

describe("Configure Store", () => {
  it("should be able to configure", () => {
    let game = new Game({
      status: GameStatus.notStarted
    });

    let result = game.state;

    expect(result.status).toBe(GameStatus.notStarted);
  });

  it("should be able start game", () => {
    let game = new Game({
      status: GameStatus.notStarted
    });

    game.start(Level.easy);

    let result = game.state;

    if (result.status === GameStatus.notStarted) {
      expect(result.status).toBe(GameStatus.started);
      return;
    }

    expect(result.previousCards.length).toBe(0);
    expect(result.remainingCards.length).toBeTruthy();
    expect(result.currentCard).toBeTruthy();
  });

  it("can play ok to win", () => {
    let card1 = cardAhearts;
    let card2 = card2hearts;

    let game = new Game({
      previousCards: [],
      currentCard: card1,
      remainingCards: [card2],
      status: GameStatus.started,
      level: Level.easy
    });

    game.guess(Guess.high);

    let result = game.state;

    if (result.status === GameStatus.notStarted) {
      expect(result.status).toBe("started");
      return false;
    }

    let remainingCard = result.remainingCards[0];

    expect(result.previousCards.length).toBe(0);
    expect(remainingCard.value).toBe(2);
    expect(remainingCard.flipped).toBeTruthy();
    expect(result.currentCard.value).toBe(1);
    expect(result.status).toBe("won");
  });
});
