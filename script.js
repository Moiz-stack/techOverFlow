// Toggle Mobile Menu
const toggleButton = document.getElementById('toggle-button');
const mobileMenu = document.getElementById('mobile-menu');

toggleButton.addEventListener('click', () => {
    // Toggle the mobile navigation
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open'); // Toggle the open class
});
   // Animate elements on scroll
   const elements = document.querySelectorAll('.fade-in');

   const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('fade-in-active');
       }
     });
   });

   elements.forEach(el => observer.observe(el));

// Smooth Scroll Function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

   // GSAP Animation
   window.onload = function () {
    gsap.to(".hero-title", { duration: 1, y: 0, opacity: 1, ease: "power4.out" });
    gsap.to(".hero-subtitle", { duration: 1, y: 0, opacity: 1, ease: "power4.out", delay: 0.5 });
};
  
  // Form Validation Function
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields");
      return false;
    }
  
    // Email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
  
    alert("Message sent successfully!");
    return true;
  }
  
  // Hover Effect for Service Cards
  function hoverEffect(card) {
    card.style.transform = "scale(1.05)";
    card.style.transition = "transform 0.3s ease-in-out";
  }
  
  function removeHoverEffect(card) {
    card.style.transform = "scale(1)";
  }
  



  