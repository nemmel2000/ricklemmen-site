<template>
  <section class="pt-60 pb-40 lg:pb-60 z-1 scroll-m-20" style="color: white">
    <div class="container-xl" id="projects">
      <div class="flex flex-col">
        <p class="text-xl lg:text-2xl font-thin">Een greep uit mijn projecten</p>

        <a
          class="project group"
          data-project="1"
          data-fancybox
          data-src="/img/mockup_rijr.jpg"
          data-caption="Regio in je Rugzak"
        >
          <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">
            Regio in je rugzak
          </h2>
          <div class="ani-number h-1/2 overflow-clip group relative">
            <p class="group-hover:-translate-y-full animate">01.</p>
            <p
              class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
              aria-hidden="true"
            >
              01.
            </p>
          </div>
        </a>
        <div class="project-img" data-project="1" style="display: none; opacity: 0">
          <img
            src="/img/mockup_rijr.jpg"
            class="size-full object-cover"
            alt="Project regio in je rugzak"
          />
        </div>

        <a
          data-project="2"
          class="project group"
          data-fancybox
          data-src="/img/projects/makita_mockup_blured.jpg"
          data-caption="Makita"
        >
          <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">Makita</h2>
          <div class="ani-number h-1/2 overflow-clip group relative">
            <p class="group-hover:-translate-y-full animate">02.</p>
            <p
              class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
              aria-hidden="true"
            >
              02.
            </p>
          </div>
        </a>
        <div class="project-img" data-project="2" style="display: none; opacity: 0">
          <img
            src="/img/projects/makita_mockup_blured.jpg"
            class="size-full object-cover"
            alt="Makita"
          />
        </div>

        <a
          class="project group"
          data-project="3"
          data-fancybox
          data-src="/img/projects/bates.jpg"
          data-caption="Bates & Madolex"
        >
          <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">
            Bates & Madolex
          </h2>
          <div class="ani-number h-1/2 overflow-clip group relative">
            <p class="group-hover:-translate-y-full animate">03.</p>
            <p
              class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
              aria-hidden="true"
            >
              03.
            </p>
          </div>
        </a>
        <div class="project-img" data-project="3" style="display: none; opacity: 0">
          <img src="/img/projects/bates.jpg" class="size-full object-cover" alt="Bates" />
        </div>

        <a
          class="project group"
          data-project="4"
          data-fancybox
          data-src="/img/projects/marketmix.jpg"
          data-caption="Landingspages - Marketmix"
        >
          <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">Landingpages</h2>
          <div class="ani-number h-1/2 overflow-clip group relative">
            <p class="group-hover:-translate-y-full animate">04.</p>
            <p
              class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
              aria-hidden="true"
            >
              04.
            </p>
          </div>
        </a>
        <div class="project-img" data-project="4" style="display: none; opacity: 0">
          <img
            src="/img/projects/marketmix.jpg"
            class="size-full object-cover"
            alt="Landingpages"
          />
        </div>

        <p class="text-xl font-thin pt-4 opacity-50">
          Kom binnenkort terug om de projecten in detail te bekijken.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.project {
  @apply flex justify-between border-b py-10;
}

.project-title {
  @apply text-3xl lg:text-6xl font-bold;
}

.project-img {
  @apply fixed w-2/5 mr-[10%] h-[60vh] top-1/2 -translate-y-1/2 left-0 right-0 ml-auto cursor-none pointer-events-none hidden lg:block z-10;
}
</style>
<script setup lang="ts"></script>
