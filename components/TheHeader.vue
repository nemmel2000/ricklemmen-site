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
        <div class="col-span-12 lg:col-span-9 h-full 2xl:pt-10 pb-10 xl:pb-32 min-h-[80vh]">
          <div
              class="flex flex-col gap-10 text-white tracking-widest h-full"
          >
            <div class="flex flex-col gap-y-10">
              <h1 class="header-title text-gradient">
                Creating web<br/>experiences
              </h1>
              <p class="font-light w-1/2 tracking-[0.2em]">
                Hoi, mijn naam is Rick Lemmen en ik ben een <span v-text="yearsOld"></span>-jarige frontend ontwikkelaar. Ik breng graag een unieke draai aan elk project met mijn creatieve benadering. Bezoek mijn website en bekijk mijn portfolio!
              </p>
            </div>
          </div>
          <div class="text-4xl text-white group w-max group ani-cursor cursor-pointer animate scroll-to-more">
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
            class="col-span-10 col-start-2 md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-9 relative aspect-[9/10] xl:aspect-auto xl:h-full ani-move-up"
        >
          <div
              class="absolute ani-cursor left-0 -bottom-40 w-full  picture aspect-[3/4]"
          >
            <NuxtPicture
                format="webp"
                class="w-full h-full object-contain pf-photo rounded-bl-extra rounded-tr-extra overflow-hidden"
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
  @apply text-[120px] font-bold leading-none tracking-[0.15em];
}

.hover-point {
  position: absolute;
  z-index: 2;
  width: calc(100% / 3);
  height: calc(100% / 3);
}

.hover-point:nth-child(1) {
  top: 0;
  left: 0;
}

.hover-point:nth-child(2) {
  top: 0;
  left: calc(100% / 3);
}

.hover-point:nth-child(3) {
  top: 0;
  right: 0;
}

.hover-point:nth-child(4) {
  top: calc(100% / 3);
  left: 0;
}

.hover-point:nth-child(5) {
  top: calc(100% / 3);
  right: 0;
}

.hover-point:nth-child(6) {
  bottom: 0;
  left: 0;
}

.hover-point:nth-child(7) {
  bottom: 0;
  left: calc(100% / 3);
}

.hover-point:nth-child(8) {
  bottom: 0;
  right: 0;
}

.hover-point:nth-child(1):hover ~ .pf-photo {
  box-shadow: 15px 15px 50px rgba(0, 0, 0, .3);
  transform-origin: right top;
  transform: perspective(2000px) rotateX(5deg) rotateY(-5deg) rotateZ(2deg);
}

.hover-point:nth-child(2):hover ~ .pf-photo {
  box-shadow: 0 15px 50px rgba(0, 0, 0, .3);
  transform-origin: center top;
  transform: perspective(2000px) rotateX(5deg);
}

.hover-point:nth-child(3):hover ~ .pf-photo {
  box-shadow: -15px 15px 50px rgba(0, 0, 0, .3);
  transform-origin: left top;
  transform: perspective(2000px) rotateX(5deg) rotateY(5deg) rotateZ(-2deg);
}

.hover-point:nth-child(4):hover ~ .pf-photo {
  box-shadow: 15px 5px 50px rgba(0, 0, 0, .3);
  transform-origin: left center;
  transform: perspective(2000px) rotateY(-5deg);
}

.hover-point:nth-child(5):hover ~ .pf-photo {
  box-shadow: -15px 5px 50px rgba(0, 0, 0, .3);
  transform-origin: right center;
  transform: perspective(2000px) rotateY(5deg);
}

.hover-point:nth-child(6):hover ~ .pf-photo {
  box-shadow: 15px -15px 50px rgba(0, 0, 0, .3);
  transform-origin: right bottom;
  transform: perspective(2000px) rotateX(-5deg) rotateY(-5deg) rotateZ(-2deg);
}

.hover-point:nth-child(7):hover ~ .pf-photo {
  box-shadow: 0 -15px 50px rgba(0, 0, 0, .3);
  transform-origin: center bottom;
  transform: perspective(2000px) rotateX(-5deg);
}

.hover-point:nth-child(8):hover ~ .pf-photo {
  box-shadow: -15px -15px 50px rgba(0, 0, 0, .3);
  transform-origin: left bottom;
  transform: perspective(2000px) rotateX(-5deg) rotateY(5deg) rotateZ(2deg);
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