const MenuBurger = () => {
  const menuBurgerBtn = document.querySelector(".menu-burger__btn")
  const menu = document.querySelector(".menu")

  const toggleMenu = () => {
    menuBurgerBtn.classList.toggle("is-active")
    menu.classList.toggle("menu-closed")
    document.documentElement.classList.toggle("is-lock")
  }

  menuBurgerBtn.addEventListener("click", toggleMenu)
}

export default MenuBurger
