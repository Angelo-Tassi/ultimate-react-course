const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// function getBook(id) {
//   return data.find((d) => d.id === id);
// }
// let book = getBook(2);
// const { author, genres, title, pages, hasMovieAdaptation, publicationDate } =
//   book;
// const newGenres = [...genres, 'epic fantasy'];
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   moviePublicationDate: '2001-12-19',
// };
// updatedBook;

// // arrow functions Get year
// const getYear = (str) => str.split('-')[0];
// console.log(getYear(publicationDate));
// const getTitle = (str) => str.split('-')[0];
// console.log(getTitle(title));

// const summary = `${title} is a ${pages} pages long book by ${author} published in ${getYear(
//   publicationDate
// )}`;
// summary;

// // Ternaries instead of if -else
// const checkPages = pages > 1000 ? 'over a thousand' : ' less than a thousand';
// checkPages;

// console.log(`the book has ${checkPages} pages`);
// console.log(
//   `the book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`
// );
// // Short circuiting and logical operators &&||??
// // falsy like (0,'',null,undefined) the operator &&(and) returns the value after it,only if the statment before it is true, if falsy(false)it returns the value before.
// console.log(true && 'some string');
// console.log(false && 'some string');
// console.log(0 && 'some string');
// console.log(`${hasMovieAdaptation && 'The book has a movie'}`);

// // operator ||(or) works the opposite of &&

// console.log(true || 'some string');
// console.log(false || 'some string');
// console.log(0 || 'some string');
// console.log(`${hasMovieAdaptation || 'The book has a movie'}`);
// const TranslationCheck = book.translations.spanish || 'NOT TRANSLATED';
// TranslationCheck;

// // ?? works exactly like || but works only if first value is null or undefined, not 0 or empty (wich leads to errors in some cases)

// console.log(0 ?? 'some string');
// console.log(null ?? 'some string');

// // optional chaining
// // if data returns as undefined we can use ? and ?? to filter and assign a default value of 0 avoid errors and getting a counter in any case
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   // this book has no reviews count on librarything, so using optional chaining ? and?? we aavoid undefined and errors simply adding a value of 0 to the counter
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book));
// // book 1 has librarything reviews instead
// book = getBook(1);
// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   // this book has reviews count on librarything, so using optional chaining ? and?? we avoid undefined and errors simply adding a value of 0 to the counter
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   librarything;
//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book));
function getBooks() {
  return data;
}
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  // this book has no reviews count on librarything, so using optional chaining ? and?? we aavoid undefined and errors simply adding a value of 0 to the counter
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
const books = getBooks();
// Map array method loops over an array and returns each element with some operation applied to it, it returns a new array.
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

// when using curly braces with arrow functions we are  declaring the second part of the function in classic mode
// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
// it's completely fine
// but to return an object, the correct way to write this function in arrow mode is with parenthesis and then curly braces.
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

// filter array method loops over the array and returns for each value a condition of true or false. If true the element returns, if false the element will get filtered.Filter returns a new array that can also be filtered as shown below.

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes('adventure'))
  .map((book) => book.title);
adventureBooks;

// reduce method uses an accumulator to sum each value of each object in the array returning just one value.
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// sort array method. using the minus operator and the valuee a returns first the lower value in the array and then the higher values. The contrary happens using value b, minus, then a.
//the sort method mutates the original array (sortMinus) but we do not want that so we need to first copy the original array WITH SLICE and then apply the sort method.

const sortMinus = [3, 7, 1, 9, 6];
// original array above
const sortedMinus = sortMinus.sort((a, b) => a - b);
sortedMinus;
// (altered original array below)
sortMinus;

// we need to first copy the original array WITH SLICE and then apply the sort method as shown below.

const sortPlus = [3, 7, 1, 9, 6];
// original array above
const sortedPlus = sortPlus.slice().sort((a, b) => b - a);
sortedPlus;
// (original array below is unchanged)
sortPlus;

// sorting objects
const sortByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortByPages;
