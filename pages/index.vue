<template>
  <span class="cursor-follower hidden xl:block"></span>
  <TheIntro/>


  <!-- Content -->
  <TheHeader/>

  <div class="mt-32 lg:mt-20">
    <TheUspsLines/>
  </div>

  <TheAboutMeBlock/>

  <div class="mt-40">&nbsp;</div>
  <section id="image-scale" class="h-[100vh] flex justify-center relative overflow-clip">
    <NuxtImg
        class="object-cover object-center size-full ani-scale-img origin-top ani-up"
        src="img/mockup.jpg"
        alt="background image"
    />
  </section>
  <section id="projects" class="py-[50vh]" style="color: white;">

    <div class="container">
      <div class="flex flex-col gap-y-10">
        <p class="text-xl lg:text-2xl font-thin">Een greep uit mijn projecten</p>

        <div class="inline-flex justify-between border-b pb-6">
          <h2 class="text-3xl lg:text-6xl font-bold">Regio in je rugzak</h2>
          <p class="translate-y-2">01.</p>
        </div>

        <div class="inline-flex justify-between border-b pb-6">
          <h2 class="text-3xl lg:text-6xl font-bold">Makita</h2>
          <p class="translate-y-2">02.</p>
        </div>

        <div class="inline-flex justify-between border-b pb-6">
          <h2 class="text-3xl lg:text-6xl font-bold">Eddy Sushi</h2>
          <p class="translate-y-2">03.</p>
        </div>

        <div class="inline-flex justify-between border-b pb-6">
          <h2 class="text-3xl lg:text-6xl font-bold">Landingspages</h2>
          <p class="translate-y-2">04.</p>
        </div>

      </div>


    </div>
  </section>


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

const currentYear = new Date().getFullYear();

// Developer Console logs
gsap.config({
  nullTargetWarn: true,
});

let defaultAnimation = {
  duration: 1,
  y: "100",
  ease: "power2.inOut",
  opacity: 0,
  stagger: 0.2,
  filter: "blur(4px)",
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
  // if current scroll position is 0, scroll to 8
  if (window.scrollY < 8) {
    tl.to(window, {
      duration: 0.5,
      scrollTo: {y: 8},
      ease: "power2.inOut",
    }, "-=0.9");
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

  //ani-exit
  let aniExit = document.querySelectorAll(".ani-exit");
  aniExit.length > 0 &&
  aniExit.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "bottom 1%",
        scrub: 1,
      },
      ease: "power2.inOut",
      y: -100,

    });
  });

  //ani-enter
  let aniEnter = document.querySelectorAll(".ani-enter");
  aniEnter.length > 0 &&
  aniEnter.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
      },
      ease: "power2.inOut",
      y: 100,
    });
  });

  const vh50 = window.innerHeight / 2;

  //ani-scale-img
  let aniScaleImg = document.querySelectorAll(".ani-scale-img");
  aniScaleImg.length > 0 &&
  aniScaleImg.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        end: "bottom 70%",
        scrub: 1,
      },
      ease: "power2.in",
      scale: 0.5,
      borderTopRightRadius: 160,
      borderBottomLeftRadius: 160,
    });
  });

  // color switch
  let colorTL = gsap.timeline({
    scrollTrigger: {
      trigger: "#projects",
      start: "top 60%",
      end: "center 50%",
      markers: true,
      scrub: 2,
    },
  });

  colorTL.to("#projects", {
    backgroundColor: "#fcfcfc",
    color: "black",
    borderColor: "black",
    ease: "power2.inOut",
    duration: 1,
  }).to("#TheNavbar .color-path", {
    fill: "black",
    duration: 1,
  }, "-=1");


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