document.addEventListener('DOMContentLoaded', function() {
  const hamberger = document.querySelector('.hamberger');
  const pages = document.querySelector('.pages');

  hamberger.addEventListener('click', function() {
    pages.classList.toggle('open');
  })
});