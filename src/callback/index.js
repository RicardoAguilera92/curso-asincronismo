function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(3, 4, sum));

setTimeout(function () {
  console.log("Hola Javascript");
}, 2000);

function gretting(name) {
  console.log(`hola ${name}`);
}

setTimeout(gretting, 2000, "Ricardo");
