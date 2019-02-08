// class Library {
//   titles: string[] | undefined;
//   constructor() { }
// }
// class Library {
//   titles: string[];
//   constructor(underRenovation?: boolean) {
//     if (!underRenovation) {
//       this.titles = [
//         'What if?',
//         'Flow'
//       ];
//     } else {
//       this.titles = [];
//     }
//   }
// }
class Library {
    constructor() { }
}
const library = new Library();
// sometime later & elsewhere in our codebase...
// if (library.titles) {
//   const shortTitles = library.titles.filter(title => title.length < 5);
// }
const shortTitles = library.titles.filter(title => title.length < 5);
