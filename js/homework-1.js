// const myName = 'Yaroslav';
// const currentYear = 2025;
// const isStudent = true;

// console.log(myName);
// console.log(currentYear);
// console.log(isStudent);

// const birthYear = 1991;
// const currentYear = 2025;
// const age = currentYear - birthYear;
// console.log(age);
// console.log(`Мені ${age} роки`);

// const age = 34;

// if (age >= 18) {
//   console.log('Ти дорослий');
// } else {
//   console.log('Ти ще неповнолітній');
// }

// const name = 'Ярослав';
// if (name === 'Ярослав' && age >= 30) {
//   console.log('Привіт, досвідчений Ярослав!');
// } else {
//   console.log('Привіт, гість!');
// }
// console.log(Number('5'));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(typeof Number(undefined));
// console.log(typeof NaN);
// console.log(Number('Student'));
// console.log(Number('25students'));

// NaA - Not a Number
// Ми можемо використовувати замість Number звичайну дію перед числом і воно автоматично перетворюватиме у Number * / + -

// Оператори:
// > < = >= <=

// console.log(5 > 4);
// console.log(10 < 12);
// console.log(10 >= '7');
// console.log('2' >= '12');
// console.log('Student' < 'Student');
// //  однакова кількість літер, тому юнікод видаватиме рівне значення і в консолі виведення рахуватиметься, як false.
// console.log('Student' < 'student');
// // виведення в консолі буде true оскільки по юнікоду маленька літера матиме перевагу над великою.

// console.log('6' == 6);
// // в консолі буде true оскільки це не строге порівняння, і стрінга переведеться в номер.

// console.log(4 === '4');
// // в консолі буде false адже це строге порівняння, і в такому випадку number буде number і string буде string, тому перетворення не відбуватиметься.

// console.log(undefined == null);
// console.log(undefined === null);

// let elementWidth = '50m';
// // console.log(Number(elementWidth));
// console.log(Number.parseInt(elementWidth));
// let elementWidth = '270.54px';
// console.log(Number.parseFloat(elementWidth));

// const value = 28.99;
// console.log(Math.floor(value));

// const value = 2.01;
// console.log(Math.ceil(value));

// const value = 3.51;
// console.log(Math.round(value));

// function calculateStudent({ groupeFirst, groupeSecond }) {
//   const sum = groupeFirst + groupeSecond;
//   console.log(sum);
// }

// calculateStudent({ groupeFirst: 10, groupeSecond: 30 });

// const personVitalii = 8 * 10 * 24;
// const personIhor = 5 * 12 * 26;
// const personSvitlana = 8 * 9 * 7;
// const personAnna = 13 * 13 * 13;

// function caclulateSalary({ pricePerHour, hour, days }) {
//   const salary = pricePerHour * hour * days;
//   return salary;
// }

// console.log(caclulateSalary({ pricePerHour: 10, hour: 8, days: 10 }));

// function calcBMI({ w, h }) {
//   let numHeight = h.replace(',', '.');
//   let numWeight = w.replace(',', '.');

//   const weight = Number.parseFloat(numWeight);
//   const height = Number.parseFloat(numHeight);

//   const bmi = weight / height ** 2;

//   return bmi.toFixed(1);
// }
// const bmi = calcBMI({ w: '88,3', h: '1.75' });
// console.log(bmi);

// function greet(name, age) {
//   if (age >= 18) {
//     return `Привіт, ${name}. Ти дорослий.`;
//   } else {
//     return `Привіт, ${name}. Ти ще неповнолітній.`;
//   }
// }

// const message = greet('Yaroslav', 34);
// console.log(message);

// const films = ['Batman', 'Superman', 'Wonderwomen', 'Aquaman'];

// console.log(films[0]);
// console.log(films[films.length - 1]);

// films.push('Anakonda');
// console.log(films);

// films.pop();
// console.log(films);

// for (let i = 0; i < films.length; i++) {
//   console.log(`Я люблю фільм: ${films[i]}`);
// }

// const book = {
//   title: 'Собака Баскервіля',
//   author: 'Konane Doile',
//   yearOfPublication: 2025,
//   genre: 'детективи',
//   isBestseller: true,
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.genre);
// console.log(book);
// console.log(
//   `Назва: ${book.title}, Жанр: ${book.genre}, Автор: ${book.author}, Рік виходу книги: ${book.yearOfPublication}`
// );

// const book = {
//   title: 'Собака Баскервіля',
//   author: 'Konane Doile',
//   yearOfPublication: 2025,
//   genre: 'детективи',
//   describe() {
//     console.log(
//       `Назва: ${this.title}, Жанр: ${this.genre}, Автор: ${this.author}, Рік виходу книги: ${this.yearOfPublication}`
//     );
//   },
// };

// book.describe();
// let clientCounter = 23;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// class Book {
//   constructor(title, author, year, genre) {
//     this.title = title;
//     this.author = author;
//     this.yearOfPublication = year;
//     this.genre = genre;
//   }

//   describe() {
//     console.log(
//       `Книга "${this.title}" (${this.genre}) автора ${this.author}, ${this.yearOfPublication} рік.`
//     );
//   }
//   isClassic() {
//     return this.yearOfPublication < 2000;
//   }
// }

// const book1 = new Book('1984', 'George Orwell', 1949, 'антиутопія');
// const book2 = new Book('Собака Баскервіля', 'Konane Doile', 2025, 'детектив');
// const book3 = new Book('Навчитися вчити', 'Барбара Оклі', 2008, 'психологія');
// const book4 = new Book(
//   'Godfather',
//   'Mario Puzo',
//   1960,
//   'триллер, детектив, драма'
// );

// const library = [book1, book2, book3, book4];

// function printLibrary(library) {
//   for (const book of library) {
//     book.describe();
//     if (book.isClassic()) {
//       console.log('Класика: Так\n');
//     } else {
//       console.log('Класика:  Ні\n');
//     }
//   }
// }
// printLibrary(library);

// const planets = ['Earth', 'Mars', 'Venus'];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// напиши функцію add для складання довільної кількості аргументів (чисел)

// function add() {
//   const arr = Array.from(arguments);
//   let sum = 0;

//   for (const number of arr) {
//     sum += number;
//   }
//   return sum;
// }
// console.log(add(1, 6, 7, 10));

// напиши функцію calAvarage() яка приймає довільну кількість аргументів і повертає їхнє
// середнє значення. Усі аргументи будуть лише числами.

// function calAvarage() {
//   const arr = Array.from(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum / arguments.length;
//   // const avarage = sum / arguments.length;
//   // return avarage;
// }
// console.log(calAvarage(5, 9, 15, 20));

// Напиши функцію LogItems(items), яка отримує масив та використовує цикл, який для кожного елемента масиву
// буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);

// напиши функцію printInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones
// будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// function printInfo(names, phones) {
//   const namesArr = names.split(',');
//   const phonesArr = phones.split(',');
//   for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
//   }
// }
// printInfo(
//   'Yaroslav,Weronika,Klichko,Wallsh',
//   '999999999999,8888888888,7777777777,55555555555'
// );

// напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(min) {
//   const houers = Math.floor(min / 60);
//   const minutes = min % 60;
//   const doubleHouers = String(houers).padStart(2, 0);
//   const doubleMinutes = String(minutes).padStart(2, 0);
//   console.log(`${doubleHouers} : ${doubleMinutes}`);
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// використання циклу for...in для підбиття підсумку відгуків

// const feadback = {
//   good: 5,
//   natural: 3,
//   bad: 10,
// };

// let total = 0;

// for (const sum in feadback) {
//   total += feadback[sum];
// }

// console.log(total);

// const keys = Object.keys(feadback);

// for (const key of keys) {
//   total += feadback[key];
// }

// console.log(total);

// const values = Object.values(feadback);

// for (const value of values) {
//   total += value;
// }
// console.log(total);

// const user = {
//   name: 'Alice',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// const user2 = {
//   name: 'Artem',
//   age: 40,
//   hobby: 'css',
//   premium: false,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key} : ${user[key]}`);
// }

// function foo(obj) {
//   obj.mood = 'happy';
//   obj.hobby = 'skydiving';
//   obj.premium = false;

//   const keys = Object.keys(obj);

//   for (const key of keys) {
//     console.log(`${key} : ${obj[key]}`);
//   }
// }

// foo(user);
// foo(user2);

// у нас є обєкт, де зберігаються зарплати нашої команди. Напишіть підсумування всіх зарплат і збережіть результат у змінній sum.
// Повинно вийти 390. Якщо обєкт salaries порожній, то результат має бути 0.

// const salaries = {
//   Petro: 160,
//   Yura: 150,
//   Katarina: 80,
// };

// function summa(obj) {
//   const values = Object.values(obj);
//   let sum = 0;

//   for (const item of values) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(summa(salaries));
// const friends = [
//   { name: 'Ross', online: false },
//   { name: 'Joey', online: true },
//   { name: 'Chandler', online: false },
//   { name: 'Phoebe', online: true },
//   { name: 'Monica', online: true },
//   { name: 'Rechel', online: false },
// ];

// Пошук друга за іменем

// function findByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name.toLowerCase() === friendName.toLowerCase()) {
//       return friend;
//     }
//   }

//   return 'Not found';
// }

// console.log(findByName(friends, 'Joey'));

// отримуємо імена всіх друзів

// function getAllNames(allFriends) {
//   const names = [];
//   for (const item of allFriends) {
//     names.push(item.name);
//   }
//   return names;
// }
// console.log(getAllNames(friends));
// console.table(friends);

// отримуємо імена тільки тих друзів, які зараз онлайн

// const friends = [
//   { name: 'Ross', online: false },
//   { name: 'Joey', online: true },
//   { name: 'Chandler', online: false },
//   { name: 'Phoebe', online: true },
//   { name: 'Monica', online: true },
//   { name: 'Rechel', online: false },
// ];

// function getOnlineFriends(arr) {
//   const names = [];

//   for (const item of arr) {
//     if (item.online) {
//       names.push(item.name);
//     }
//   }
//   return names;
// }

// console.log(getOnlineFriends(friends));

// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
// Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// calcTotalPrice(arr, stoneName){
//   let sum = 0;
//   for(const item of arr){
//     if(item.name === stoneName){
//       sum += item.price * item.quantity;
//     }
//   }
// return sum;

// }
// console.log(calcTotalPrice(stones, "Сапфір"));

// const playlist = {
//   name: 'My pleylist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(arg) {
//     playlist.name = arg;
//   },
// };

// const playlist2 = {
//   name: 'Sport playlist',
//   rating: 4,
//   track: ['track-4', 'track-5'],
// };

// playlist2.changeName2 = playlist.changeName;
// playlist2.changeName2('black playlist');

// changeName(arg){
//   console.log(this);
//   this.name = arg;

// }

// playlist2.changeName2("black playlist");
// console.log("playlist2", playlist2);

// const playlist = {
//   name: 'My pleylist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   changeName(arg) {
//     this.name = arg;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName('new playlist');
// playlist.addTrack('track-4');
// playlist.updateRating(4);
// console.log(playlist.getTrackCount());

// console.log(playlist);

// function calc(a, b, callback) {
//   const res = callback(a, b);
//   const result = res + '!';
//   console.log(result);
// }
// function calc1(a, b) {
//   const res = a - b;
//   const result = res + '!';
//   console.log(result);
// }

// calc(2, 3);
// calc1(100, 50);

// calc(2, 3, function (a, b) {
//   return a + b;
// });
// calc(100, 80, function (lalala, tototo) {
//   return lalala - tototo;
// });
// напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елементу масиву
// each повинна повернути новий масив, елементами якого будуть результати виклику коллбек.

// function each(array, callback) {
//   const newArr = [];
//   for (const item of array) {
//     newArr.push(callback(item));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 55, 90, 99, 300], function (value) {
//     return value * 2;
//   })
// );

// console.log(
//   each([64, 55, 90, 99, 300], function (value) {
//     return value / 2;
//   })
// );

// стрілочна функція:

// function foo(a, b, c) {
//   return a + b + c;
// }

// const fooArrow = (a, b, c) => {
//   return a + b + c;
// };

// console.log(fooArrow(10, 40, 50));

// console.log(foo(1, 2, 3));

// // неявне повернення:

// const fooArrow = (a, b, c) => a + b + c;

// console.log('fooArrow', fooArrow(33, 55, 99));

// const calculateAvarage = (...numbers) => {
//   let total = 0;

//   numbers.forEach(num => {
//     total += num;
//   });
//   return total / numbers.length;
// };

// console.log(calculateAvarage(1, 5, 3, 7, 10));
// console.log(calculateAvarage(1, 11, 3, 45, 10));
// console.log(calculateAvarage(1, 60, 3, 88, 20));

//  метод filter

// const numbers = [5, 89, 33, 25];

// const res = numbers.filter(item => item > 10);

// console.log(res);

/**
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, online: true },
//   { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
//   { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
// ];

// // За ігровим часом

// const result = players.toSorted((a, b) => a.timePlayed - b.timePlayed);
// const result = players.toSorted((a, b) => b.timePlayed - a.timePlayed);

// console.table(result);

/**
 * -------------------------------------
 */
// const allCars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const filterByPrise = (cars, treshold) => {
//   return cars.filter(item => item.price < treshold);
// };

// console.log(filterByPrise(allCars, 30000));

// const getCarsWithType = (array, type) => {
//   return array.filter(item => item.type === type);
// };

// console.log(getCarsWithType(allCars, 'sedan'));

/**
 * Нехай функція getModelsOnSale повертає масив моделей автомобілів,
 * але тільки тих, які зараз на розпродажі.
 */

// const getModelsOnSale = (cars) => {
//     return cars
//         .filter((car) => car.onSale)
//         .map((car) => car.model)
// }

// console.log(getModelsOnSale(allCars));

/**
 * Нехай функція getSortedCarsOnSale повертає масив автомобілів
 * на розпродажі (Властивість onSale), відсортованих за зростанням ціни.
 */

// const getSortedCarsOnSale = (cars) => {
//     return cars
//         .filter((car) => car.onSale)
//         .toSorted((a, b) => a.price - b.price)
// }

// console.log(getSortedCarsOnSale(allCars));

// ---------------------------------------------------------------------------------------------------------------

// Необхідно відфільтрувати студентів, які мають:

// високі бали (від 80 (включно)),
// низькі бали (нижче 50),
// середні бали (від 50 (включно) до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// --------------------------------------- 2

/**
 * Метод find
 */

// const numbers = [6, 19, 34, 85];

// const res = numbers.find(number => number > 10);

// console.log(res);

// const allCars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// шукаємо машину за моделлю

// const getByModel = (array, model) => {
//   return array.find(car => car.model === model);
// };

// console.log(getByModel(allCars, 'Sequoia'));

// шукаємо машину за типом кузова

// const getByType = (array, type) => {
//   return array.find(car => car.type === type);
// };

// console.log(getByType(allCars, 'truck'));

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// -------------------------------------- 3

// every, some

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// чи всі товари є в наявності

// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false

/**
 * Метод some
 *
 */

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// --------------------------------------- 4

/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

// const numbers = [3, 5, 3, 9, 50];

// const total = numbers.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// console.log(total);

// рахуємо загальну зарплату

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// const arr = Object.values(salary);

// const total = arr.reduce((acc, number) => acc + number, 0);
// console.log(total);

// const numbers = [2, 7, 3]

// const total = numbers.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

//  у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// -------------------------------------------------- 5

/**
 * Метод toSorted
 *
 */

// const array = [4, 6 ,9, 15];

// const array = ['a', 'b', 'B', 'A'];

// // const res = array.toSorted((a, b) => a.localeCompare(b));
// const res = array.toSorted((a, b) => b.localeCompare(a));

// console.log(res);

// const array = [4, 6, 9, 15];

// // const res = array.toSorted((a, b) => a - b);
// const res = array.toSorted((a, b) => b - a);

// console.log(res);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// const total = players.reduce((acc, player) => acc + player.timePlayed, 0);
// console.log(total);

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 124, quantity: 3 },
//   { label: 'Lemones', price: 55, quantity: 4 },
// ];

// const result = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

// console.log(result);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// за ігровим часом

// const result = players.toSorted((a, b) => a.timePlayed - b.timePlayed);
// const result = players.toSorted((a, b) => b.timePlayed - a.timePlayed);
// console.log(result);

// ланцюжки методів

// const arr = [1, 5, 89, 3, 66];

// const res = arr.filter(item => item > 2);

// const res1 = res.map(number => number * 3);

// const res2 = res1.toSorted((a, b) => a - b);

// console.log(res2);
// const result = arr
//   .filter(item => item > 2)
//   .map(item => item * 3)
//   .toSorted((a, b) => a - b);

// console.log(result);

// const allCars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];
// нехай функція getModelsOnSail повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі

// const getModelsOnSale = cars => {
//   return cars.filter(car => car.onSale).map(car => car.model);
// };

// console.log(getModelsOnSale(allCars));

// нехай функція getSortedCarsOnSale повертає масив автомобілів, на розпродажі (властивість onSale), відсортованих за зростанням ціни

// const getSortedCarsOnSale = cars => {
//   return cars
//     .filter(item => item.onSale)
//     .toSorted((a, b) => a.price - b.price)
//     .map(item => {
//       return {
//         model: item.model,
//         price: item.price,
//       };
//     });
// };

// console.log(getSortedCarsOnSale(allCars));

// const arr = ['apple,😁', 'orange,😎', 'banana,😊', 'lemon,😉'];

// const obj = arr.reduce((acc, item) => {
//   const arr = item.split(',');

//   const key = arr[0];
//   const value = arr[1];

//   acc[key] = value;
//   return acc;
// }, {});

// console.log(obj);

// function showThis() {
//   console.log('this', this);
//   console.log('userName', this.userName);
// }

// const user = {
//   userName: Petya,
// };

// user.showUserThis = showThis;

// user.showUserThis();
// напишіть метод calcTotalPrice(stoneName), який приймає назву каменю, який розраховує та повертає загальну вартість каменів з таким імям кількістю з властивості stones

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const stone = this.stone.find(item => item.name === stoneName);
//     if (!stone) {
//       return `${stoneName} not found`;
//     }
//     return stone.price * stone.quantity;
//   },
// };
// console.log(chopShop.calcTotalPrice('Sapphire'));
