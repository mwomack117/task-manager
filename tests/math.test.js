const {
  calculateTip,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  add
} = require("../src/math");

test("Should calculate total with tip", () => {
  expect(calculateTip(20, 0.2)).toBe(24);
});

test("Should calculate total with default .25 tip", () => {
  expect(calculateTip(100)).toBe(125);
});

test("Should convert 32 F to 0 C", () => {
  expect(fahrenheitToCelsius(32)).toBe(0);
});

test("Should convert 0 C to 32 F", () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

// test("Async test demo", done => {
//   setTimeout(() => {
//     expect(1).toBe(2);
//     done();
//   }, 2000);
// });

test("Should add two numbers", done => {
  add(2, 3).then(sum => {
    expect(sum).toBe(5);
    done();
  });
});

test("Should add two numbers async/await", async () => {
  const sum = await add(10, 22);
  expect(sum).toBe(32);
});
