import "./css/main.css";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Flip from "gsap/Flip";
// import Draggable from "gsap/Draggable";
import header from "./components/header";
import footer from "./components/footer";

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.querySelector("header");
  const footerEl = document.querySelector("footer");

  headerEl.innerHTML = header.render();
  footerEl.innerHTML = footer.render();

  const footerCopy = document.querySelector(".copy-right");
  const thisYear = new Date().getFullYear();
  footerCopy.innerHTML = `(c) ${thisYear} Ha-eun`;

  // gsap.to()... infinity and beyond!
  // For more check out greensock.com
  let device_width = window.innerWidth;
  if (device_width > 576) {
    let char_come = gsap.utils.toArray(".title-anim");

    char_come.forEach(char_come => {
      // eslint-disable-next-line no-undef
      let split_char = new SplitText(char_come, {
        type: "chars, words",
        lineThreshold: 0.5
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: char_come,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none"
        }
      });
      tl2.from(split_char.chars, {
        duration: 0.8,
        y: 70,
        autoAlpha: 0,
        stagger: 0.03
      });
    });
  }
});

if (module.hot) {
  console.log("핫모듈켜짐");
}
