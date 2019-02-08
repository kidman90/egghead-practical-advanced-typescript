interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  // age2: number;
  eat(): void;
  speak(): string;
};

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias = { age: 5, eat: () => console.log('omomom'), speak: () => 'roar' };

animalInterface = animalTypeAlias;

export { };
