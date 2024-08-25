<template>
  <!-- Intro -->
  <div class="fixed w-screen h-dvh inset-0 z-[100] bg-bg-dark" id="intro">
    <div class="relative w-screen h-screen">
      <img
        class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[30dvh] opacity-20"
        src="/img/logo.svg"
      />
      <img
        class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[30dvh] intro-mask"
        src="/img/logo.svg"
      />
    </div>
  </div>
</template>

<style type="postcss" scoped>
.title {
  @apply text-4xl xl:text-[80px] font-bold tracking-[10px] leading-tight;
}
</style>
