<template>
  <nav class="fixed top-0 left-0 z-50 w-full bg-transparent nav" id="TheNavbar">
    <div class="container flex items-center justify-between py-3 mx-auto">
      <a href="../" class="relative">
        <div class="relative h-12 w-full">
          <svg
            width="38"
            height="48"
            viewBox="0 0 38 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_159_290)">
              <path
                d="M25.3063 27.5514C28.0264 26.3424 30.1421 24.8313 31.6533 22.5645C33.1645 20.2977 33.9201 17.7287 33.9201 14.5552C33.9201 9.87055 32.4089 6.39483 29.3865 3.97694C26.3641 1.55904 22.1328 0.350098 16.6926 0.350098H0.220703V47.6501H8.38108V29.2137V22.8667V6.9993H16.9948C19.8661 6.9993 21.9817 7.75489 23.4929 9.11496C25.0041 10.475 25.6086 12.4396 25.6086 15.0086C25.6086 17.5776 24.853 19.391 23.1907 20.7511C21.8306 21.96 19.8661 22.7156 17.4482 22.8667V29.5159L26.9686 47.8012H35.7335V47.3479L25.1552 27.5514H25.3063Z"
                fill="white"
              />
              <path
                d="M9.74023 46.8943V8.20801H16.5406V41.9074H22.5853L25.3054 46.8943H9.74023Z"
                fill="white"
              />
              <path
                d="M23.6445 41.1519L27.1202 47.6499H36.0362L32.5605 41.1519H23.6445Z"
                fill="white"
              />
              <path
                d="M37.0944 46.8946L34.5254 41.9077H38.0011V46.8946H37.0944Z"
                fill="#F78E3F"
              />
            </g>
            <defs>
              <clipPath id="clip0_159_290">
                <rect
                  width="37.7795"
                  height="47.3"
                  fill="white"
                  transform="translate(0.220703 0.350098)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </a>
      <div class="flex items-center justify-end gap-10">
        <div class="bg-white rounded-extra px-8 py-4">
          <div class="inline-flex items-center justify-center gap-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 512 512"
              class="translate-y-0.5 hover:translate-y-0 origin-center animate"
              @click="handleNav()"
            >
              <path
                opacity="1"
                class="fill-tertiary"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
            <div class="inline-flex items-center gap-x-6 nav-items">
              <a href="#intro" class="nav-item after:animate">Home</a>
              <a href="#intro" class="nav-item after:animate">About me</a>
              <!--              <a href="#intro" class="nav-item after:animate">Home</a>-->
              <!--              <a href="#intro" class="nav-item after:animate">Home</a>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { gsap } from "gsap";

let navOpen = ref(true);

onMounted(() => {
  handleNav(false);
});

function handleNav() {
  navOpen.value = !navOpen.value;
  let navTl = gsap.timeline();
  console.log(navOpen.value);
  if (navOpen.value === true) {
    gsap.to(".nav-items", {
      duration: 0.1,
      display: "inline-flex",
    });
    gsap.to(".nav-item", {
      duration: 0.5,
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      scale: 1.2,
      ease: "power4.out",
      stagger: -0.2,

      display: "inline-flex",
    });
  } else {
    navTl.to(".nav-item", {
      duration: 0.5,
      opacity: 1,
      x: -24,
      filter: "blur(10px)",
      scale: 1.2,
      ease: "power4.out",
      display: "none",
      stagger: 0.2,
    });
    navTl.to(".nav-items", {
      duration: 0.1,
      display: "none",
    });
  }
}
</script>

<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  scale: 1.2;
  filter: blur(10px);
}

.nav-item {
  @apply block relative after:absolute after:-bottom-0.5 after:left-0 after:content-[''] after:block after:h-0.5 after:w-0 hover:after:w-full after:bg-tertiary after:z-10;
}
</style>
