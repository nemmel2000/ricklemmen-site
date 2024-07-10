<template>
  <SpeedInsights />
  <div class="relative bg-bg-light">
    <TheNavbar />
    <slot />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
