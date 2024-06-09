// пример подключения анонимного модуля
const module1 = require("./anonimus_module");

// пример подключения именованного модуля
const { randomInt } = require("./named_module");

// пример подключения установленного модуля
const randFormPacckage = require("my_module");

const { getRandomNumber, getArrayOfRandomNumbers } = require("random");

console.log(module1());
console.log(randomInt());
console.log(randFormPacckage());

console.log("FROM MY MODULE", getRandomNumber());
console.log("FROM MY MODULE", getArrayOfRandomNumbers(6));
