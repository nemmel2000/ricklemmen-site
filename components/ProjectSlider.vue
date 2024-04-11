<template>
  <section class="min-h-screen ani-exit">
    <div class="mt-40">
      <div class="container">
        <h2 @click="handlePlayAnimation()" class="title--h1 ani-up">Featured <span class="text-primary">Projects</span></h2>
      </div>
    </div>

    <div class="mt-20 custom-slider h-[80vh] bg-tertiary/20 relative">
      <template v-for="(project, index) in data" :key="project.title">
        <div :class=" index === 0 ? 'project project--active' : 'project'">
          <div :class="'relative w-full h-full ' + project.bg">
            <img :src="'/img/projects/' + project.img.toLowerCase()" alt="project image"
                 class="absolute w-full h-full object-contain z-1"/>
            <div class="container relative z-10 text-secondary-light h-full pb-40">
              <div class="grid grid-cols-12 gap-4 h-full">
                <div class="col-span-12 md:col-span-6 flex flex-col gap-y-6 h-full justify-end">
                  <h3 class="title--h2 text-white ani-item">{{ project.title }}</h3>
                  <div cs="inline-flex gap-x-2 ani-item">
                    <template v-for="tag in project.tags">
                      <span class="border-2 border-secondary-light ani-cursor rounded-full px-2 py-1 text-xs hover:bg-secondary-light animate hover:text-black hover:-translate-y-0.5">{{ tag }}</span>
                    </template>
                  </div>
                  <p class="text-white ani-item">
                    {{ project.description }}
                  </p>
                  <div class="inline-flex gap-x-6 ani-item">
                    <a href="#" class="btn btn--primary">View project</a>
                    <a href="#" class="btn btn--secondary">View code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const data = [
  {
    title: "Regio In Je Rugzak",
    description: "Online leerplatform om bedrijven en leerlingen samen te brengen. Doormiddel van een online portaal en corperate website.",
    tags: ["Vue", "Webdesign", "Statamic", "Redesign", "Technisch Ontwerp"],
    img: 'regio.png',
    bg: 'bg-sky-600'
  },
  {
    title: "Makita",
    description: "Redesign van de actie-registratie PWA en APP.",
    tags: ["React", "Ionic Capacitor", "PWA", "APP", "Redesign"],
    img: 'regio.png'
  },
  {
    title: "PROSERV",
    description: "Corparate website voor PROSERV, een bedrijf dat zich specialiseert in het leveren van technische diensten.",
    tags: ["Laravel", "Landingspage", "Webdesign"],
    img: 'regio.png'

  }
]

if (process.client) {
  gsap.registerPlugin(ScrollTrigger);


  let slideAnimation = gsap.timeline();
  slideAnimation.from('.project .ani-item', {
    duration: 0.25,
    opacity: 0,
    x: 20,
    stagger: 0.1,
    ease: "power4.out",
  });

  // function to play the animation
  function handlePlayAnimation() {
    slideAnimation.play();
  }
}



</script>

<style scoped lang="postcss">

.project {
  @apply top-0 left-0 h-full w-full absolute opacity-0;

  &--active {
    @apply opacity-100;
  }
}

</style>
