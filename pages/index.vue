<template>
  <span class="cursor-follower"></span>
  <TheIntro/>


  <!-- Content -->
  <TheHeader/>

  <div class="mt-32 lg:mt-20">
    <TheUspsLines/>
  </div>

  <section id="about-me" class="mt-20">
    <div class="container grid grid-cols-12">
      <div class="col-span-full lg:col-span-5 relative ani-move-up">
        <div class="flex flex-col gap-y-6 pl-10 pt-10 relative z-10">
          <div class="flex flex-col justify-between">
            <h3 class="text-xl lg:text-2xl text-white font-thin">Over mij</h3>
            <h2 class="text-3xl lg:text-8xl text-white">Creative Front-End Ontwikkelaar</h2>
          </div>
          <NuxtPicture
              class="w-1/2 h-full object-cover mt-20 hover:scale-90 origin-center hover:-translate-y-2 hover:-translate-x-1 animate"
              src="img/metheor.png"
              alt="Metheor"
          />
        </div>
        <NuxtImg
            class="absolute top-0 left-0 w-1/3 object-cover"
            src="img/icons/book-open-cover.svg"
            alt="background image"
        />
      </div>
      <div class="col-span-full lg:col-span-6 lg:col-start-7">
        <div class="flex flex-col gap-y-3 text-white pt-20 ani-exit">
          <p>
            Als zowel developer als designer ben ik betrokken bij diverse werkzaamheden. Mijn passie ligt in het
            ontwerpen
            en ontwikkelen van interactieve webpagina's om de business, producten of andere behoeften van klanten
            digitaal
            tot uiting te brengen met een webervaring.
          </p>
          <p>
            Door vanaf de eerste pixel in het design tot aan de laatste puntkomma in het project betrokken te zijn, kan
            ik
            de visie en waardes blijven waarborgen. Het liefste gooi ik er nog een snufje extra animatie en
            micro-interactie bovenop om de gebruikers nog langer op de webpagina of app te houden.
          </p>
          <p>
            Met jarenlange ervaring heb ik samengewerkt met klanten van verschillende groottes en formaten. Elke
            opdracht
            vereist dezelfde mate van nauwkeurigheid en toewijding.
<!--            Benieuwd welke projecten ik heb gedaan?-->
          </p>
<!--          <p class="scrollToProjects link cursor-pointer">-->
<!--            Bekijk mijn portfolio-->
<!--          </p>-->
        </div>
      </div>
    </div>
  </section>

  <!--  <ProjectSlider/>-->
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
        duration: 1,
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
          markers: true,
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