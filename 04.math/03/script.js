/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const result = [...Array(100)].map((_, i) => {
        if (i % 15 === 0) return 'fizzbuzz';
        if (i % 5 === 0) return 'buzz';
        if (i % 3 === 0) return 'fizz';
        return i;
    });
    console.log(...result);
    // your code here

})();
