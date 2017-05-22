import { observable, action, autorun } from "mobx";

var counter = observable({
  count: 0,

  increment: action(() => {
    this.count++;
  }),

  decrement: action(() => {
    this.count--;
  })
});

describe("counter object", () => {
  it.skip("can increment", () => {
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it("can decrement", () => {
    counter.decrement();
    expect(counter.count).toBe(0);
  });
});
