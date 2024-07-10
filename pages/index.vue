<template>
  <div
    class="cursor-follower hidden xl:block -translate-y-1/2 -translate-x-1/2"
  ></div>
  <TheIntro />

  <!-- Content -->
  <TheHeader />

  <!--  <div class="pt-10 pb-32" id="intro-text">-->
  <!--    <div class="container-custom">-->
  <!--      <h2 class="text-[80px] font-semibold -tracking-wider ani-text-fade break-words">-->
  <!--        “Est dolore et id anim consectetur labore enim quis cillum dolore ex. Amet sit tempor sint non id enim ut-->
  <!--        incididunt. Sint mollit est do laboris laborum.”-->
  <!--      </h2>-->
  <!--    </div>-->
  <!--  </div>-->

  <div class="mt-32 lg:mt-20">
    <TheUspsLines />
  </div>

  <TheAboutMeBlock />

  <TheProjects />

  <section class="h-screen bg-bg-light">
    <div class="container-custom grid grid-cols-12">
      <div class="col-span-full lg:col-span-5 relative ani-exit group">
        <div class="flex flex-col gap-y-6 pl-10 pt-10 relative z-10">
          <div class="flex flex-col justify-between">
            <h3 class="text-xl lg:text-2xl xl:text-7xl 2xl:text-8xl">
              Mijn ervaring
            </h3>
          </div>
        </div>
        <NuxtImg
          class="absolute top-0 left-0 w-1/3 object-cover opacity-20 group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:opacity-40 animate"
          src="img/icons/book-open-cover.svg"
          alt="background image"
        />
      </div>
    </div>
  </section>

  <TheFooter />
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Lenis from "lenis";
import SplitType from "split-type";
import TheIntro from "~/components/TheIntro.vue";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import TheUspsLines from "~/components/TheUspsLines.vue";
import TheProjects from "~/components/TheProjects.vue";

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
  function addScrollToListener(
    selector,
    target,
    offsetY = 200,
    duration = 1.2,
  ) {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("click", () => {
        gsap.to(window, {
          duration: duration,
          scrollTo: {
            y: target,
            offsetY: offsetY,
          },
          ease: "power2.inOut",
        });
      });
    });
  }

  addScrollToListener(".scroll-to-more", "#about-me", 200, 1.2);
  addScrollToListener(".scroll-to-top", 0, 0, 1);
  addScrollToListener(".scroll-to-projects", "#projects", 200, 1.2);

  //scroll to top on page load
  window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  ScrollTrigger.normalizeScroll(true);

  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  gsap.ticker.lagSmoothing(0);
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
  tl.to(
    "#intro",
    {
      duration: 1.7,
      scale: 1.2,
      yPercent: -115,
      ease: "power4.inOut",
      webkitFilter: "blur(10px)",
    },
    "-=0.2",
  );
  tl.to("#intro", {
    duration: 0.1,
    zIndex: -100,
  });
  tl.from(
    "#header .header-title",
    {
      ...defaultAnimation,
    },
    "-=1",
  );
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
    tl.to(
      window,
      {
        duration: 0.5,
        scrollTo: { y: 8 },
        ease: "power2.inOut",
      },
      "-=0.9",
    );
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
      start: "top 50%",
      end: "center 50%",
      markers: true,
      scrub: 2,
    },
  });

  colorTL
    .to("#projects", {
      backgroundColor: "#121212",
      color: "white",
      borderColor: "white",
      ease: "power2.inOut",
      duration: 1,
    })
    .to(
      "#TheNavbar .color-path",
      {
        fill: "white",
        duration: 1,
      },
      "-=0.5",
    )
    .to(
      ".cursor-follower",
      {
        backgroundColor: "#B5B5B5",
        duration: 1,
      },
      "-=1",
    );

  //   Projects image
  gsap.utils.toArray(".project").forEach((el) => {
    const image = el.querySelector(".project__hover"),
      setX = gsap.quickSetter(image, "x", "px"),
      setY = gsap.quickSetter(image, "y", "px"),
      align = (e) => {
        setX(e.clientX);
        setY(e.clientY);
      },
      startFollow = () => document.addEventListener("mousemove", align),
      stopFollow = () => document.removeEventListener("mousemove", align),
      //fade is a gsap timeline that fades the image in and out and fades the scroll-text in and out
      fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        onReverseComplete: stopFollow,
      });

    gsap.set(image, { yPercent: -50, xPercent: -50 });

    el.addEventListener("mouseenter", (e) => {
      fade.play();
      //to slide-text
      gsap.to(el.querySelectorAll(".slide-text"), {
        opacity: 1,
        duration: 0.5,
        ease: "power4",
        stagger: 0.2,
      });
      startFollow();
      align(e);
    });

    el.addEventListener("mouseleave", () => {
      fade.reverse();
      //to slide-text
      gsap.to(el.querySelectorAll(".slide-text"), {
        opacity: 0,
        duration: 0.5,
        ease: "power4",
        stagger: 0.2,
      });
    });
  });

  //   SPLIT TEXT
  let aniTextsFade = document.querySelectorAll(".ani-text-fade");
  let aniTextsUp = document.querySelectorAll(".ani-text-up");

  // Animate characters into view with a stagger effect

  aniTextsFade.length > 0 &&
    aniTextsFade.forEach((item) => {
      let charts = new SplitType(item, { types: "words, chars" });
      gsap.from(charts.chars, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 40%",
          scrub: 1,
        },
        opacity: 0.4,
        stagger: 0.05,
      });
    });

  aniTextsUp.length > 0 &&
    aniTextsUp.forEach((item) => {
      let charts = new SplitType(item, { types: "chars" });
      gsap.from(charts.chars, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        y: 24,
        opacity: 0,
        stagger: 0.05,
      });
    });

  //   Scroll TO
  let scrollToItems = document.querySelectorAll("[data-scroll-to]");

  if (scrollToItems.length > 0) {
    scrollToItems.forEach((item) => {
      let target = item.getAttribute("data-scroll-to");
      let targetElement = document.getElementById(target);

      if (targetElement) {
        item.addEventListener("click", (e) => {
          e.preventDefault();

          //scroll to the target element
          gsap.to(window, {
            duration: 1,
            ease: "power2.inOut",
            //Adjust the offset here
            scrollTo: {
              y: targetElement.offsetTop - 40,
              autoKill: false,
            },
          });
        });
      }
    });
  }

  // CUSTOM CURSOR
  // Check if it's a touch device
  const isTouchDevice = "ontouchstart" in window;
  const createCursorFollower = () => {
    const $el = document.querySelector(".cursor-follower");
    // Each time the mouse coordinates are updated,
    // we need to pass the values to gsap in order
    // to animate the element
    window.addEventListener("mousemove", (e) => {
      const { target, x, y } = e;
      // Check if target is inside a link or button
      const isTargetLinkOrBtn =
        target?.closest("a") ||
        target?.closest("button") ||
        target?.closest(".ani-cursor") ||
        target?.closest(".btn") ||
        target?.closest(".link") ||
        target?.closest(".cursor-pointer");
      // GSAP config
      gsap.to($el, {
        x: x,
        y: y,
        translateX: "-50%",
        translateY: "-50%",
        duration: 1,
        ease: "power4", // More easing options here: https://greensock.com/docs/v3/Eases/
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        scale: isTargetLinkOrBtn ? 2.5 : 1,
      });
    });

    // Hidding the cursor element when the mouse cursor
    // is moved out of the page
    document.addEventListener("mouseleave", (e) => {
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
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
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
