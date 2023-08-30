import "./css/main.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "gsap/gsap-core";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import { Timeline } from "gsap/gsap-core";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

import header from "./components/header";
import footer from "./components/footer";
import _ from "lodash";
import {
  scrollToTop,
  textMainEffect,
  fadeInMainImg,
  toTopEl,
  // scrollShowHide,
  aboutText
} from "./js/common";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
// eslint-disable-next-line no-undef
gsap.registerPlugin(SplitText);
gsap.registerPlugin(Timeline);
gsap.registerPlugin(Draggable);
gsap.registerPlugin(Flip);

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.querySelector("header");
  const footerEl = document.querySelector("footer");

  headerEl.innerHTML = header.render();
  textMainEffect();
  fadeInMainImg();

  footerEl.innerHTML = footer.render();

  const footerCopy = document.querySelector(".copy-right");
  const thisYear = new Date().getFullYear();
  footerCopy.innerHTML = `(c) ${thisYear} Ha-eun`;
});

const scrollShowHide = () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //버튼보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else if (window.scrollY < 500) {
    //버튼숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
};

window.addEventListener("scroll", _.throttle(scrollShowHide, 300));
window.addEventListener("scroll", () => {
  const subColor = document.querySelector(".sub-color");
  if (window.scrollY > 600 && window.innerHeight > 600) {
    aboutText();
    subColor.style.color = "#4870FF";
  }
});
toTopEl.addEventListener("click", scrollToTop);

// if (module.hot) {
//   console.log("핫모듈켜짐");
// }
gsap.to(".visual .loop_wrap", {
  xPercent: 80,
  duration: 5,
  repeat: 8,
  ease: "none"
});

new Swiper(".personal .swiper-container", {
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".personal .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".personal .swiper-prev",
    nextEl: ".personal .swiper-next"
  }
});
