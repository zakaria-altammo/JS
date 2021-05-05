/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const target = document.getElementById('target');
    const button = document.getElementById('run');

    button.addEventListener("click", () => {
             getHeroId();
           });
    async function getHeroId() {
        const input = document.getElementById('hero-id').value;
        const response = await fetch(`http://localhost:3000/heroes?id=${input}`);
        const data = await response.json();
        const heroId = data[0];
        createTampl(heroId);
    }
   function createTampl(heroId){

       const tpl = document.getElementById('tpl-hero');
       const clon = tpl.content.cloneNode(true);

       const list = clon.querySelector('.hero');
       const em = clon.querySelector('.alter-ego');
       const para = clon.querySelector('.powers');
       const heroName = clon.querySelector('.name');
       heroName.innerHTML = heroId.name;
       em.innerHTML = heroId.alterEgo;
       para.innerHTML = heroId.abilities;
       target.appendChild(clon);


   }
})();

