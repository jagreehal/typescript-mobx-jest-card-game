import { observable, action, autorun } from "mobx";

class Counter {
  @observable count: number;
  constructor(count) {
    this.count = count;
  }

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}

describe("counter class", () => {
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
