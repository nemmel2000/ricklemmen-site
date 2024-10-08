<template>
  <TheNavigation />
  <transition name="route" mode="out-in">
    <router-view />
  </transition>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import TheNavigation from '@/components/TheNavigation.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import SplitType from 'split-type'
import Lenis from 'lenis'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

Fancybox.bind('[data-fancybox]', {
  hideScrollbar: true,
  backdropClick: 'close',
  closeButton: true,
  compact: true,
  Fullscreen: {
    autoStart: true
  },
  height: '100vh',
  width: '100vw'
})

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// TODO: enable before production
// gsap.config({
//   nullTargetWarn: true
// })

onMounted(() => {
  console.log('%cWelkom op mijn portfolio', 'color: white; background-color: #007acc;')

  setTimeout(() => {
    //ani directions
    function aniDirection(selector, direction) {
      let aniItems = document.querySelectorAll(selector)

      if (aniItems.length > 0) {
        aniItems.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 88%'
            },
            duration: 1,
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            ease: 'power2.inOut',
            opacity: 0,
            stagger: 0.15,
            filter: 'blur(4px)'
          })
        })
      }
    }

    aniDirection('.ani-up', 'up')
    aniDirection('.ani-down', 'down')
    aniDirection('.ani-left', 'left')
    aniDirection('.ani-right', 'right')

    let links = document.querySelectorAll('.link')
    //if the link also has the class .link--no-gsap filter it out
    links = Array.from(links).filter((link) => !link.classList.contains('link--no-gsap'))
    links.forEach((link) => {
      gsap.from(link, {
        scrollTrigger: {
          trigger: link,
          start: 'top 98%'
        },
        duration: 1,
        display: 'none',
        opacity: 0
      })
    })

    let aniStagger = document.querySelectorAll('.ani-stagger')
    aniStagger.length > 0 &&
      aniStagger.forEach((element) => {
        let aniItems = element.querySelectorAll('.ani-item')
        gsap.from(aniItems, {
          scrollTrigger: {
            trigger: element,
            start: 'top 88%'
          },
          y: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power2.out'
        })
      })

    let movement = 100
    //if screensize is smaller then md
    if (window.innerWidth < 768) {
      movement = 50
    }

    //ani-exit
    let aniExit = document.querySelectorAll('.ani-exit')
    aniExit.length > 0 &&
      aniExit.forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: '1% bottom',
            end: 'top top',
            scrub: 1
          },
          y: -movement
        })
      })

    //ani-enter
    let aniEnter = document.querySelectorAll('.ani-enter')
    aniEnter.length > 0 &&
      aniEnter.forEach((item) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 1
          },
          ease: 'power2.inOut',
          y: movement
        })
      })

    //Scroll To
    let scrollToItems = document.querySelectorAll('[data-scroll-to]')

    if (scrollToItems.length > 0) {
      scrollToItems.forEach((item) => {
        let target = item.getAttribute('data-scroll-to')
        let targetElement = document.getElementById(target)

        if (targetElement) {
          item.addEventListener('click', (e) => {
            e.preventDefault()
            //scroll to the target element
            gsap.to(window, {
              duration: 1,
              ease: 'power2.inOut',
              scrollTo: {
                y: targetElement.offsetTop - 64,
                autoKill: false
              }
            })
          })
        }
      })
    }

    //   SPLIT TEXT
    let aniTextsFade = document.querySelectorAll('.ani-text-fade')
    let aniTextsUp = document.querySelectorAll('.ani-text-up')

    // Animate characters into view with a stagger effect

    aniTextsFade.length > 0 &&
      aniTextsFade.forEach((item) => {
        let charts = new SplitType(item, { types: 'words, chars' })
        gsap.from(charts.chars, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 1
          },
          opacity: 0.4,
          stagger: 0.05
        })
      })

    aniTextsUp.length > 0 &&
      aniTextsUp.forEach((item) => {
        let charts = new SplitType(item, { types: 'chars' })
        gsap.from(charts.chars, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%'
          },
          y: 24,
          opacity: 0,
          stagger: 0.05
        })
      })

    // CUSTOM GSAP
    gsap.to('.nav-item', {
      scrollTrigger: {
        trigger: 'body',
        start: '80px top',
        end: '160px top',
        scrub: true
      },
      stagger: {
        each: 0.2,
        from: 'start'
      },
      duration: 0.5,
      y: -80,
      opacity: 0,
      ease: 'power2.inOut'
    })

    let headerTl = gsap.timeline()
    headerTl.from('#intro .timeline', {
      duration: 1.5,
      width: '0%',
      ease: 'none'
    })
    headerTl.to(
      '.intro-mask',
      {
        duration: 2,
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0%, 0 0%)' // Animate to full visibility
      },
      '-=0.5'
    )
    headerTl.to(
      '#intro',
      {
        duration: 1.2,
        scale: 0,
        ease: 'power4.inOut',
        filter: 'blur(4px)',
        onComplete: () => {
          // Changed parentheses to a colon
          document.getElementById('intro').remove()
        }
      },
      '-=0.2'
    )
    headerTl.from('body', {
      height: window.innerHeight,
      duration: 0.1
    })
    headerTl.from(
      '.header__content',
      {
        scale: 0.2,
        ease: 'power4.Out',
        filter: 'blur(4px)',
        yPercent: 150,
        xPercent: -80,
        rotate: 12,
        duration: 1.5
      },
      '-=0.9'
    )
    headerTl.from(
      '.header__tabs',
      {
        scale: 0.2,
        ease: 'power4.Out',
        filter: 'blur(4px)',
        yPercent: 150,
        xPercent: -80,
        rotate: 12,
        duration: 1.5
      },
      '-=1.5'
    )
    headerTl.from('.header__text', {
      y: 40,
      filter: 'blur(4px)',
      opacity: 0,
      ease: 'power4.Out'
    })
    headerTl.from(
      'nav',
      {
        ease: 'power4.inOut',
        yPercent: -100,
        opacity: 0,
        filter: 'blur(10px)'
      },
      '-=1'
    )
    headerTl
      .from('.design span', {
        y: 24,
        opacity: 0,
        stagger: 0.05,
        onComplete: () => {
          //foreach .development span remove the style elements
          let spans = document.querySelectorAll('.design span')
          spans.forEach((span) => {
            span.removeAttribute('style')
            span.classList.add('animate')
          })
        }
      })
      .from(
        '.development span',
        {
          y: 24,
          opacity: 0,
          stagger: 0.05,
          onComplete: () => {
            //foreach .development span remove the style elements
            let spans = document.querySelectorAll('.development span')
            spans.forEach((span) => {
              span.removeAttribute('style')
              span.classList.add('animate')
            })
          }
        },
        '-=0.5'
      )
      .from(
        '.version',
        {
          y: 24,
          opacity: 0,
          stagger: 0.05
        },
        '-=0.5'
      )
      .from(
        '.slide-text',
        {
          y: 24,
          opacity: 0,
          stagger: 0.05
        },
        '+2'
      )

    gsap.fromTo(
      '.design .i',
      {
        rotateX: 0,
        duration: 1,
        repeat: -1,
        ease: 'power2.inOut',
        color: 'white',
        yoyo: true,
        repeatDelay: 3
      },
      {
        rotateX: 540,
        duration: 1,
        repeat: -1,
        ease: 'power1.inOut',
        color: 'orange',
        yoyo: true,
        repeatDelay: 3
      }
    )

    gsap.from('.img-bg', {
      scrollTrigger: {
        trigger: '.img-bg',
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 1
      },
      opacity: 0.8,
      filter: 'blur(4px)',
      ease: 'power2.inOut'
    })

    // Set the default animation speed
    let animationSpeed = -20

    // Adjust animation speed for smaller screens
    if (window.innerWidth < 768) {
      animationSpeed = -50
    }

    // Function to create and animate a new div
    const createAndAnimateDiv = () => {
      // Logic to create and animate a new div near the end of the document
    }

    // Event listener for scrolling with performance optimization
    const handleScroll = () => {
      const scrollPosition = window.scrollX
      const windowWidth = window.innerWidth
      const documentWidth = document.body.scrollWidth

      if (scrollPosition + windowWidth >= documentWidth - 100) {
        createAndAnimateDiv()
      }
    }

    document.addEventListener('scroll', handleScroll)

    // Scroll animation setup for left elements
    const setupScrollAnimation = (elements) => {
      elements.forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            scrub: 0.5
          },
          xPercent: animationSpeed
        })
      })
    }

    // Select left and right scroll elements
    const scrollLeftElements = document.querySelectorAll('.ani-scroll__left')
    const scrollRightElements = document.querySelectorAll('.ani-scroll__right')

    // Setup scroll animation for left and right elements
    if (scrollLeftElements.length > 0) {
      setupScrollAnimation(scrollLeftElements)
    }

    if (scrollRightElements.length > 0) {
      setupScrollAnimation(scrollRightElements)
    }

    // scale img
    let aniScaleImg = document.querySelectorAll('.ani-scale-img')
    aniScaleImg.length > 0 &&
      aniScaleImg.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'bottom 70%',
            scrub: 1
          },
          ease: 'power2.in',
          scale: 0.5,
          borderTopRightRadius: 160,
          borderBottomLeftRadius: 160
        })
      })

    const aniRevealAnimations = gsap.utils.toArray('.ani-img-reveal')

    if (aniRevealAnimations.length > 0) {
      aniRevealAnimations.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%'
          },
          duration: 1,
          y: 40,
          ease: 'power2.out',
          opacity: 0,
          stagger: 0.2,
          scale: 0.8,
          filter: blur('10px')
        })
      })
    }

    // color switch
    let colorTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: '50% bottom',
        end: '67% bottom',
        scrub: 0.5
      }
    })

    colorTL
      .to('main', {
        backgroundColor: '#FCFCFC',
        color: 'black',
        borderColor: 'black',
        duration: 1
      })
      .to(
        '#projects',
        {
          color: 'black',
          borderColor: 'black',
          duration: 1
        },
        '-=1'
      )
      .to(
        '.color-path',
        {
          fill: 'black',
          duration: 1
        },
        '-=0.8'
      )

    //when .project is hovered change the style of the .project-img within the .project
    let projects = document.querySelectorAll('.project')

    if (projects.length > 0) {
      projects.forEach((project) => {
        const element = project

        // Get the data-project attribute value of the current .project element
        const dataProject = element.getAttribute('data-project')

        // Select the .project-img element with the same data-project attribute value
        let img = document.querySelector(`.project-img[data-project="${dataProject}"]`)

        if (img) {
          // Add event listeners to the project element
          element.addEventListener('mouseover', function () {
            img.style.display = 'flex'
            img.style.opacity = '1'
          })

          element.addEventListener('mouseout', function () {
            img.style.display = 'none'
            img.style.opacity = '0'
          })
        }
      })
    }

    //Lenis
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }, 100)
})
</script>

<style lang="postcss" scoped>
.route-enter-active,
.route-leave-active {
  transition: all 0.2s ease-in-out;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
  filter: blur(4px);
  scale: 0.998;
}
</style>
