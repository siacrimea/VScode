let user = {
    name: "Иван",
    age: 30,
};

let clone = Object.assign({}, user);

console.log(clone);
console.log(user);