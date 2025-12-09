const dropdown = () => {
  const BREAKPOINT = 768 // MOBILE
  const dropdownContainers = document.querySelectorAll("[data-dropdown]")

  const isMobile = () => window.innerWidth <= BREAKPOINT

  // TOGGLE
  const setDropdownState = (dropdown, arrow, isActive) => {
    dropdown?.classList.toggle("is-active", isActive)
    arrow?.classList.toggle("is-active", isActive)
  }

  // CLOSE
  const closeAllDropdowns = () => {
    dropdownContainers.forEach((container) => {
      setDropdownState(container.querySelector(".menu__dropdown"), container.querySelector(".menu__arrow"), false)
    })
  }

  // MAIN
  dropdownContainers.forEach((container) => {
    const dropdown = container.querySelector(".menu__dropdown")
    const trigger = container.querySelector(".menu__trigger")
    const arrow = container.querySelector(".menu__arrow")

    // SKIP
    if (!dropdown || !trigger) return

    // DESKTOP
    container.addEventListener("mouseenter", () => {
      if (!isMobile()) {
        setDropdownState(dropdown, null, true) // стрелку не трогаем
      }
    })

    container.addEventListener("mouseleave", () => {
      if (!isMobile()) {
        setDropdownState(dropdown, null, false)
      }
    })

    // MOBILE

    trigger.addEventListener("click", (e) => {
      if (!isMobile()) return

      e.preventDefault()

      const isOpen = dropdown.classList.contains("is-active")

      // закрываем все перед открытием нового
      closeAllDropdowns()

      if (!isOpen) {
        setDropdownState(dropdown, arrow, true)
      }
    })
  })

  // RESET

  window.addEventListener("resize", () => {
    if (!isMobile()) {
      closeAllDropdowns()
    }
  })
}

export default dropdown
