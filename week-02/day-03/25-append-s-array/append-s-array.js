'use strict';

// - Create a variable named `animals`
//   with the following content: `["dog", "cat", "kitten"]`
// - Add all elements an `"s"` at the end
// - try to use built in functions instead of loops

var animal = ["dog", "cat", "kitten"];

console.log(
    animal.map(function(u, i) {
        return u += 's';
    })
)