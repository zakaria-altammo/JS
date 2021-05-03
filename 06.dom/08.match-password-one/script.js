/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    document.getElementById("run").addEventListener("click", E =>{
        var password = document.getElementById('pass-one');
        var confirm  = document.getElementById('pass-two');

        var good_color = "green";
        var bad_color = "red";
        // compare the value in password filed and confirm filed
        if(password.value === confirm.value) {
            password.style.borderColor = good_color;
            confirm.style.borderColor = good_color;

        }else if(password.value !== confirm.value){
            password.style.borderColor = bad_color;
            confirm.style.borderColor = bad_color;
        }
    });

})();
