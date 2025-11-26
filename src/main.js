import Swiper from "swiper/bundle"
import "virtual:svg-icons-register"
import "./styles/index.js"

new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 24,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
})
