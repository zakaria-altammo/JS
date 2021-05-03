/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var passLength = document.getElementById("pass-one").maxLength = 10;
    var display = document.getElementById('pass-one');
    var counter = document.getElementById('counter');
    display.addEventListener("input", E => {
      counter.innerHTML = display.value.length + "/10";
    });

})();
