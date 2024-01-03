<template>
  <!-- Intro -->
  <div class="fixed w-screen h-dvh inset-0 z-[100] bg-tertiary" id="intro">
    <div class="relative w-screen h-screen">
      <div class="absolute bottom-0 left-0 w-full h-full bg-tertiary">
        <div class="container h-full">
          <div class="absolute top-0 left-0 w-full h-2 bg-white timeline"></div>
          <div class="flex flex-col-reverse gap-y-10 text-white h-full pb-20">
            <p id="intro-text" class="title--h1 text-white blur-0">Design</p>
            <p id="intro-text" class="title--h1 text-white blur-0">
              Development
            </p>
            <p id="intro-text" class="title--h1 text-white blur-0">
              Animations
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Content -->
  <div class="min-h-screen pb-20 xl:pb-40">
    <div
      class="bg-tertiary w-full h-full rounded-bl-extra overflow-visible"
      id="header"
    >
      <div class="container grid grid-cols-12 h-full pt-32 2xl:pt-40">
        <div class="col-span-12 lg:col-span-6 h-full 2xl:pt-60 pb-10 xl:pb-32">
          <div
            class="flex flex-col justify-end gap-10 text-white tracking-widest h-full"
          >
            <h1 class="title--h1">
              Creating <span class="text-secondary">web</span> experiences
            </h1>
            <p class="text-xl">
              Hi, i am Rick Lemmen a <span v-text="yearsOld"></span> year old
              front-end developer & designer. Welcome to my site
            </p>
          </div>
        </div>
        <div
          class="col-span-10 col-start-2 md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-9 relative aspect-[9/10] xl:aspect-auto xl:h-full"
        >
          <div
            class="absolute left-0 -bottom-20 w-full rounded-bl-extra rounded-tr-extra overflow-hidden picture aspect-[3/4]"
          >
            <NuxtPicture
              format="webp"
              class="w-full h-full object-contain"
              src="img/foto_rick.jpg"
              alt="foto of Rick Lemmen"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="section-2" class="relative mt-10 xl:mt-20">
    <div
      class="bg-secondary-light w-full h-full absolute inset-0 z-1 ani-item"
    ></div>
    <div class="py-40 text-center w-full relative z-10 flex flex-col gap-4">
      <p class="text-5xl font-bold">Combinding design & code</p>
      <p class="title--h1">Lets gets creative</p>
      <p class="text-xl font-lighter mt-6">
        My site is under construction. Please come back later
      </p>
    </div>
  </section>
  <footer class="bg-tertiary">
    <div class="container mx-auto">
      <div class="py-4 text-white inline-flex">
        <div class="ani-item">
          &copy; Copyright Rick Lemmen <span v-text="currentYear"></span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const currentYear = new Date().getFullYear();

// Calculate my age
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

let yearsOld = getAge("2000/06/23");

// Developer Console logs
console.log(
  "%c Hi, I am Rick. good to see a other Developer",
  " font-size: 16px",
);
console.log(
  "%c I am improving my site, there will be more added soon!",
  "font-size: 14px",
);

let defaultAnimation = {
  duration: 1,
  y: "100",
  scale: 1.3,
  ease: "power2.inOut",
  opacity: 0,
  stagger: 0.2,
};

// GSAP
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);

  let tl = gsap.timeline();
  tl.from("#intro .timeline", {
    duration: 3,
    width: "0%",
    ease: "none",
  });
  tl.from(
    "#intro-text",
    {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.6,
    },
    "-=3",
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
  tl.from("#header .title--h1", {
    ...defaultAnimation,
  }),
    "-=0.5";
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

  //trigger a timeline when scrolltrigger #section2
  let section2tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: "#section-2",
        start: "top 80%",
        end: "bottom 80%",
      },
    })
    .from(
      "#section-2 p",
      {
        duration: 1.4,
        scale: 2,
        opacity: 0,
        ease: "power4.out",
        filter: "blur(20px)",
      },
      "+=0.5",
    )
    .from(
      "#section-2 .ani-item",
      {
        duration: 1.4,
        xPercent: 100,
        ease: "power4.out",
      },
      "-=0.7",
    );
}
</script>
