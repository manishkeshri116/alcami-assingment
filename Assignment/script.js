const accordions = document.querySelectorAll(".accordion");

accordions.forEach((acc) => {
  acc.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    this.classList.toggle("active");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      document.querySelectorAll(".panel").forEach(p => p.style.maxHeight = null);
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});



       
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    searchIcon.addEventListener('click', () => {
      searchBox.classList.toggle('hidden');
    });



const counters = document.querySelectorAll('.stat-value');
let started = false;

function animateCounters() {
  if (started) return;

  const section = document.querySelector('.stats-container');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight) {
    started = true;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = target / 60;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = `${Math.floor(current)}%`;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = `${target}%`;
        }
      };

      updateCounter();
    });
  }
}

window.addEventListener('scroll', animateCounters);
