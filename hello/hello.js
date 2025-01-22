function sayHello(name) {
  console.log(`Hello ${name}!`);
}

function sayHi() {
  console.log("Hi World");
}

const name = "Collins";

module.exports = { sayHello, sayHi, name }; // common js export
