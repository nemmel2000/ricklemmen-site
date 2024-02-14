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
          <div class="inline-flex items-center justify-center gap-10 h-min">

            <button onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu" @click="handleNav()">
              <svg width="28" height="28" viewBox="0 0 100 100">
                <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path class="line line2" d="M 20,50 H 80" />
                <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
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
    gsap.to(".nav-items", {
      duration: 0.5,
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      scale: 1.2,
      ease: "power4.out",

      display: "inline-flex",
    });
  } else {
    navTl.to(".nav-items", {
      duration: 0.5,
      opacity: 0,
      x: -24,
      filter: "blur(10px)",
      scale: 1.2,
      ease: "power4.out",
      display: "none",
      stagger: 0,
    });
    navTl.to(".nav-items", {
      duration: 0.1,
      display: "none",
    }, "-=0.1");

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

.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
  stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
}
</style>
