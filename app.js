const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

const handleSuccess = (resolved) => {
  console.log(resolved);
};
const handleFailure = (rejected) => {
  console.log(rejected);
};
checkInventory(order).then(handleSuccess, handleFailure);
