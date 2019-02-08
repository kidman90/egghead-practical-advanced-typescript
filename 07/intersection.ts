type Cat = IPet2 & IFeline;

// let cat: Cat;
// cat.

interface ICat extends IPet, IFeline { }

interface IPet2 {
  pose(): void;
}
interface IFeline {
  nightvision: boolean;
}
