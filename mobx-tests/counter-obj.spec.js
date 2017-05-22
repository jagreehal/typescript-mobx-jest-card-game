import { observable } from "mobx";
const counter = observable({
    count: 0
});
counter.increment = () => {
    this.count++;
};
counter.decrement = () => {
    this.count--;
};
describe("Counter", () => {
    it("can increment", () => {
        counter.increment();
        expect(counter.count).toBe(1);
    });
    it("can decrement", () => {
        let counter = new Counter(1);
        counter.decrement();
        expect(counter.count).toBe(0);
    });
});
//# sourceMappingURL=counter-obj.spec.js.map