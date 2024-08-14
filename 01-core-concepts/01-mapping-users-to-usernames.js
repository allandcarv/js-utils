/**
 * 1. Get array of names from given array of users
 * 2. Get back only active users.
 * 3. Sort users by age descending
 */

import { pipe } from '../00-utils/01-pipe.js';

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: 'John',
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: 'Mike',
    isActive: false,
    age: 30,
  },
];

const getUserName = (users) => users.map((user) => user.name);

const getActiveUsers = (users) => users.filter((user) => user.isActive);

const sortUsersByAge = (users, order = 'asc') =>
  users.toSorted((userA, userB) =>
    order === 'asc' ? userA.age - userB.age : userB.age - userA.age
  );

console.log(pipe(getActiveUsers, sortUsersByAge, getUserName)(users));
