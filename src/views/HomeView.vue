<template>
  <div>
    <TheIntro />
    <main class="relative z-10 bg-bg-dark">
      <TheHeader />

      <IntroBlock />

      <UspsLine />

      <!--      <section-->
      <!--        id="image-scale"-->
      <!--        class="xl:h-[100vh] aspect-square xl:aspect-auto flex justify-center relative overflow-clip z-1"-->
      <!--      >-->
      <!--        <img-->
      <!--          class="object-cover object-center size-full ani-scale-img origin-center lg:origin-top ani-up"-->
      <!--          src="/img/mockup_rijr.jpg"-->
      <!--          alt="background image"-->
      <!--        />-->
      <!--      </section>-->

      <TheProjects />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheIntro from '@/components/blocks/TheIntro.vue'
import TheHeader from '@/components/blocks/TheHeader.vue'
import IntroBlock from '@/components/blocks/IntroBlock.vue'
import UspsLine from '@/components/blocks/UspsLine.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheProjects from '@/components/blocks/TheProjects.vue'
</script>
