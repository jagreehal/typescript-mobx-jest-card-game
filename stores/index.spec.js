var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { observable, action } from "mobx";
import { cards, getShuffledCardsForGame } from "../cards";
import { Level, GameStatus } from "../types";
class Game {
    constructor(state) {
        this.state = state;
    }
    start(level) {
        let cardsForGame;
        switch (level) {
            case Level.hard:
                cardsForGame = getShuffledCardsForGame(cards);
                break;
            default:
                cardsForGame = getShuffledCardsForGame(cards.slice(1, 9));
                break;
        }
        this.state = {
            status: GameStatus.notStarted,
            previousCards: [],
            currentCard: Object.assign({}, cardsForGame[0], { flipped: true }),
            remainingCards: cardsForGame.slice(1),
            level
        };
    }
}
__decorate([
    observable,
    __metadata("design:type", Object)
], Game.prototype, "state", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Game.prototype, "start", null);
describe("Configure Store", () => {
    it("should be able to configure", () => {
        let state = new Game({
            status: GameStatus.notStarted
        });
        expect(state).toBeTruthy();
    });
    it("should be able start game", () => {
        let state = new Game({
            status: GameStatus.notStarted
        });
        expect(state).toBeTruthy();
    });
});
//# sourceMappingURL=index.spec.js.map