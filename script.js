// Vegas Vic Tattoos — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Appointment form submission feedback (FormSubmit.co posts normally;
  // this just shows a friendly status message if JS is enabled and the
  // browser stays on page long enough before redirect).
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function () {
      var status = form.querySelector('.form-status');
      if (status) {
        status.style.display = 'block';
        status.textContent = 'Sending your inquiry...';
      }
    });
  }

  // Gentle fade-up reveal for elements marked .reveal as they scroll into view.
  // Progressive enhancement only: elements are already visible without JS
  // (see the no-js fallback below), this just adds the motion.
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    revealEls.forEach(function (el) { el.classList.add('reveal-init'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  }
});
