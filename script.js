/* =========================
   MOBILE MENU
========================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* =========================
   CLOSE MENU AFTER CLICK
========================== */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* =========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".stat-number");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.dataset.target);

    let current = 0;
    const increment = target / 80;

    const updateCounter = () => {
      current += increment;

      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
    observer.unobserve(counter);
  });
}, {
  threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));

/* =========================
   NEWSLETTER
========================== */

document
  .getElementById("newsletterForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    const email = this.querySelector("input").value;

    alert(
      `Thanks for joining us! We'll send conservation updates to ${email}.`
    );

    this.reset();
  });
