document.addEventListener('DOMContentLoaded', () => {
   
  window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 150) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});


document.querySelectorAll('.slider').forEach(slider => {
  slider.addEventListener('input', function() {
    const label = this.nextElementSibling;
    label.textContent = `${this.value}%`;
  });
});


let scrollTimeout;

window.onscroll = function() {
    const navbar = document.getElementById('navbar');

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(function() {
        if (window.pageYOffset > 150) {  
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }, 200);  
};


// Skill Progress Bars (Technical Skills)

document.addEventListener("DOMContentLoaded", () => {
  const progressbars = document.querySelectorAll(".percentagem");

  progressbars.forEach((bar) => {
    const width = bar.getAttribute("data-width"); 
    bar.style.setProperty("--target-width", width); 
  });
});




function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
document.addEventListener('click', function(event){
    const navLinks = document.querySelectorAll("#nav-links li a");  
    const navLinks_container = document.getElementById("nav-links");

    if (navLinks_container.contains(event.target)) {
        
        navLinks_container.classList.remove("show");
    }
});




