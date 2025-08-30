
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.2)';
    link.style.transition = '0.3s';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});


const heroText = document.querySelector('.hero-text');
const heroImg = document.querySelector('.hero-img img');

window.addEventListener('load', () => {
  heroText.style.opacity = 0;
  heroText.style.transform = 'translateX(-50px)';
  heroImg.style.opacity = 0;
  heroImg.style.transform = 'translateY(-50px)';

  setTimeout(() => {
    heroText.style.transition = 'all 1.2s ease-out';
    heroText.style.opacity = 1;
    heroText.style.transform = 'translateX(0)';

    heroImg.style.transition = 'all 1.2s ease-out';
    heroImg.style.opacity = 1;
    heroImg.style.transform = 'translateY(0)';
  }, 300);
});


const sections = document.querySelectorAll('section');

function animateSectionsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'all 1s ease-out';
    } else {
      section.style.opacity = 0;
      section.style.transform = 'translateY(50px)';
    }
  });
}

window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('load', animateSectionsOnScroll);


document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const skillFills = document.querySelectorAll(".fill");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function animateSkills() {
    if (isInViewport(skillsSection)) {
      skillFills.forEach((fill) => {
        const width = fill.getAttribute("data-width");
        fill.style.transition = "width 1.5s ease-in-out";
        fill.style.width = width;
      });
      window.removeEventListener("scroll", animateSkills);
    }
  }

  skillFills.forEach((fill) => fill.style.width = "0%");
  window.addEventListener("scroll", animateSkills);
  animateSkills(); 
});


const contactElements = document.querySelectorAll(
  '.contact-heading, .contact-subtext, .contact-text'
);

function animateContact() {
  const triggerBottom = window.innerHeight / 1.2;

  contactElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateContact);
window.addEventListener('load', animateContact);

const aboutImg = document.querySelector('.about-page .image img');

function animateAboutImage() {
  const triggerBottom = window.innerHeight * 0.85;
  const imgTop = aboutImg.getBoundingClientRect().top;

  if (imgTop < triggerBottom) {
    aboutImg.style.opacity = 1;
    aboutImg.style.transform = 'scale(1)';
    aboutImg.style.transition = 'all 1s ease-out';
  } else {
    aboutImg.style.opacity = 0;
    aboutImg.style.transform = 'scale(0.8)';
  }
}

window.addEventListener('scroll', animateAboutImage);
window.addEventListener('load', animateAboutImage);
