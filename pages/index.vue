<template>
  <div class="cursor-follower hidden xl:block -translate-y-1/2 -translate-x-1/2">
  </div>
  <TheIntro/>


  <!-- Content -->
  <TheHeader/>

  <div class="mt-32 lg:mt-20">
    <TheUspsLines/>
  </div>

  <TheAboutMeBlock/>

  <div class="mt-20 lg:mt-80">&nbsp;</div>
  <section id="image-scale"
           class="xl:h-[100vh] aspect-square xl:aspect-auto flex justify-center relative overflow-clip">
    <NuxtImg
        class="object-cover object-center size-full ani-scale-img origin-center lg:origin-top ani-up"
        src="img/mockup_rijr.jpg"
        alt="background image"
    />
  </section>
  <section id="projects" class="py-60 lg:py-[50vh]" style="color: white;">

    <div class="container">
      <div class="flex flex-col gap-y-10">
        <p class="text-xl lg:text-2xl font-thin">Een greep uit mijn projecten</p>

        <div class="project">
          <div class="project__hover">
            <NuxtImg
                class="project__hover__img"
                src="img/mockup_rijr.jpg"
                alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
            </div>
          </div>
          <h2 class="project__text">Regio in je rugzak</h2>
          <p class="translate-y-2">01.</p>
        </div>

        <div class="project">
          <div class="project__hover">
            <NuxtImg
                class="project__hover__img"
                src="img/projects/makita_mockup_blured.jpg"
                alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span>Binnenkort meer over dit project</span>
                <span class="text-3xl text-primary">🔒</span>
              </div>
              <
              <div class="slide-text">
                <span>Binnenkort meer over dit project</span>
                <span class="text-3xl text-primary">🔒</span>
              </div>
              <div class="slide-text">
                <span>Binnenkort meer over dit project</span>
                <span class="text-3xl text-primary">🔒</span>
              </div>
            </div>
          </div>

          <h2 class="project__text">Makita</h2>
          <p class="translate-y-2">02.</p>
        </div>

        <div class="project">
          <h2 class="project__text">Webdesigns</h2>
          <p class="translate-y-2">03.</p>
        </div>

        <div class="project">
          <div class="project__hover">
            <NuxtImg
                class="project__hover__img"
                src="img/mockup_rijr.jpg"
                alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl text-primary">•</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl text-primary">•</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl text-primary">•</span>
              </div>
            </div>
          </div>
          <h2 class="project__text">Websites</h2>
          <p class="translate-y-2">04.</p>
        </div>

        <p class="text-xl lg:text-2xl font-thin">Kom binnenkort terug om de projecten en meer te bekijken!</p>

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

  // Scroll to
  function addScrollToListener(selector, target, offsetY = 200, duration = 1.2) {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener('click', () => {
        gsap.to(window, {
          duration: duration,
          scrollTo: {
            y: target,
            offsetY: offsetY,
          },
          ease: 'power2.inOut',
        });
      });
    });
  }

  addScrollToListener('.scroll-to-more', '#about-me', 200, 1.2);
  addScrollToListener('.scroll-to-top', 0, 0, 1);
  addScrollToListener('.scroll-to-projects', '#projects', 200, 1.2);



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
    duration: 1.5,
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
        stagger: 0.45,
        filter: "blur(6px)",
      },
      "-=1.4",
  );
  tl.from("body", {
    height: window.innerHeight,
    duration: 0.1,
  });
  tl.to("#intro", {
    duration: 1.7,
    scale: 1.2,
    yPercent: -115,
    ease: "power4.inOut",
    webkitFilter: "blur(10px)",
  }, "-=0.2");
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

  let movement = 100;
  //if screensize is smaller then md
  if (window.innerWidth < 768) {
    movement = 40;
  }

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
      y: -movement,

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
      y: movement,
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
  }, "-=0.5").to('.cursor-follower', {
    backgroundColor: "#B5B5B5",
    duration: 1,
  }, "-=1");


//   Projects image
  gsap.utils.toArray(".project").forEach((el) => {
    console.log(el.querySelector('.project__hover'))
    const image = el.querySelector('.project__hover'),
        setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px"),
        align = e => {
          setX(e.clientX);
          setY(e.clientY);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        //fade is a gsap timeline that fades the image in and out and fades the scroll-text in and out
        fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});

    gsap.set(image, {yPercent: -50, xPercent: -50})

    el.addEventListener('mouseenter', (e) => {
      console.log('enter')
      fade.play();
      //to slide-text
      gsap.to(el.querySelectorAll('.slide-text'), {
        opacity: 1,
        duration: 0.5,
        ease: "power4",
        stagger: 0.2,
      });
      startFollow();
      align(e);
    });

    el.addEventListener('mouseleave', () => {
      fade.reverse();
      //to slide-text
      gsap.to(el.querySelectorAll('.slide-text'), {
        opacity: 0,
        duration: 0.5,
        ease: "power4",
        stagger: 0.2,
      });
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

.project {
  @apply flex justify-between border-b pb-6;

  &__hover {
    @apply fixed top-0 left-0 w-[60vw] lg:w-[33vw] max-h-[50vh] pointer-events-none z-[121];
    visibility: hidden;

    img {
      @apply aspect-[4/3] object-cover w-full;
    }
  }

  &__text {
    @apply text-3xl lg:text-6xl font-bold;
  }

  .slide-text {
    @apply inline-flex items-center gap-x-6 whitespace-nowrap pr-6 tracking-[4px] text-white xl:text-2xl opacity-0;
    animation: rtl 10s infinite linear;
    visibility: hidden;
  }

  @keyframes rtl {
    0% {
      transform: translateZ(0);
      visibility: visible;
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(4px);
}
</style>