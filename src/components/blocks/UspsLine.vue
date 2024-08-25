<template>
  <section id="usps" class="py-20 relative z-1">
    <div class="py-10 lg:py-20 rotate-6 lg:rotate-12 relative z-10 border-black">
      <div class="inline-flex ani-scroll__right line relative z-10 my-3">
        <a href="" target="_blank" class="line-usp" rel="nofollow noopener noreferrer"
          >Javascript</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://tailwindcss.com/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Tailwind</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://figma.com"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Figma</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://gsap.com/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >GSAP</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://vuejs.org/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Vue JS</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://www.typescriptlang.org/"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >TypeScript</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          class="line-usp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Javascript</a
        >
      </div>
      <div class="inline-flex ani-scroll__left line relative z-10 mt-10">
        <a href="" target="_blank" class="line-usp" rel="nofollow noopener noreferrer">Photoshop</a>
        <span class="line-dot"> •</span
        ><a
          href="https://www.adobe.com/nl/products/photoshop.html"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >AlpineJS</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://statamic.com/"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Statamic</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://www.uptrends.nl/wat-is/rfest-api"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >API's</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://laravel.com/"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >Laravel</a
        >
        <span class="line-dot"> •</span
        ><a
          href="https://react.dev/"
          target="_blank"
          class="line-usp"
          rel="nofollow noopener noreferrer"
          >React</a
        >
        <span class="line-dot"> •</span
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

<style scoped lang="postcss">
.line {
  @apply text-white flex items-center gap-x-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:gap-x-6 xl:text-5xl 2xl:text-6xl;

  .line-usp {
    /*On hover show only the border of the text*/
    @apply transition-all duration-300 ease-in-out flex-shrink-0 hover:text-transparent;

    &:hover {
      -webkit-text-stroke: 3px white; /* width and color */
    }
  }
}
</style>
<script setup lang="ts"></script>
