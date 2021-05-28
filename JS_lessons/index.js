function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            alert(i);
        };
        shooters.push(shooter);
        alert(shooters);
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5]();

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
// ];

// function byField(nam) {
//    return (a, b) => (a[nam] > b[nam] ? 1 : -1);
// }

// alert(JSON.stringify(users.sort(byField("name"))));
// alert(JSON.stringify(users.sort(byField("age"))));

// по имени (Ann, John, Pete)
//alert(JSON.stringify(users.sort((a, b) => (a.name > b.name ? 1 : -1))));

// по возрасту (Pete, Ann, John)
// alert(JSON.stringify(users.sort((a, b) => (a.age > b.age ? 1 : -1))));

// function inBetween(a, b) {
//     return function(x) {
//         return x >= a && x <= b;
//     };
// }

// function inArray(m) {
//     console.log(m);
//     return function(n) {
//         console.log(n);
//         return m.includes(n);
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6)));

// alert(arr.filter(inArray([1, 2, 10])));

// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count++; // есть доступ к внешней переменной "count"
//     };
// }

// let counter = makeCounter();

// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter()); // 2

// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null,
//             },
//         },
//     },
// };

// function printReverseList(list) {
//     if (list.next) {
//         printReverseList(list.next);
//     }

//     alert(list.value);
// }

// printReverseList(list);

// function factorial(n) {
//     if (n > 1) {
//         return n * factorial(n - 1);
//     } else {
//         return n;
//     }
// }

// alert(factorial(4));

// function sumTo(n) {
//     return ((1 + n) / 2) * n;
// }

// alert(sumTo(5));

// function sumTo(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// alert(sumTo(10000));

// function sumTo(n) {
//     let sum = 0;
//     for (let j = 1; j <= n; j++) {
//         sum = sum + j;
//     }
//     return sum;
// }

// alert(sumTo(5));

// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// alert(JSON.stringify(list));

// let secondList = list.next.next;
// list.next.next = null;

// alert(JSON.stringify(list));
// alert(JSON.stringify(secondList));

// let company = {
//     // тот же самый объект, сжатый для краткости
//     sales: [
//         { name: "John", salary: 1000 },
//         { name: "Alice", salary: 600 },
//     ],
//     development: {
//         sites: [
//             { name: "Peter", salary: 2000 },
//             { name: "Alex", salary: 1800 },
//         ],
//         internals: [{ name: "Jack", salary: 1300 }],
//     },
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//     if (Array.isArray(department)) {
//         // случай (1)
//         return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else {
//         // случай (2)
//         let sum = 0;
//         //alert(JSON.stringify(Object.values(department)));
//         for (let subdep of Object.values(department)) {
//             alert(JSON.stringify(Object.values(department)));
//             sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//             alert(sum);
//         }
//         return sum;
//     }
// }

// alert(sumSalaries(company)); // 6700

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != "" && value == meetup ? undefined : value;
//   })
// );

// let user = {
//   name: "Василий Иванович",
//   age: 35,
// };

// let json = JSON.stringify(user);
// alert(json);

// let usernew = JSON.parse(json);
// alert(usernew.name);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

//alert(meetup.date.getDate()); // 30 - теперь работает!

// function getSecondsToday1() {
//   let now = new Date();

//   // создаём объект с текущими днём/месяцем/годом
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // разница в миллисекундах
//   return Math.round(diff / 1000); // получаем секунды
// }

// function getSecondsToday() {
//   let date = new Date();
//   date = date.setHours(0, 0, 0, 0);
//   return Math.round((Date.now() - date) / 1000);
// }

// alert(getSecondsToday());
// alert(getSecondsToday1());

// function getDateAgo(dat, days) {
//     alert(dat);
//     alert(dat.setDate(dat.getDate() - days));
//     return new Date(dat.setDate(dat.getDate() - days));

//     //return new Date(dat.getTime() - days * 24 * 3600 * 1000);
//     //alert(newdate);
// }

// let date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(date);
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getWeekDay(date) {
//     let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

//     return days[date.getDay()];

//     // let numday = date.getDay();
//     // switch (numday) {
//     //     case 0:
//     //         return "ВС";
//     //         break;
//     //     case 1:
//     //         return "ПН";
//     //         break;
//     //     case 2:
//     //         return "ВТ";
//     //         break;
//     //     case 3:
//     //         return "СР";
//     //         break;
//     //     case 4:
//     //         return "ЧТ";
//     //         break;
//     //     case 5:
//     //         return "ПТ";
//     //         break;
//     //     case 6:
//     //         return "СБ";
//     //         break;
//     // }
// }

// let date = new Date(2012, 0, 3); // 3 января 2012 года
// //alert(date.getDay()); // нужно вывести "ВТ"

// alert(getWeekDay(date)); // нужно вывести "ВТ"

// let dat = new Date(2012, 02, 20 03, 12);

// alert(dat);

// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }

// alert("Время diffSubtract: " + bench(diffSubtract) + "мс");
// alert("Время diffGetTime: " + bench(diffGetTime) + "мс");

// function topSalary() {
//     let max = 0;
//     let maxName = null;

//     for (let [name, salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }

//     return maxName;
// }

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// alert(topSalary(salaries));

// let user = { name: "John", years: 30 };

// let { name, years: age, isAdmin = false } = user;

// // ваш код должен быть с левой стороны:
// // ... = user

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(" ");

// alert(user.name); // Ilya

// function count(obj) {
//     return Object.keys(obj).length;
// }

// let user = {
//     name: "John",
//     age: 30,
// };

// alert(count(user)); // 2

// function sumSalaries() {
//     let sum = 0;
//     for (let value of Object.values(salaries)) {
//         sum = sum + value;
//     }
//     return sum;
// }

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// alert(sumSalaries(salaries));

// // let messages = [
// //     { text: "Hello", from: "John" },
// //     { text: "How goes?", from: "John" },
// //     { text: "See you soon", from: "Alice" },
// // ];

// let messages = { text: "Hello", from: "John" };

// alert(Object.keys(messages));

// let readMap = new WeakMap();

// //readMap.set(messages[0], new Date(2017, 1, 1));

// if (!readMap.has(messages[0])) {
//     readMap.set(messages[0], new Date(2019, 1, 1));
// }

// alert(readMap.get(messages[0]));

// let map = new Map();

// map.set("name", "John");
// console.log(map);
// let keys = Array.from(map.keys());
// console.log(keys);
// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");

// function aclean(arr) {
//     let map = new Map();

//     for (let word of arr) {
//         // разбиваем слово на буквы, сортируем и объединяем снова в строку
//         let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//         map.set(sorted, word);
//     }
//     console.log(map);
//     return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert(aclean(arr));

// function unique(arr) {
//     return Array.from(new Set(arr));
//     // //console.log(set);
//     // let rez = [];
//     // for (let val of set) {
//     //     rez.push(val);
//     // }
//     // return rez;
// }

// let values = [
//     "Hare",
//     "Krishna",
//     "Hare",
//     "Krishna",
//     "Krishna",
//     "Krishna",
//     "Hare",
//     "Hare",
//     ":-O",
// ];

// alert(unique(values)); // Hare,Krishna,:-O

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2,
// };

// let arr = Array.from(arrayLike); // (*)
// alert(arr);
// alert(arr.pop()); // World (метод работает)
// alert(arr.pop());
// alert(arr);

// function unique(arr) {
//     let uni = [];
//     arr.forEach(function(item) {
//         if (!uni.includes(item)) {
//             uni.push(item);
//         }
//     });
//     return uni;
// }

// let strings = [
//     "кришна",
//     "кришна",
//     "харе",
//     "харе",
//     "харе",
//     "харе",
//     "кришна",
//     "кришна",
//     ":-O",
// ];

// alert(strings.includes("кришна"));

// alert(unique(strings));

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