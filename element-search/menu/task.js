const menuLinks = Array.from(document.querySelectorAll(".menu__link"));

menuLinks.forEach(link => {
  link.onclick = function() {
    const menuSub = link.closest('.menu__item').querySelector('.menu_sub');

    if (menuSub) {
      const activeMenu = document.querySelector('.menu_active');
      menuSub.className = "menu menu_sub menu_active";

      if (activeMenu) {                
        activeMenu.className = "menu menu_sub";
      }

      return false;
    }
  }
})