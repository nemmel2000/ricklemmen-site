<template>
  <div class="header">
    <div class="header__content">
      <div class="relative size-full">
        <div class="size-full header__images">
          <div
            class="header__image"
            style="
              background-image: url(public/img/projects/bhs_design.jpg);
              background-position: center;
              background-size: cover;
            "
          ></div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-end pb-6 gap-y-10 header__text">
          <div class="flex justify-between">
            <div class="w-full header__project-info">
              <h2 class="header__project-title text-clip-reveal">Budget Homestore</h2>
            </div>
            <div
              class="flex-col justify-end items-end text-white/80 text-sm version w-full pr-4 h-max mt-auto hidden lg:flex"
            >
              <div class="ani-number h-1/2 overflow-clip group relative text-white/80">
                <p class="group-hover:-translate-y-full animate">V 1.0.1</p>
                <p
                  class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
                  aria-hidden="true"
                >
                  V 1.0.1
                </p>
              </div>
              <p>Laatse update juli 2024</p>
            </div>
          </div>
          <div
            class="ani-teletext flex w-full flex-nowrap overflow-clip cursor-pointer"
            data-scroll-to="about"
          >
            <div class="slide-text">
              <span>Scroll naar beneden om meer te ontdekken</span>
              <span class="slide-dot">•</span>
            </div>
            <div class="slide-text">
              <span>Scroll naar beneden om meer te ontdekken</span>
              <span class="slide-dot">•</span>
            </div>
            <div class="slide-text">
              <span>Scroll naar beneden om meer te ontdekken</span>
              <span class="slide-dot">•</span>
            </div>
            <div class="slide-text">
              <span>Scroll naar beneden om meer te ontdekken</span>
              <span class="slide-dot">•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-4 left-0 w-full px-8 flex gap-x-4">
      <template v-for="item in headerItems" :key="item.id">
        <div
          class="header__tab"
          :class="
            headerActive === item.id &&
            `after:absolute after:content-[''] after:h-full after:bg-white`
          "
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const headerItems = [
  {
    id: 0,
    title: 'Budget Home Store',
    image: '../public/img/projects/bhs_design.jpg'
  },
  {
    id: 1,
    title: 'Regio in je rugzak',
    image: '../public/img/mockup_rijr.jpg'
  },
  {
    id: 2,
    title: 'MarketMix',
    image: '../public/img/projects/marketmix.jpg'
  }
]

let headerActive = ref(0)

// Function to handle header change
function handleHeaderChange() {
  // Get the next header item
  const nextHeader = headerItems[headerActive.value % headerItems.length]

  // Create a new header image element
  let newHeaderImage = document.createElement('div')
  newHeaderImage.className = 'header__image'
  newHeaderImage.style.backgroundImage = `url(${nextHeader.image})`
  newHeaderImage.style.backgroundPosition = 'center'
  newHeaderImage.style.backgroundSize = 'cover'
  newHeaderImage.style.transform = 'translate(-80%, 150%) rotate(12deg) scale(0.2)'

  // Append the new header image to the container
  const headerContainer = document.querySelector('.header__images') // Ensure this selector matches your HTML structure
  headerContainer.appendChild(newHeaderImage)

  gsap.to('.header__project-title', {
    opacity: 0,
    translateY: '-100%',
    duration: 1, // Added duration for the first animation
    ease: 'power4.out', // Corrected ease property
    onComplete: () => {
      // Remove the old title element after the animation completes
      const oldTitle = document.querySelector('.header__project-title')
      if (oldTitle) {
        oldTitle.remove()
      }

      // Create a new header title element
      let newHeaderTitle = document.createElement('h2')
      newHeaderTitle.className = 'header__project-title'
      newHeaderTitle.innerText = headerItems[headerActive.value].title
      newHeaderTitle.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' // Set initial clipPath for new title

      // Append the new title to the project info container
      document.querySelector('.header__project-info').appendChild(newHeaderTitle)

      // Animate the new header title into view
      gsap.to(newHeaderTitle, {
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)', // Animate to full visibility
        duration: 1,
        ease: 'power4.out' // Added easing for the new animation
      })
    }
  })

  // GSAP animation to fade in the new header image
  gsap.to(newHeaderImage, {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    duration: 1.5,
    ease: 'power4.Out',
    onComplete: () => {
      // Cleanup old header image after animation
      const oldHeaderImage = headerContainer.querySelector('.header__image:not(:last-child)')
      if (oldHeaderImage) {
        gsap.to(oldHeaderImage, {
          opacity: 0,
          duration: 1,
          onComplete: () => {
            oldHeaderImage.remove() // Remove old header image from DOM
          }
        })
      }
    }
  })
}

// Function to slide headers
function headerSlide() {
  return setInterval(() => {
    headerActive.value++

    // Reset headerActive if it exceeds totalHeaders
    if (headerActive.value >= headerItems.length) {
      headerActive.value = 0 // Reset to 0 to cycle through headers
    }

    handleHeaderChange()
  }, 15000)
}

// Call the function to start the sliding on component mount
onMounted(() => {
  headerSlide()
})
</script>

<style>
.header__images {
  position: relative; /* Ensure the container is positioned correctly */
  overflow: hidden; /* Prevent overflow of images */
}

.header__image {
  position: absolute; /* Position images absolutely within the container */
  top: 0;
  left: 0;
  width: 100%; /* Ensure images take full width */
  height: 100%; /* Ensure images take full height */
  transition: opacity 1s; /* Smooth transition for opacity */
}
</style>

<style lang="postcss" scoped>
.header {
  @apply h-dvh w-dvw px-4 pt-4 pb-8 lg:px-8  text-white relative;
}

.header__content {
  @apply relative block bg-bg size-full rounded-2xl overflow-clip;
}

.header__images {
  @apply relative after:size-full after:absolute after:inset-0 after:content-[''] after:from-bg-dark/20 after:to-bg-dark/60 after:bg-gradient-to-b;
}

.header__image {
  @apply absolute inset-0 size-full;
}

.header__project-info {
  @apply text-4xl uppercase font-bold tracking-widest ml-4 pl-6 border-l-2 border-white;
}

.text-clip-reveal {
  animation: textClipReveal 1s ease-in-out;
}

.header__tab {
  @apply w-full h-0.5 bg-white/50 relative;
}

.header__tab::after {
  animation: widthToFull 15s linear;
}
</style>
