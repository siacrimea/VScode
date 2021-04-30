function unique(arr) {
    let uni = [];
    arr.forEach(function(item) {
        if (!uni.includes(item)) {
            uni.push(item);
        }
    });
    return uni;
}

let strings = [
    "кришна",
    "кришна",
    "харе",
    "харе",
    "харе",
    "харе",
    "кришна",
    "кришна",
    ":-O",
];

alert(strings.includes("кришна"));

alert(unique(strings));

// function getAverageAge(users) {
//     return users.reduce((sum, current) => sum + current.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// alert(getAverageAge(arr));

// function sortByAge(arr) {
//     arr = arr.sort((a, b) => (a.age > b.age ? 1 : -1));
//     }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

//-----------------------------------

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((elem) => ({
//     fullName: elem.name + " " + elem.surname,
//     id: elem.id,

// }));

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин
// alert(usersMapped[1].id); // 1
// alert(usersMapped[1].fullName);
//----------------------------------------

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);

// alert(names); // Вася, Петя, Маша

//-----------------------------------------

// function Calculator() {
//     this.methods = {
//         "+": function(a, b) {
//             return a + b;
//         },
//         "-": function(a, b) {
//             return a + b;
//         },
//     };

//     this.calculate = function(str) {
//         let split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }
// let powerCalc = new Calculator();

// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// alert(powerCalc.calculate("3 ** 7"));

////----------------------------------------------

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = arr.slice().sort();

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); //HTML, JavaScript, CSS (без изменений)

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert(arr); // 1, 2, 15

// function filterRangeInPlace(arr, a, b) {
//     if (a > b) {
//         let aa = b;
//         b = a;
//         a = aa;
//     }
//     arr.forEach(function(item, index) {
//         if (+item > b || +item < a) {
//             arr.splice(index, 1);
//         }
//     });
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRangeInPlace(arr, 1, 4);

// alert(arr); // 5,3,8,1

// function filterRange(arr, a, b) {
//     if (a > b) {
//         let aa = b;
//         b = a;
//         a = aa;
//     }
//     return arr.filter((item) => +item <= b && +item >= a);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 4, 1);

// alert(filtered); // 3,1 (совпадающие значения)

// alert(arr); // 5,3,8,1 (без изм

// function camelize(str) {
//     return str
//         .split("-")
//         .map((it, ind) => (ind == 0 ? it : it[0].toUpperCase() + it.slice(1)))
//         .join("");
// }

// alert(camelize("background-color"));
// alert(camelize("list-style-image"));
// alert(camelize("-webkit-transition"));

// function sumInput() {
//     let summands = [];
//     let i = 0;
//     let sum = 0;
//     let sumtmp;
//     do {
//         sumtmp = prompt(`Введите число ${i + 1}:`, 0);
//         summands[i] = +sumtmp;
//         ++i;
//     } while (isFinite(sumtmp) && sumtmp);

//     alert("Массив " + summands);
//     for (let i = 0; i < summands.length - 1; i++) {
//         sum = sum + summands[i];
//     }
//     return sum;
// }

// alert("Сумма = " + sumInput());

// let styles = ["Джаз", "Блюз"];
// alert(styles);
// styles.push("Рок-н-ролл");
// alert(styles);
// styles[Math.round((styles.length - 1) / 2)] = "Классика";
// alert(styles);
// styles.shift();
// alert(styles);
// styles.unshift("Рэп", "Регги");
// alert(styles);

// function extractCurrencyValue(str) {
//     return str.slice(1); //str.slice(-(str.length - 1));
// }
// alert(extractCurrencyValue("$120"));

// function truncate(str, maxlength) {
//     str.length <= maxlength - 1 ?
//         alert(str) :
//         alert(str.slice(0, maxlength - 1) + "...");
// }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
// truncate("01234567890123456789", 20) = "Всем привет!";

// function checkSpam(str) {
//     if (str.toUpperCase().includes("VIAGRA") || str.toUpperCase().includes("XXX"))
//         return true;
//     else return false;
// }

// alert(checkSpam("buy ViAgRA now"));
// alert(checkSpam("free xxxxx"));
// alert(checkSpam("innocent rabbit"));

// function ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// alert(ucFirst("вася"));