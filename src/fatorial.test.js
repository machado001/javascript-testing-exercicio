const Fatorial = require("./fatorial.js");
const { deepStrictEqual } = require("node:assert/strict");
const sinon = require("sinon");

(async () => {
  {
    //if result is 1, expected 1
    const fatorial = new Fatorial();
    const expected = 1;
    const result = fatorial.execute(1);
    deepStrictEqual(result, expected);
  }

  {
    //if result is 0, expected 1
    const fatorial = new Fatorial();
    const expected = 1;
    const result = fatorial.execute(0);
    deepStrictEqual(result, expected);
  }
  {
    //if result is 5, expected 120
    const fatorial = new Fatorial();
    const expected = 120;
    const spy = sinon.spy(fatorial, fatorial.execute.name);
    const result = fatorial.execute(5);
    const argsExpected = [5, 4, 3, 2, 1];
    deepStrictEqual(result, expected);
    deepStrictEqual(spy.callCount, (callCountExpected = 5));
    deepStrictEqual(spy.args.flat(), argsExpected);
  }
  {
    //if n < 0, deu ruim
    const fatorial = new Fatorial();
    const expected = "NOT POSITIVE INTEGER";
    const spy = sinon.spy(fatorial, fatorial.execute.name);
    const result = fatorial.execute(-1);
    const callOnceExpected = true;
    deepStrictEqual(result, expected);
    deepStrictEqual(spy.calledOnce, callOnceExpected);
  }
})();
