import * as $ from 'jquery';

interface Foo {
  a: string;
}

interface Foo {
  b: string;
}

let foo: Foo;

// type Bar = {
//   a: string;
// }

// type Bar = {
//   b: string;
// }

$.fn.extend({
  hideChildren: function () {
    // ...
  }
});

$('test').hideChildren();
