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

const user = {
  name: 'Alice',
  age: 20,
  hobby: 'html',
  premium: true,
};

const user2 = {
  name: 'Artem',
  age: 40,
  hobby: 'css',
  premium: false,
};

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
