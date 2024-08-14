export const pipe = (...fns) =>
  fns.reduce((acc, cur) => (arg) => cur(acc(arg)));
