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
class Counter {
    constructor(count) {
        this.count = count;
    }
    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
}
__decorate([
    observable,
    __metadata("design:type", Number)
], Counter.prototype, "count", void 0);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Counter.prototype, "increment", null);
__decorate([
    action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Counter.prototype, "decrement", null);
describe("Counter", () => {
    it("can increment", () => {
        let counter = new Counter(0);
        counter.increment();
        expect(counter.count).toBe(1);
    });
    it("can decrement", () => {
        let counter = new Counter(1);
        counter.decrement();
        expect(counter.count).toBe(0);
    });
});
//# sourceMappingURL=counter-class.spec.1.js.map