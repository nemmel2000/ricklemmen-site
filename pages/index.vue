<template>
  <TheIntro/>

  <!-- Content -->
  <span class="cursor-follower"></span>
  <div class="min-h-screen pb-20 xl:pb-40">
    <div
        class="bg-tertiary w-full h-full rounded-bl-extra overflow-visible"
        id="header"
    >
      <div class="container grid grid-cols-12 h-full pt-32 2xl:pt-40">
        <div class="col-span-12 lg:col-span-6 h-full 2xl:pt-60 pb-10 xl:pb-32">
          <div
              class="flex flex-col justify-end gap-10 text-white tracking-widest h-full"
          >
            <h1 class="title--h1">
              Creating <span class="text-secondary">web</span> experiences
            </h1>
            <p class="text-xl">
              Hoi, mijn naam is Rick Lemmen en ik ben een <span v-text="yearsOld"></span>-jarige frontend ontwikkelaar.
              Met mijn creatieve insteek geef ik graag een unieke draai aan elk project. Neem gerust een kijkje op mijn
              website en ontdek mijn portfolio.
            </p>
          </div>
        </div>
        <div
            class="col-span-10 col-start-2 md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-9 relative aspect-[9/10] xl:aspect-auto xl:h-full"
        >
          <div
              class="absolute ani-exit ani-cursor left-0 -bottom-20 w-full  picture aspect-[3/4]"
          >
            <div class="hover-point"></div>
            <div class="hover-point"></div>
            <div class="hover-point"></div>
            <div class="hover-point"></div>
            <div class="hover-point"></div>
            <div class="hover-point"></div>
            <div class="hover-point"></div>
            <div class="hover-point"></div>
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

  <section id="section-2" class="relative mt-10 ani-exit">
    <div
        class="bg-secondary-light w-full h-full absolute inset-0 z-1 ani-item"
    ></div>
    <div class="py-40 text-center w-full relative z-10 flex flex-col gap-4">
      <p class="text-5xl font-bold">Combining design & code</p>
      <p class="title--h1">Let's get creative!</p>
    </div>
  </section>
  <!--  Under construction message  -->
  <section id="section-3" class="relative flex items-center ani-up mt-40">
    <div class="py-40 min-h-[60vh] text-center w-full mx-auto relative z-10 flex flex-col gap-4 h-full bg-gradient-custom blur-xl ">
    </div>
    <div class="absolute inset-0 flex flex-col gap-y-6 items-center justify-center z-20">
      <p class="text-5xl font-bold text-white ani-text-reveal">Under construction</p>
      <p class="text-2xl text-white ani-text-reveal">Ik&nbsp;ben&nbsp;nog&nbsp;bezig&nbsp;met&nbsp;het&nbsp;verbeteren&nbsp;van&nbsp;mijn&nbsp;portfolio.&nbsp;Kom&nbsp;binnenkort&nbsp;terug.</p>
    </div>

  </section>
  <!--  <ProjectSlider/>-->
  <footer class="bg-tertiary mt-32">
    <div class="container mx-auto">
      <div class="py-4 text-white inline-flex justify-between items-center w-full">
        <div class="ani-item">
          &copy; Copyright Rick Lemmen <span v-text="currentYear"></span>
        </div>
        <div class="ani-item ">
          <a href="https://linkedin.com/in/rick-lemmen-8163b3199" rel="nofollow noopener" target="_blank" class="text-white fill-white">
            <svg viewBox="0 0 448 512" width="24px" height="24px" fill="white"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis'
import TheIntro from "~/components/TheIntro.vue";
// import ProjectSlider from "~/components/ProjectSlider.vue";

const currentYear = new Date().getFullYear();

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

// Developer Console logs

let defaultAnimation = {
  duration: 1,
  y: "100",
  scale: 1.3,
  ease: "power2.inOut",
  opacity: 0,
  stagger: 0.2,
};

// GSAP
if (process.client) {

  //scroll to top on page load
  window.scrollTo(0, 0);

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)

  let tl = gsap.timeline();
  tl.from("#intro .timeline", {
    duration: 2.5,
    width: "0%",
    ease: "none",
  });
  tl.from(
      "#intro-text",
      {
        duration: 0.5,
        y: 40,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.6,
        filter: "blur(6px)",
      },
      "-=2.2",
  );
  tl.to("#intro", {
    duration: 1.7,
    scale: 1.2,
    yPercent: -115,
    ease: "power4.inOut",
    webkitFilter: "blur(10px)",
  });
  tl.to("#intro", {
    duration: 0.1,
    zIndex: -100,
  });
  tl.from("#header .title--h1", {
    ...defaultAnimation,
  }, "-=1");
  tl.from(
      "#header p",
      {
        ...defaultAnimation,
      },
      "-=0.8",
  );
  tl.from(
      "#header .picture",
      {
        ...defaultAnimation,
      },
      "-=0.8",
  );

  //trigger a timeline when scrolltrigger #section2
  let section2tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section-2",
          start: "top 80%",
          end: "bottom 80%",
        },
      })
      .from(
          "#section-2 p",
          {
            duration: 1.4,
            scale: 2,
            opacity: 0,
            ease: "power4.out",
            filter: "blur(6px)",
          },
          "+=0.5",
      )
      .from(
          "#section-2 .ani-item",
          {
            duration: 1.4,
            xPercent: 100,
            ease: "power4.out",
          },
          "-=0.7",
      );

  // ani-exit

  let aniExit = document.querySelectorAll(".ani-exit");
  aniExit.length > 0 &&
  aniExit.forEach((item) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "bottom 85%",
        scrub: 0.5,
      },
      duration: 1.4,
      yPercent: -110,
      filter: "blur(12px)",
      ease: "power4.in",
    });
  });

  // ani-up
  let aniUp = document.querySelectorAll(".ani-up");
  aniUp.length > 0 &&
  aniUp.forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
      },
      ...defaultAnimation,
    });
  });

  // ani text reveal
  let aniTextReveal = document.querySelectorAll(".ani-text-reveal");
  console.log(aniTextReveal);
  aniTextReveal.length > 0 &&
  aniTextReveal.forEach((item) => {
    let text = item.textContent;
    let textArray = text.split("");
    item.innerHTML = "";
    textArray.forEach((letter) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      span.style.display = "inline-block";
      span.style.transition = "opacity 1s";
      item.appendChild(span);
    });
    gsap.fromTo(item.children,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        },
    );
  });

  // CUSTOM CURSOR
  // Check if it's a touch device
  const isTouchDevice = 'ontouchstart' in window;
  const createCursorFollower = () => {
    const $el = document.querySelector('.cursor-follower');
    // Each time the mouse coordinates are updated,
    // we need to pass the values to gsap in order
    // to animate the element
    window.addEventListener('mousemove', (e) => {
      const {target, x, y} = e;
      // Check if target is inside a link or button
      const isTargetLinkOrBtn = target?.closest('a') || target?.closest('button') || target?.closest('.ani-cursor');
      // GSAP config
      gsap.to($el, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        transform: `scale(${isTargetLinkOrBtn ? 2.5 : 1})`,
      });
    });
    // Hidding the cursor element when the mouse cursor
    // is moved out of the page
    document.addEventListener('mouseleave', (e) => {
      gsap.to($el, {
        duration: 0.7,
        opacity: 0,
      });
    });
  };
// Only invoke the function if isn't a touch device
  if (!isTouchDevice) {
    createCursorFollower();
  }

}
</script>

<style scoped lang="postcss">
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

.bg-gradient-custom{
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

}


</style>