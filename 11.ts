interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}

interface NumberContainer {
  value: number;
  nearestPrime: number;
  round(): number;
}

type Item<T> = {
  id: T,
  container: T extends string ? StringContainer : NumberContainer;
};

// let item: Item<string> = {
let item: Item<number> = {
  // id: 'a23d',
  id: 123,
  container: null
};

// item.container.format();
// item.container.round();

type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

interface Book {
  id: string;
  tableOfContents: string[];
}

interface Tv {
  id: number;
  diagonal: number;
}

interface IItemService {
  // getItem(id: string): Book;
  // getItem(id: number): Tv;
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv;
}

let itemService: IItemService;

const book = itemService.getItem('10');
const tv = itemService.getItem(10);
// const tv = itemService.getItem(true);
