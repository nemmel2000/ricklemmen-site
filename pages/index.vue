<template>
  <div>
    <div
      class="fixed w-screen h-screen inset-0 z-50 bg-black"
      id="fade-intro"
    ></div>
    <div class="fixed z-0 inset-0 h-screen w-screen">
      <div class="relative">
        <img
          src="/img/bg/space.jpg"
          alt="Space"
          class="w-screen h-screen object-cover object-center"
        />
        <div class="absolute inset-0 bg-home"></div>
      </div>
    </div>
    <div class="container relative z-10 pt-20">
      <div class="grid grid-cols-12">
        <section
          class="col-span-full lg:col-span-10 2xl:col-span-6 lg:col-start-2 2xl:col-start-4"
          id="intro"
        >
          <div class="flex flex-col gap-10 title mt-10">
            <div class="relative">
              <h1 class="title__h1">Elevating<br />Webexpiriences</h1>
              <div class="title__h1 absolute inset-0">
                <h1 class="title__h1">
                  <span class="relative"
                    >Elevating
                    <div
                      class="absolute lg:-right-[2.5rem] -top-6 -right-6 sm:-top-10 sm:-right-12 lg:-top-6 h-10 w-10 sm:h-20 sm:w-20"
                    >
                      <img
                        src="/img/style-elements/Astraunaut.svg"
                        alt="astraunaut"
                        id="astraunaut"
                      />
                    </div>
                  </span>
                </h1>
              </div>
            </div>

            <p class="text-white text-center title__p">
              “Prepare for a stellar voyage through the boundless realm of web
              experiences, ascending to greater heights with every website.
              Together, we’ll chart our course through the expansive reaches of
              this digital galaxy.” - Rick Lemmen
            </p>
          </div>
        </section>
        <section
          id="intro-mac"
          class="col-span-full sm:col-span-10 lg:col-span-8 sm:col-start-2 lg:col-start-3 pt-40"
        >
          <div class="relative z-10" id="mac">
            <img
              src="/img/style-elements/MacBook.webp"
              alt="macbook"
              class="w-full"
            />
            <div
              class="absolute inset-0 flex items-center justify-center h-full w-full"
            >
              <img
                src="/img/style-elements/RIJR_mac.png"
                id="rijr-mac"
                alt="rijr"
                class="scale-[0.5] -translate-y-4"
              />
            </div>
          </div>
        </section>
        <section
          id="construction"
          class="relative h-screen flex items-center justify-center col-span-full -mt-20"
        >
          <div
            class="flex flex-col items-center justify-center gap-6 construction ani-construction"
          >
            <h2 class="text-5xl font-bold text-white">
              My universe is still expanding
            </h2>
            <p class="text-white">
              This website is currently under construction. Please come back
              later.
            </p>
          </div>

          <img
            src="/img/style-elements/Earth.svg"
            alt="construction"
            class="w-96 absolute -right-[20%] -bottom-[20%] ani-construction floating floating--delayed"
          />
          <img
            src="/img/style-elements/Planet.svg"
            alt="construction"
            class="w-96 absolute left-0 bottom-0 ani-construction floating hidden md:block"
          />
        </section>
      </div>
    </div>
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
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  let constructionElements = document.querySelectorAll(".ani-construction");

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
  tl.from(".title__h1", {
    duration: 1,
    y: 100,
    opacity: 0,
    rotationX: 80,

    ease: "power2.out",
  }),
    -0.5;
  tl.from(".title__p", {
    duration: 1,
    y: 100,
    opacity: 0,
    rotationX: 80,
    ease: "power2.out",
  }),
    -0.5;
  tl.from("#mac", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    scale: 0.8,
    ease: "power2.out",
  }),
    -3.5;

  //responsive scales
  let visualScale = 1;
  let visualY = -12;
  if (window.innerWidth < 640) {
    visualScale = 0.7;
    visualY = -8;
  }
  if (window.innerWidth >= 640) {
    visualScale = 0.7;
  }
  if (window.innerWidth >= 768) {
    visualScale = 0.75;
  }
  if (window.innerWidth >= 1024) {
    visualScale = 0.78;
  }
  if (window.innerWidth >= 1240) {
    visualScale = 0.85;
  }
  if (window.innerWidth >= 1440) {
    visualScale = 0.9;
  }
  if (window.innerWidth >= 1600) {
    visualScale = 1;
  }

  gsap.to("#rijr-mac", {
    scale: visualScale,
    y: visualY,
    scrollTrigger: {
      trigger: "#construction",
      start: "top 100%",
      end: "top 60%",
      scrub: true,
    },
  });

  constructionElements.forEach((element) => {
    gsap.from(element, {
      y: 100,
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".construction",
        start: "top 100%",
        end: "top 80%",
        scrub: true,
      },
    });
  });

  gsap.from(".planet", {
    y: 100,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: ".construction",
      start: "top 100%",
      end: "top 80%",
      scrub: true,
    },
  });
}
</script>
