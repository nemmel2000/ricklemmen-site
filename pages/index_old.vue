<template>
  <div>
    <div class="absolute w-screen h-screen inset-0 z-50 bg-black" id="fade-intro">

    </div>
    <img src="/img/bg/space.jpg" alt="Space" class="absolute inset-0 object-cover w-screen h-screen z-0"/>
    <div class="h-screen relative z-10 bg-home">
      <div class="relative pt-40 container">
        <div class="grid grid-cols-12">
          <div class="col-span-8 col-start-3 relative intro-up">
            <h1 class="title">
              Elevating <br/> Webexperiences
            </h1>
            <div class="absolute left-0 top-0 w-full h-full">
              <h1 class="title">
              <span class="relative">Elevating
                <div class="absolute -right-[2.5rem] -top-6 h-20 w-20">
                <img src="/img/style-elements/Astraunaut.svg" alt="astraunaut" id="astraunaut">
                </div>
              </span>
              </h1>
            </div>
          </div>
          <div class="col-span-4 col-start-5 intro-up">
            <p class="pt-10 text-center text-white font-light" id="intro-text">
              “Prepare for a stellar voyage through the boundless realm of web experiences, ascending to greater heights
              with every website. Together, we’ll chart our course through the expansive reaches of this digital
              galaxy.”
              - Rick Lemmen
            </p>
          </div>
          <div class="col-span-6 col-start-4 mt-40">
            <div class="relative z-10" id="mac">
              <img src="/img/macbook.webp" alt="macbook" class="w-full"/>
              <div class="absolute inset-0 flex items-center justify-center h-full w-full">
                <img src="/img/style-elements/rijr-mac.png" id="rijr-mac" alt="rijr" class="scale-50"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    <section class="h-screen pt-40 -mt-40 z-0 bg-home col-span-full " id="construction">
     <h2>Under construction</h2>
    </section>
    </div>

  </div>
</template>
<script setup>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {onMounted} from "vue";


if (process.client) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  //scroll to #about-me
  // event listener

  let introUp = gsap.utils.toArray(".intro-up");

  let tl = gsap.timeline();
  tl.to("#fade-intro", {
    duration: 1,
    opacity: 0,
    ease: "power2.out",
  });
  tl.to("#fade-intro", {
    duration: 0,
    zIndex: -1,
  })
  tl.from(".title", {
    duration: 1,
    y: 100,
    opacity: 0,
    rotationX: 80,

    ease: "power2.out",
  });
  tl.from("#intro-text", {
    duration: 1,
    y: 100,
    opacity: 0,
    rotationX: 80,

    ease: "power2.out",
  }), +0.0;
  tl.from("#mac", {
    duration: 2,
    y: 100,
    opacity: 0,
    scale: 0.8,
    ease: "power2.out",
  }), +0.0;

  introUp.forEach((element) => {
    gsap.to(element, {
      y: -400,
      scale: 0.8,
      scrollTrigger: {
        markers: true,
        trigger: "#construction",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  });

  gsap.to("#rijr-mac", {

    scale: 0.78,
    y: -20,
    x: 2,
    scrollTrigger: {
      markers: true,
      trigger: "#construction",
      start: "top 100%",
      end: "top 5%",
      scrub: true,
    },
  });





}

const colorMode = useColorMode();

onMounted(() => {
  colorMode.value = "dark";
});
</script>
