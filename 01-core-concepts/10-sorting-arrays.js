// Sort an array of numbers

const sortNumbers = (arr) => arr.toSorted((a, b) => a - b);

const numbers = [3, 2, 1];
console.log(sortNumbers(numbers));
console.log(numbers);

// Sort array of objects by author's lastname;
const sortByAuthorLastName = (books) =>
  books.toSorted((book1, book2) => {
    const name1 = book1.author.split(' ').at(-1);
    const name2 = book2.author.split(' ').at(-1);

    return name1.localeCompare(name2);
  });

const books = [
  { name: 'Harry Potter', author: 'Joanne Rowling' },
  { name: 'Warcross', author: 'Marie Lu' },
  { name: 'The Hunger Games', author: 'Suzanne Collins' },
];
console.log(sortByAuthorLastName(books));
console.log(books);
