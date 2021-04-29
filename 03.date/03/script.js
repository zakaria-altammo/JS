/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click",function () {
      var day = document.getElementById("dob-day").value;
      var month = document.getElementById("dob-month").value;
      var year = document.getElementById("dob-year").value;
      var dob = new Date(year, month, day);
      var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format
        var age_dt = new Date(month_diff);

        //extract year from date
       var birthYear = age_dt.getUTCFullYear();

        //now calculate the age of the user
        var age = Math.abs(birthYear - 1970);

        //display the calculated age
        alert("Age of the date entered: " + age + " years");
    })
})();
