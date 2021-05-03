/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let img = document.querySelector('img');
    let start = img.src;
    let hover = img.getAttribute('data-hover'); //specified in img tag

    img.onmouseover = () => { img.src = hover; }
    img.onmouseout = () => { img.src = start; }  //to revert back to start

})();
