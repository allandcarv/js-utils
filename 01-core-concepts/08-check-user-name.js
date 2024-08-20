// Check that user with such name exists in array of objects

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
  },
];

const checkUser = (users) => (userName) =>
  users.some((user) => user.name === userName);

const isValidUser = checkUser(users);

console.log(isValidUser('John'));
console.log(isValidUser('Foo'));
