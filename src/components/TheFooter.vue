<template>
  <footer>
    <section id="contact" class="bg-bg-dark contact">
      <div class="pb-10 lg:pb-20 container-xl relative z-20">
        <div class="flex flex-col md:flex-row justify-between md:items-end gap-y-6 gap-x-4">
          <h2 class="text-5xl">
            Contact <br />
            opnemen?
          </h2>
          <div class="flex gap-x-4 text-black fill-black">
            <a
              href="mailto:nemmel2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class="animate hover:opacity-75 hover:-translate-y-0.5"
            >
              <img src="/img/icons/envelope-solid.svg" class="size-8 lg:size-6" alt="envelope" />
            </a>
            <a
              href="https://www.linkedin.com/in/rick-lemmen-8163b3199/"
              target="_blank"
              rel="noopener noreferrer"
              class="animate hover:opacity-75 hover:-translate-y-0.5"
            >
              <img src="/img/icons/linkedin.svg" class="size-8 lg:size-6" alt="linkedin" />
            </a>
            <a
              href="https://github.com/nemmel2000"
              target="_blank"
              rel="noopener noreferrer"
              class="animate hover:opacity-75 hover:-translate-y-0.5"
            >
              <img src="/img/icons/square-github.svg" class="size-8 lg:size-6" alt="github" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <div>
      <div class="footer__inside fixed -z-10">
        <div class="py-8 flex w-full flex-nowrap items-center overflow-clip">
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-white">Macbook user</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Vue > React</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Creative front end developer</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Rick Lemmen</span>
            <span class="text-6xl text-white">&mdash;</span>
          </div>
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-white">Macbook user</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Vue > React</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Creative front end developer</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl">Rick Lemmen</span>
            <span class="text-6xl text-white">&mdash;</span>
          </div>
        </div>
      </div>
      <div class="footer__inside -z-20 relative" aria-hidden="true">
        <div class="py-8 flex w-full flex-nowrap items-center overflow-clip">
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-white">Macbook user</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Vue > React</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Creative front end developer</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Rick Lemmen</span>
            <span class="text-6xl text-white">&mdash;</span>
          </div>
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-white">Macbook user</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Vue > React</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Creative front end developer</span>
            <span class="text-6xl text-white">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-white">Rick Lemmen</span>
            <span class="text-6xl text-white">&mdash;</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.contact {
  @apply relative bg-bg text-black z-1 block;
}

.footer__inside {
  @apply bg-bg-dark block bottom-0 left-0 overflow-hidden w-full;
}
</style>
