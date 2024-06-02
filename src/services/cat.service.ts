type Cat = {
  name: string;
  age: number;
};

export const getCats = (): Cat[] => {
  return [
    { name: 'Garfield', age: 5 },
    { name: 'Tom', age: 3 },
  ];
};
