/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", function () {
        // your code here
        fruits.shift(); {
            console.log(fruits); // remove the fisrt item from the front.
        }
        fruits.pop(); {
            console.log(fruits);  // remove the last item from the end.
        }
        fruits.unshift('Banana'); {
            console.log(fruits); // add 'Banana' to the start of array.
        }
        fruits.push('Kiwi');{
            console.log(fruits);  // add 'Kiwi' to the end of array.
        }

    });
})();
