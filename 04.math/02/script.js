/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        num1 = parseInt(document.getElementById("op-one").value);
        num2 = parseInt(document.getElementById("op-two").value);// perform the operation
        switch (operation) {
            case "addition":
                alert(num1 + num2);
                break;
            case "division":
                alert(num1 / num2);
                break;
            case "substraction":
                alert(num1 - num2);
                break;
            case "multiplication":
                alert(num1 * num2);
                break;
            default:
                alert();
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
