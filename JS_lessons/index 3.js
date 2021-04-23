function Accumulator(startingValue) {
    (this.value = startingValue),
    (this.read = function() {
        this.value += +prompt("Сколько нужно добавить?", 0);
        return this;
    });
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() {
//         // показывает текущую ступеньку
//         alert(this.step);
//         return this;
//     },
// };

// //ladder.up().up().down().showStep();

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();