document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('leadForm');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const preferenceInput = document.getElementById('preference');
  const captchaInput = document.getElementById('captcha');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          menuToggle.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const preference = preferenceInput.value;
    const captcha = captchaInput.value.trim();

    if (!name || !phone || !preference || !captcha) {
      alert('Please complete all fields before submitting.');
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit mobile number.');
      phoneInput.focus();
      return;
    }

    if (captcha !== '7') {
      alert('Captcha answer is incorrect. Please try again.');
      captchaInput.focus();
      return;
    }

    alert('Thank you! Your request has been received. We will contact you shortly.');
    form.reset();
  });
});
