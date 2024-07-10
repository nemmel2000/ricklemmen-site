<template>
  <div class="mt-20 lg:mt-80">&nbsp;</div>
  <section
    id="image-scale"
    class="xl:h-[100vh] aspect-square xl:aspect-auto flex justify-center relative overflow-clip"
  >
    <NuxtImg
      class="object-cover object-center size-full ani-scale-img origin-center lg:origin-top ani-up"
      src="img/mockup_rijr.jpg"
      alt="background image"
    />
  </section>
  <section id="projects" class="py-60 lg:py-[50vh]" style="color: black">
    <div class="container-custom">
      <div class="flex flex-col gap-y-10">
        <p class="text-xl lg:text-2xl font-thin">
          Een greep uit mijn projecten
        </p>

        <RouterLink to="projects/RegioInJeRugzak" class="project">
          <div class="project__hover">
            <NuxtImg
              class="project__hover__img"
              src="img/mockup_rijr.jpg"
              alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
            </div>
          </div>
          <h2 class="project__text ani-text-up">Regio in je rugzak</h2>
          <p class="translate-y-2">01.</p>
        </RouterLink>

        <RouterLink to="projects/makita" class="project">
          <div class="project__hover">
            <NuxtImg
              class="project__hover__img"
              src="img/projects/makita_mockup_blured.jpg"
              alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span>Binnenkort meer over dit project</span>
                <span class="text-3xl text-primary">🔒</span>
              </div>
              <
              <div class="slide-text">
                <span>Binnenkort meer over dit project</span>
                <span class="text-3xl text-primary">🔒</span>
              </div>
              <div class="slide-text">
                <span>Binnenkort meer over dit project</span>
                <span class="text-3xl text-primary">🔒</span>
              </div>
            </div>
          </div>

          <h2 class="project__text ani-text-up">Makita</h2>
          <p class="translate-y-2">02.</p>
        </RouterLink>

        <div class="project">
          <div class="project__hover">
            <NuxtImg
              class="project__hover__img"
              src="img/projects/bhs_design.jpg"
              alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl -translate-y-0.5">·</span>
              </div>
            </div>
          </div>
          <h2 class="project__text ani-text-up">Webdesigns</h2>
          <p class="translate-y-2">03.</p>
        </div>

        <div class="project">
          <div class="project__hover">
            <NuxtImg
              class="project__hover__img"
              src="img/mockup_rijr.jpg"
              alt="background image"
            />
            <div class="py-2 flex w-full flex-nowrap overflow-clip bg-bg">
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl text-primary">•</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl text-primary">•</span>
              </div>
              <div class="slide-text">
                <span class="">Lees meer over dit project</span>
                <span class="text-5xl text-primary">•</span>
              </div>
            </div>
          </div>
          <h2 class="project__text ani-text-up">Websites</h2>
          <p class="translate-y-2">04.</p>
        </div>

        <p class="text-xl lg:text-2xl font-thin">
          Kom binnenkort terug om de projecten en meer te bekijken!
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.project {
  @apply flex justify-between border-b pb-6;

  &__hover {
    @apply fixed top-0 left-0 w-[60vw] lg:w-[33vw] max-h-[50vh] pointer-events-none z-[121];
    visibility: hidden;

    img {
      @apply aspect-[4/3] object-cover w-full;
    }
  }

  &__text {
    @apply text-3xl lg:text-6xl font-bold;
  }

  .slide-text {
    @apply inline-flex items-center gap-x-6 whitespace-nowrap pr-6 tracking-[4px] text-white xl:text-2xl opacity-0;
    animation: rtl 10s infinite linear;
    visibility: hidden;
  }

  @keyframes rtl {
    0% {
      transform: translateZ(0);
      visibility: visible;
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
<script setup lang="ts"></script>
