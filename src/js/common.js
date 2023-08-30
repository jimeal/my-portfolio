import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "gsap/gsap-core";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import { Timeline } from "gsap/gsap-core";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Draggable);
gsap.registerPlugin(Flip);
gsap.registerPlugin(Timeline);

export const toTopEl = document.querySelector("#to-top");
export const fadeEls = document.querySelectorAll(".fade-in");

export const textMainEffect = () => {
  let mySplitText;
  let tl = gsap.timeline();

  gsap.set(".visual__content", { autoAlpha: 1 });
  // eslint-disable-next-line no-undef
  mySplitText = new SplitText("h2", { type: "chars" });

  tl.from(mySplitText.chars, {
    opacity: 0,
    y: 50,
    ease: "back(4)",
    delay: 1.5,
    stagger: {
      from: "end",
      each: 0.05
    }
  });
};

export const fadeInMainImg = () => {
  gsap.to(fadeEls, 1, {
    delay: 0.5 * 0.7,
    opacity: 1
  });
};

export const aboutText = () => {
  let tl = gsap.timeline(),
    // eslint-disable-next-line no-undef
    mySplitText = new SplitText("#quote", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

  gsap.set("#quote", { perspective: 400 });

  tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01
  });
};

export const scrollToTop = () => {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
};
