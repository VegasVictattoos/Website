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
});
