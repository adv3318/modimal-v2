import Swiper from "swiper/bundle"

const swiper = () => {
  new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 16,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  })
}

export default swiper
