<template>
  <section id="usps" class="-mt-20 lg:-mt-32 py-10 lg:py-20 relative z-1">
    <div class="py-10 lg:py-20 rotate-6 relative z-10 border-black">
      <div class="inline-flex ani-scroll__right line relative z-10 my-3">
        <a
          href=""
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Javascript</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://tailwindcss.com/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Tailwind</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://figma.com"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Figma</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://gsap.com/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >GSAP</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://vuejs.org/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Vue JS</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://www.typescriptlang.org/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >TypeScript</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Javascript</a
        >
      </div>
      <div class="inline-flex ani-scroll__left line relative z-10 mt-10">
        <a
          href=""
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Photoshop</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://www.adobe.com/nl/products/photoshop.html"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >AlpineJS</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://statamic.com/"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Statamic</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://www.uptrends.nl/wat-is/rest-api"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >API's</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://laravel.com/"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Laravel</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://react.dev/"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >React</a
        >
        <span class="line-dot">·</span
        ><a
          href="https://www.adobe.com/nl/products/photoshop.html"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Photoshop</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";

if (process.client) {
  // LINE scroll
  let aniSpeed = -20;
  //if screensize is smaller then md
  if (window.innerWidth < 768) {
    aniSpeed = -50;
  }
  document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollX; // Get horizontal scroll position
    let windowWidth = window.innerWidth; // Width of the viewport
    let documentWidth = document.body.scrollWidth; // Total width of the document

    // If scrolled near the end of the document, create a new div
    if (scrollPosition + windowWidth >= documentWidth - 100) {
      createAndAnimateDiv();
    }
  });

  const scrollLeft = document.querySelectorAll(".ani-scroll__left");

  if (scrollLeft.length > 0) {
    scrollLeft.forEach((element) => {
      gsap.to(".ani-scroll__left", {
        scrollTrigger: {
          trigger: ".ani-scroll__left",
          start: "top 100%", // Example value, adjust as needed
          scrub: 0.5,
        },
        xPercent: aniSpeed,
      });
    });
  }

  const scrollRight = document.querySelectorAll(".ani-scroll__right");

  if (scrollRight.length > 0) {
    scrollRight.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 100%", // Example value, adjust as needed
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
  @apply flex items-center gap-x-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:gap-x-6 xl:text-5xl 2xl:text-6xl;

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
