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

class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.yearOfPublication = year;
    this.genre = genre;
  }

  describe() {
    console.log(
      `Книга "${this.title}" (${this.genre}) автора ${this.author}, ${this.yearOfPublication} рік.`
    );
  }
  isClassic() {
    return this.yearOfPublication < 2000;
  }
}

const book1 = new Book('1984', 'George Orwell', 1949, 'антиутопія');
const book2 = new Book('Собака Баскервіля', 'Konane Doile', 2025, 'детектив');
const book3 = new Book('Навчитися вчити', 'Барбара Оклі', 2008, 'психологія');
const book4 = new Book(
  'Godfather',
  'Mario Puzo',
  1960,
  'триллер, детектив, драма'
);

const library = [book1, book2, book3, book4];

function printLibrary(library) {
  for (const book of library) {
    book.describe();
    if (book.isClassic()) {
      console.log('Класика: Так\n');
    } else {
      console.log('Класика:  Ні\n');
    }
  }
}
printLibrary(library);
