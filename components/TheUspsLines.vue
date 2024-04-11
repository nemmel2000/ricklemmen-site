<template>
  <section id="usps" class="-mt-20 lg:-mt-40 py-10 lg:py-20 relative z-1">
    <div class=" py-10 lg:py-20 rotate-6 relative z-10 border-white">
      <div class="inline-flex ani-scroll__right line relative z-10 my-3">
        <span class='line-usp'>Javascript</span>
        <span class="line-dot">·</span><span class='line-usp'>Tailwind</span
      ><span  class="line-dot">·</span><span class='line-usp'>Figma</span>
        <span class="line-dot">·</span><span class='line-usp'>GSAP</span>
        <span class="line-dot">·</span><span class='line-usp'>Vue JS</span>
        <span class="line-dot">·</span><span class='line-usp'>TypeScript</span>
        <span class="line-dot">·</span><span class='line-usp'>Javascript</span>
      </div>
      <div class="inline-flex ani-scroll__left line relative z-10 mt-10 ">
        <span class='line-usp'>Photoshop</span>
        <span class="line-dot">·</span><span class='line-usp'>AlpineJS</span>
        <span class="line-dot">·</span><span class='line-usp'>Statamic</span>
        <span class="line-dot">·</span><span class='line-usp'>API's</span>
        <span class="line-dot">·</span><span class='line-usp'>Laravel</span>
        <span class="line-dot">·</span><span class='line-usp'>React</span>
        <span class="line-dot">·</span><span class='line-usp'>Photoshop</span>
      </div>
    </div>

  </section>

</template>

<script setup>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

if (process.client) {
// LINE scroll
  let aniSpeed = -20;
//if screensize is smaller then md
  if (window.innerWidth < 768) {
    aniSpeed = -50;
  }
  document.addEventListener('scroll', () => {
    let scrollPosition = window.scrollX; // Get horizontal scroll position
    let windowWidth = window.innerWidth; // Width of the viewport
    let documentWidth = document.body.scrollWidth; // Total width of the document

    // If scrolled near the end of the document, create a new div
    if (scrollPosition + windowWidth >= documentWidth - 100) {
      createAndAnimateDiv();
    }
  });

  const scrollLeft = document.querySelectorAll('.ani-scroll__left');

  if (scrollLeft.length > 0) {
    scrollLeft.forEach((element) => {
      gsap.to('.ani-scroll__left', {
        scrollTrigger: {
          trigger: '.ani-scroll__left',
          start: 'top 100%', // Example value, adjust as needed
          scrub: 0.5,
        },
        xPercent: aniSpeed,
      });
    });
  }

  const scrollRight = document.querySelectorAll('.ani-scroll__right');

  if (scrollRight.length > 0) {
    scrollRight.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 100%', // Example value, adjust as needed
          scrub: 0.5,
        },
        xPercent: aniSpeed,
      });
    });
  }
}
</script>

<style scoped lang="postcss">

  .line {
    @apply flex items-center gap-x-2 text-2xl font-bold uppercase text-white md:text-3xl lg:text-4xl xl:gap-x-6 xl:text-5xl 2xl:text-6xl;

    .line-usp {
      /*On hover show only the border of the text*/
      @apply transition-all duration-300 ease-in-out flex-shrink-0 hover:text-transparent;

      &:hover {
        -webkit-text-stroke: 3px white; /* width and color */
      }
    }

    .line-dot {
      @apply content-['.'];
    }
  }
</style>