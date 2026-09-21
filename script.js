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
   FLIP EFFECT CARDS
========================== */

const flipCards = document.querySelectorAll(".effect-card");

flipCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});

/* =========================
   CAUSES CAROUSEL
========================== */

const causeSlides = document.querySelectorAll(".causes-slide");
const statusSlides = document.querySelectorAll(".status-slide");
const causeCurrent = document.getElementById("causesCurrent");
const causePrevious = document.getElementById("causesPrevious");
const causeNext = document.getElementById("causesNext");
let causeIndex = 0;

const showCauseSlide = nextIndex => {
  causeSlides[causeIndex].classList.remove("is-active");
  if (statusSlides.length) statusSlides[causeIndex].classList.remove("is-active");
  causeIndex = (nextIndex + causeSlides.length) % causeSlides.length;
  causeSlides[causeIndex].classList.add("is-active");
  if (statusSlides.length) statusSlides[causeIndex].classList.add("is-active");
  causeCurrent.textContent = String(causeIndex + 1).padStart(2, "0");
};

if (causeSlides.length) {
  const nextCauseSlide = () => showCauseSlide(causeIndex + 1);

  causeNext.addEventListener("click", nextCauseSlide);
  causePrevious.addEventListener("click", () => showCauseSlide(causeIndex - 1));
  setInterval(nextCauseSlide, 5000);
}

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
