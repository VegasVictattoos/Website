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
  // Progressive enhancement only: elements are already visible without JS.
  // threshold is intentionally tiny (not e.g. 0.15) — a tall block (a long
  // FAQ answer list, a form with a photo column, etc.) may never have 15%
  // of its own height inside the viewport at once, especially on mobile,
  // which would leave it stuck invisible forever. Any sliver of visibility
  // is enough to trigger the reveal here.
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
    }, { threshold: 0.01, rootMargin: '0px 0px -10px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });

    // Safety net: if anything is still hidden after 2.5s (observer glitch,
    // unusual layout, etc.), force it visible rather than let it stay gone.
    setTimeout(function () {
      document.querySelectorAll('.reveal.reveal-init:not(.in-view)').forEach(function (el) {
        el.classList.add('in-view');
      });
    }, 2500);
  }
});
