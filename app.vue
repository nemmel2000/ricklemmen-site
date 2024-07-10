<template>
  <transition name="page" mode="out-in">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </transition>
</template>

<style>
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(1rem);
}

.page-enter-active,
.page-leave-active {
  transition: all 1s;
}

</style>