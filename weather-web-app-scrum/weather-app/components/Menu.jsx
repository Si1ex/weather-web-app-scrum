export function initMenu() {
  const hamburger = document.querySelector('.relative');
  const menu = hamburger.querySelector('.absolute');

  document.addEventListener('click', function (event) {
    const isClickInside = hamburger.contains(event.target);

    if (!isClickInside) {
      menu.classList.add('hidden');
    }
  });

  hamburger.addEventListener('click', function (event) {
    event.stopPropagation();
    menu.classList.toggle('hidden');
  });
}
