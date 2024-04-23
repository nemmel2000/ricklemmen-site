<template>
  <div class="min-h-screen pb-20 xl:pb-40">
    <div
        class="bg-tertiary w-full h-full rounded-bl-extra relative"
        id="header"
    >
      <div class="h-full w-full overflow-clip absolute inset-0">
        <NuxtImg
            class="w-full h-full object-cover"
            src="img/bg/bg_gradient_wave.jpg"
            alt="background image"
        />
      </div>
      <div class="container grid grid-cols-12 h-full pt-32 2xl:pt-40">
        <div class="col-span-12 xl:col-span-9 h-full 2xl:pt-10 xl:pb-32 xl:min-h-[80vh]">
          <div
              class="flex flex-col gap-10 text-white tracking-widest h-max pb-10 xl:pb-0 xl:h-full"
          >
            <div class="flex flex-col gap-y-4 xl:gap-y-10">
              <h1 class="header-title text-gradient">
                Creating web<br/>experiences
              </h1>
              <p class="font-light xl:w-1/2 tracking-[0.2em]">
                Hoi, mijn naam is Rick Lemmen en ik ben een <span v-text="yearsOld"></span>-jarige frontend ontwikkelaar. Ik breng graag een unieke draai aan elk project met mijn creatieve benadering. Bezoek mijn website en bekijk mijn portfolio!
              </p>
            </div>
          </div>
          <div class="text-4xl text-white group w-max group ani-cursor cursor-pointer animate scroll-to-more relative z-20">
            <p>Discover</p>
            <div class="inline-flex gap-4">
              <p class="inline-flex fill-white text-white">More </p>
              <p>
              <nuxt-img
                  class="h-10 relative z-10 translate-y-1 rotate-45 group-hover:translate-y-2 group-hover:translate-x-2 animate"
                  src="img/icons/arrow-right-long.svg"
                  alt="arrow right"
              />
              </p>
            </div>
          </div>
        </div>
        <div
            class="col-span-10 col-start-2 md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-9 relative aspect-[9/10] xl:aspect-auto xl:h-full ani-move-up ani-exit"
        >
          <div
              class="absolute ani-cursor left-0 -bottom-32 xl:-bottom-40 w-full picture aspect-[3/4]"
          >
            <NuxtImg
                format="webp"
                class="size-full object-cover pf-photo rounded-bl-extra rounded-tr-extra overflow-clip"
                src="img/foto_rick.jpg"
                alt="foto of Rick Lemmen"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.header-title {
  @apply text-4xl xl:text-7xl xl:text-[120px] font-bold leading-none tracking-[0.15em];
}


.pf-photo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 0 50px rgba(0, 0, 0, .3);
  transition: .5s ease;
}
</style>

<script setup>
// Calculate my age
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

let yearsOld = getAge("2000/06/23");
</script>