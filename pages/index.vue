<template>
  <div>
    <div
      class="fixed w-screen h-screen inset-0 z-50 bg-white"
      id="fade-intro"
    ></div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Developer Console
console.log(
  "%c SECRET MESSAGE!",
  "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
);
console.log(
  "%c Hi, I am Rick. good to see a other Developer",
  " font-size: 16px"
);
console.log(
  "%c I am improving my site, there will be more added soon!",
  "font-size: 14px"
);

// GSAP
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true)

  let tl = gsap.timeline();
  tl.to("#fade-intro", {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
  });
  tl.to("#fade-intro", {
    duration: 0,
    zIndex: -1,
  });
}
</script>
