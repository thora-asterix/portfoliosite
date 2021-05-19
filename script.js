const aboutModal = document.querySelector("#about-modal");
const openModal = document.querySelector("#about-btn");
const closeModal = document.querySelector("#close-modal");
const menuModal = document.querySelector(".menu-modal");
const openMenu = document.querySelector(".menu-button");
const closeMenu = document.querySelector(".close-menu-modal");
const menuItems = document.querySelectorAll(".menu-item");



openMenu.addEventListener('click', ()=>{
  menuModal.style.display = 'block';
})

closeMenu.addEventListener("click", () => {
  menuModal.style.display = "none";
})

openModal.addEventListener("click", () => {
  aboutModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  aboutModal.style.display = "none";
});

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    item.addEventListener('click', (e)=> {
      menuModal.style.display = 'none';
    })
  })
})


const animation1 = gsap.timeline();

gsap.registerPlugin(ScrollTrigger);

animation1
  .to(".black-cover-animation", {
    width: 0,
    x: -50,
    zindex: -1,
    duration: 1.5,
    ease: "sine",
  })
  .to("#cover-cog", { duration: 1.5, fontSize: "2rem" }, "<")
  .to("#cover-cog", { display: "none" })
  .from(".menu-container", { duration: 0.5, y: -50 })
  .from(".path", { y: -20, opacity: 0, stagger: { each: 0.1 } })
  .from("#landing-heading-1", { opacity: 0, duration: 0.5, x: -800, y: 500 })
  .from("#landing-heading-2", { duration: 0.5, opacity: 0 });

animation1
  .to(".item2", {
    x: "-5rem",
    duration: 3,
    scrollTrigger: {
      trigger: ".container-two",
      start: "top 70%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".projects-container", {
    x: "-12rem",
    duration: 2,
    scrollTrigger: {
      trigger: ".container-three",
      start: "top 98%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".projects-title", {
    y: "12rem",
    duration: 4,
    scrollTrigger: {
      trigger: ".container-three",
      start: "top 98%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".fa-angle-left", {
    x: "3rem",
    opacity: 0,
    duration: 2,
    stagger: { each: 0.1 },
    scrollTrigger: {
      trigger: ".container-three",
      start: "top 98%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".about-container h3", {
    y: "12rem",
    duration: 4,
    scrollTrigger: {
      trigger: ".container-four",
      start: "top 98%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".skills-container ul", {
    x: "2rem",
    duration: 3,
    scrollTrigger: {
      trigger: ".container-five",
      start: "top 98%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".skills-title h3", {
    y: "12rem",
    duration: 4,
    scrollTrigger: {
      trigger: ".container-five",
      start: "top 98%",
      end: "top 1%",
      scrub: 2,
    },
  })
  .from(".footer-copyright ", {
    scale: 1.4,
    duration: 3,
    scrollTrigger: {
      trigger: ".container-six",
      start: "top 98%",
      end: "top 98%",
      scrub: 2,
    },
  });

 