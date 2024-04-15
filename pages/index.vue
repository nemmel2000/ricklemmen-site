<template>
  <span class="cursor-follower hidden xl:block"></span>
  <TheIntro/>


  <!-- Content -->
  <TheHeader/>

  <div class="mt-32 lg:mt-20">
    <TheUspsLines/>
  </div>

  <TheAboutMeBlock/>

  <TheFooter/>

</template>
<script setup>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import Lenis from '@studio-freight/lenis'
import TheIntro from "~/components/TheIntro.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import TheUspsLines from "~/components/TheUspsLines.vue";
// import ProjectSlider from "~/components/ProjectSlider.vue";

const currentYear = new Date().getFullYear();

// Developer Console logs
gsap.config({
  nullTargetWarn: false,
});

let defaultAnimation = {
  duration: 1,
  y: "100",
  scale: 1.3,
  ease: "power2.inOut",
  opacity: 0,
  stagger: 0.2,
  filter: "blur(2px)",
};

// GSAP
if (process.client) {

  // Define scrollTo's
  let scrollToMore = document.querySelectorAll('.scroll-to-more');
  let scrollToTop = document.querySelectorAll('.scroll-to-top');
  scrollToMore.forEach((element) => {
    element.addEventListener('click', function () {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: '#about-me',
          offsetY: 200,
        },
        ease: 'power2.inOut',
      });
    });
  });

  scrollToTop.forEach((element) => {
    element.addEventListener('click', function () {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: 0,
        },
        ease: 'power2.inOut',
      });
    });
  });

  //scroll to top on page load
  window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  ScrollTrigger.normalizeScroll(true);

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  let tl = gsap.timeline();
  tl.from("#intro .timeline", {
    duration: 2.5,
    width: "0%",
    ease: "none",
  });
  tl.from(
      "#intro-text",
      {
        duration: 0.5,
        y: 40,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.6,
        filter: "blur(6px)",
      },
      "-=2.2",
  );
  tl.to("#intro", {
    duration: 1.7,
    scale: 1.2,
    yPercent: -115,
    ease: "power4.inOut",
    webkitFilter: "blur(10px)",
  });
  tl.to("#intro", {
    duration: 0.1,
    zIndex: -100,
  });
  tl.from("#header .header-title", {
    ...defaultAnimation,
  }, "-=1");
  tl.from(
      "#header p",
      {
        ...defaultAnimation,
      },
      "-=0.8",
  );
  tl.from(
      "#header .picture",
      {
        ...defaultAnimation,
      },
      "-=0.8",
  );

  if (window.innerWidth > 1023) {
    let moveHeight = 60;
    let minMoveHeight = -60;
    if (window.innerWidth > 1440) {
      moveHeight = 100;
      minMoveHeight = -100;
    }

    // Animate moveUp
    let aniMoveUp = document.querySelectorAll('.ani-move-up');
    aniMoveUp.length > 0 &&
    aniMoveUp.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 100%',
          end: 'top 10%',
          scrub: 0.5,
        },
        y: minMoveHeight,
        ease: 'power2.out',
      });
    });

    // Animate Exit
    let aniExit = document.querySelectorAll('.ani-exit');
    aniExit.length > 0 &&
    aniExit.forEach((item) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 100%',
          end: 'top 10%',
          scrub: 0.5,
        },
        duration: 1.4,
        y: moveHeight,
        ease: 'power2.out',
      });
    });

    gsap.from('#contact .col-span-full', {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 85%',
      },
      ...defaultAnimation,
      stagger: 0.2,
      pointerEvents: 'none',
    });
  }

  // ani-up
  let aniUp = document.querySelectorAll(".ani-up");
  aniUp.length > 0 &&
  aniUp.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      ...defaultAnimation,
    });
  });

  // CUSTOM CURSOR
  // Check if it's a touch device
  const isTouchDevice = 'ontouchstart' in window;
  const createCursorFollower = () => {
    const $el = document.querySelector('.cursor-follower');
    // Each time the mouse coordinates are updated,
    // we need to pass the values to gsap in order
    // to animate the element
    window.addEventListener('mousemove', (e) => {
      const {target, x, y} = e;
      // Check if target is inside a link or button
      const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button') || target?.closest('.ani-cursor') || target?.closest('.btn') || target?.closest('.link') || target?.closest('.cursor-pointer');
      // GSAP config
      gsap.to($el, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 2.5 : 1})`,
      });
    });
    // Hidding the cursor element when the mouse cursor
    // is moved out of the page
    document.addEventListener('mouseleave', (e) => {
      gsap.to($el, {
        duration: 0.7,
        opacity: 0,
      });
    });
  };
// Only invoke the function if isn't a touch device
  if (!isTouchDevice) {
    createCursorFollower();
  }
}
</script>

<style scoped lang="postcss">

.bg-gradient-custom {
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}
</style>