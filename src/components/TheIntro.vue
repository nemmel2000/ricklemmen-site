<template>
  <!-- Intro -->
  <div class="fixed w-screen h-dvh inset-0 z-[100] bg-tertiary" id="intro">
    <div class="relative w-screen h-screen">
      <div class="absolute bottom-0 left-0 w-full h-full bg-tertiary">
        <div class="container-xl h-full">
          <div class="absolute top-0 left-0 w-full h-2 bg-white timeline"></div>
          <div class="flex flex-col-reverse gap-y-10 text-white h-full pb-20">
            <p id="intro-text" class="title text-white blur-0">Design</p>
            <p id="intro-text" class="title text-white blur-0">Development</p>
            <p id="intro-text" class="title text-white blur-0">Animations</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style type="postcss" scoped>
.title {
  @apply text-4xl xl:text-[80px] font-bold tracking-[10px] leading-tight;
}
</style>
