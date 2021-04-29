/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var response = true;
    while (response == true){

    var age = prompt("How old are you?");

    var gender = prompt("What is your gender?");

    var town = prompt("where do you living?");

    var r = confirm("Age:" + age + "\nGender:" + gender + "\ntown:" + town);
        if (r == true) {
          response = false;
        } else {

        }
}

    // your code he

})();
