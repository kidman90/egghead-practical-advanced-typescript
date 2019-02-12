function generateId(seed: number) {
  return seed + 5;
  // return seed + '5';
}

// const id: string = generateId(10);

type RType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = RType<typeof generateId>;

lookEntity(generateId(10));

function lookEntity(id: Id) {
  // query DB for entity by ID
}

type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
const arr = [Promise.resolve(true)];

type ExpectedBoolean = UnpackPromise<typeof arr>;
