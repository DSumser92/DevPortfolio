/* --- custom typewriter effect --- */

var typed = new Typed(".text", {
    strings:["Full Stack Developer...", "Frontend Developer...", "Software Developer...","Web Developer...","Back-end Developer...","UI/UX Developer...", "Database Administrator..."], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




/* --- custom attibutes bars --- */
const bar = document.querySelector(".bar1");

setTimeout(() => {
  bar.style.setProperty("--progress", "100%");
}, 500);