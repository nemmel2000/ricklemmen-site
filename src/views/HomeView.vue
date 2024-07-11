<template>
  <div>
    <TheIntro />
    <main class="relative z-10 bg-bg">
      <section
        id="header"
        class="bg-tertiary w-screen h-[85dvh] rounded-bl-3xl relative header z-1"
      >
        <div class="absolute inset-0 flex items-center justify-center ani-exit">
          <div
            class="flex flex-col items-center text-5xl md:text-7xl xl:text-8xl 2xl:text-[120px] text-white font-jakarta font-extrabold tracking-wider leading-tight"
          >
            <h1 class="design">
              <span class="inline-block D hover:-rotate-12">D</span>
              <span class="inline-block e">e</span>
              <span class="inline-block s">s</span>
              <span
                class="inline-block i"
                style="
                  opacity: 1;
                  visibility: inherit;
                  translate: none;
                  rotate: none;
                  scale: none;
                  transform: rotateX(540deg);
                "
                >i</span
              >
              <span class="inline-block g">g</span>
              <span class="inline-block n">n</span>
              <span class="inline-block space">&nbsp;</span>
              <span class="inline-block amp text-pr hover:-translate-y-2">&amp;</span>
            </h1>
            <h2 class="development">
              <span class="inline-block D hover:-rotate-12">D</span>
              <span class="inline-block e">e</span>
              <span class="inline-block v">v</span>
              <span class="inline-block e">e</span>
              <span class="inline-block l">l</span>
              <span class="inline-block o rotate-spin">o</span>
              <span class="inline-block p">p</span>
              <span class="inline-block m">m</span>
              <span class="inline-block e">e</span>
              <span class="inline-block n">n</span>
              <span class="inline-block t hover:rotate-12">t</span>
            </h2>
          </div>
        </div>
        <div class="absolute bottom-10 left-0 w-full">
          <div class="container-xl">
            <div class="flex flex-col gap-y-4 xl:gap-y-10 w-full">
              <div class="flex flex-col justify-end items-end text-white/80 text-sm version">
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
      </section>
      <section id="about" class="w-screen h-screen pt-40 relative z-1">
        <div class="container-xl grid grid-cols-12">
          <div
            class="col-span-full lg:col-span-10 lg:col-start-2 xl:col-span-8 xl:col-start-3 relative h-[80dvh] 2xl:px-16 overflow-clip"
          >
            <picture>
              <source srcset="/img/rick.webp" type="image/webp" />
              <img
                src="/img/rick.jpg"
                alt="foto of Rick Lemmen"
                class="-z-1 w-full xl:w-3/5 object-cover mx-auto absolute inset-0 rounded-bl-3xl rounded-tr-3xl overflow-clip h-full img-bg"
              />
            </picture>
            <h2
              class="text-5xl md:text-7xl xl:text-8xl z-20 2xl:text-[120px] text-center font-jakarta font-extrabold tracking-wider leading-tight ani-enter"
            >
              Rick Lemmen
            </h2>
            <picture>
              <source srcset="/img/rick-transparant.webp" type="image/webp" />
              <img
                src="/img/rick-transparant.png"
                alt="foto of Rick Lemmen"
                class="z-20 w-full xl:w-3/5 object-cover mx-auto absolute inset-0 rounded-bl-3xl rounded-tr-3xl overflow-clip h-full"
              />
            </picture>
          </div>
        </div>
      </section>
      <section id="usps" class="py-20 relative z-1">
        <div class="py-10 lg:py-20 rotate-6 relative z-10 border-black">
          <div class="inline-flex ani-scroll__right line relative z-10 my-3">
            <a href="" target="_blank" class="line-usp" rel="nofollow noopener noreferrer"
              >Javascript</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://tailwindcss.com/"
              class="line-usp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >Tailwind</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://figma.com"
              class="line-usp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >Figma</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://gsap.com/"
              class="line-usp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >GSAP</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://vuejs.org/"
              class="line-usp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >Vue JS</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://www.typescriptlang.org/"
              class="line-usp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >TypeScript</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
              class="line-usp"
              target="_blank"
              rel="nofollow noopener noreferrer"
              >Javascript</a
            >
          </div>
          <div class="inline-flex ani-scroll__left line relative z-10 mt-10">
            <a href="" target="_blank" class="line-usp" rel="nofollow noopener noreferrer"
              >Photoshop</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://www.adobe.com/nl/products/photoshop.html"
              target="_blank"
              class="line-usp"
              rel="nofollow noopener noreferrer"
              >AlpineJS</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://statamic.com/"
              target="_blank"
              class="line-usp"
              rel="nofollow noopener noreferrer"
              >Statamic</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://www.uptrends.nl/wat-is/rfest-api"
              target="_blank"
              class="line-usp"
              rel="nofollow noopener noreferrer"
              >API's</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://laravel.com/"
              target="_blank"
              class="line-usp"
              rel="nofollow noopener noreferrer"
              >Laravel</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://react.dev/"
              target="_blank"
              class="line-usp"
              rel="nofollow noopener noreferrer"
              >React</a
            >
            <span class="line-dot"> •</span
            ><a
              href="https://www.adobe.com/nl/products/photoshop.html"
              target="_blank"
              class="line-usp"
              rel="nofollow noopener noreferrer"
              >Photoshop</a
            >
          </div>
        </div>
      </section>
      <section
        id="image-scale"
        class="xl:h-[100vh] aspect-square xl:aspect-auto flex justify-center relative overflow-clip z-1"
      >
        <img
          class="object-cover object-center size-full ani-scale-img origin-center lg:origin-top ani-up"
          src="/img/mockup_rijr.jpg"
          alt="background image"
        />
      </section>

      <section id="projects" class="pt-60 pb-40 lg:pb-60 lg:pt-[50vh] z-1" style="color: black">
        <div class="container-xl">
          <div class="flex flex-col">
            <p class="text-xl lg:text-2xl font-thin">Een greep uit mijn projecten</p>

            <a
              class="project group"
              data-project="1"
              data-fancybox
              data-src="/img/mockup_rijr.jpg"
              data-caption="Regio in je Rugzak"
            >
              <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">
                Regio in je rugzak
              </h2>
              <div class="ani-number h-1/2 overflow-clip group relative">
                <p class="group-hover:-translate-y-full animate">01.</p>
                <p
                  class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
                  aria-hidden="true"
                >
                  01.
                </p>
              </div>
            </a>
            <div class="project-img" data-project="1" style="display: none; opacity: 0">
              <img
                src="/img/mockup_rijr.jpg"
                class="size-full object-cover"
                alt="Project regio in je rugzak"
              />
            </div>

            <a
              data-project="2"
              class="project group"
              data-fancybox
              data-src="/img/projects/makita_mockup_blured.jpg"
              data-caption="Makita"
            >
              <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">Makita</h2>
              <div class="ani-number h-1/2 overflow-clip group relative">
                <p class="group-hover:-translate-y-full animate">02.</p>
                <p
                  class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
                  aria-hidden="true"
                >
                  02.
                </p>
              </div>
            </a>
            <div class="project-img" data-project="2" style="display: none; opacity: 0">
              <img
                src="/img/projects/makita_mockup_blured.jpg"
                class="size-full object-cover"
                alt="Makita"
              />
            </div>

            <a
              class="project group"
              data-project="3"
              data-fancybox
              data-src="/img/projects/bates.jpg"
              data-caption="Bates & Madolex"
            >
              <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">
                Bates & Madolex
              </h2>
              <div class="ani-number h-1/2 overflow-clip group relative">
                <p class="group-hover:-translate-y-full animate">03.</p>
                <p
                  class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
                  aria-hidden="true"
                >
                  03.
                </p>
              </div>
            </a>
            <div class="project-img" data-project="3" style="display: none; opacity: 0">
              <img src="/img/projects/bates.jpg" class="size-full object-cover" alt="Bates" />
            </div>

            <a
              class="project group"
              data-project="4"
              data-fancybox
              data-src="/img/projects/marketmix.jpg"
              data-caption="Landingspages - Marketmix"
            >
              <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">
                Landingpages
              </h2>
              <div class="ani-number h-1/2 overflow-clip group relative">
                <p class="group-hover:-translate-y-full animate">04.</p>
                <p
                  class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full"
                  aria-hidden="true"
                >
                  04.
                </p>
              </div>
            </a>
            <div class="project-img" data-project="4" style="display: none; opacity: 0">
              <img
                src="/img/projects/marketmix.jpg"
                class="size-full object-cover"
                alt="Landingpages"
              />
            </div>

            <!--          <div class="project group" data-project="5">-->
            <!--            <h2 class="project-title group-hover:translate-x-4 animate ani-text-up">Bekijk meer</h2>-->
            <!--            <div class="ani-number h-1/2 overflow-clip group relative">-->
            <!--              <p class="group-hover:-translate-y-full animate">05.</p>-->
            <!--              <p class="group-hover:-translate-y-0 animate absolute top-0 left-0 translate-y-full" aria-hidden="true">05.</p>-->
            <!--            </div>-->
            <!--          </div>-->
            <!--          <div class="project-img" data-project="5" style="display: none; opacity: 0">-->
            <!--            <img src="/img/projects/bhs_design.jpg" class="size-full object-cover" alt="Project regio in je rugzak">-->
            <!--          </div>-->

            <p class="text-xl font-thin pt-4 opacity-50">
              Kom binnenkort terug om de projecten in detail te bekijken.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" class="bg-bg-dark contact">
        <div class="pb-10 lg:pb-20 container-xl relative z-20">
          <div class="flex flex-col md:flex-row justify-between md:items-end gap-y-6 gap-x-4">
            <h2 class="text-5xl">
              Contact <br />
              opnemen?
            </h2>
            <div class="flex gap-x-4">
              <a
                href="mailto:nemmel2000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                class="animate hover:opacity-75 hover:-translate-y-0.5"
              >
                <img src="/img/icons/envelope-solid.svg" class="size-8 lg:size-6" alt="envelope" />
              </a>
              <a
                href="https://www.linkedin.com/in/rick-lemmen-8163b3199/"
                target="_blank"
                rel="noopener noreferrer"
                class="animate hover:opacity-75 hover:-translate-y-0.5"
              >
                <img src="/img/icons/linkedin.svg" class="size-8 lg:size-6" alt="linkedin" />
              </a>
              <a
                href="https://github.com/nemmel2000"
                target="_blank"
                rel="noopener noreferrer"
                class="animate hover:opacity-75 hover:-translate-y-0.5"
              >
                <img src="/img/icons/square-github.svg" class="size-8 lg:size-6" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div class="footer__inside fixed -z-10">
        <div class="py-8 flex w-full flex-nowrap items-center overflow-clip">
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-black">Macbook user</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Vue > React</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Creative front end developer</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Rick Lemmen</span>
            <span class="text-6xl text-black">&mdash;</span>
          </div>
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-black">Macbook user</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Vue > React</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Creative front end developer</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Rick Lemmen</span>
            <span class="text-6xl text-black">&mdash;</span>
          </div>
        </div>
      </div>
      <div class="footer__inside -z-20 relative" aria-hidden="true">
        <div class="py-8 flex w-full flex-nowrap items-center overflow-clip">
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-black">Macbook user</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Vue > React</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Creative front end developer</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Rick Lemmen</span>
            <span class="text-6xl text-black">&mdash;</span>
          </div>
          <div class="slide-text font-bold" style="animation-duration: 30s">
            <span class="text-4xl lg:text-6xl text-black">Macbook user</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Vue > React</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Creative front end developer</span>
            <span class="text-6xl text-black">&mdash;</span>
            <span class="text-4xl lg:text-6xl text-black">Rick Lemmen</span>
            <span class="text-6xl text-black">&mdash;</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss" scoped>
.slide-text {
  @apply inline-flex items-center gap-x-6 whitespace-nowrap pr-6 tracking-[4px] text-white xl:text-2xl;
  animation: rtl 14s infinite linear;

  &--slow {
    animation: rtl 30s infinite linear;
  }
}

.slide-dot {
  @apply -translate-y-0.5 text-3xl hover:-translate-y-1 animate;
}

.rotate-spin:hover {
  transform: rotateY(180deg) translateX(6px);
}

.line {
  @apply flex items-center gap-x-2 text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:gap-x-6 xl:text-5xl 2xl:text-6xl;

  .line-usp {
    /*On hover show only the border of the text*/
    @apply transition-all duration-300 ease-in-out flex-shrink-0 hover:text-transparent;

    &:hover {
      -webkit-text-stroke: 3px black; /* width and color */
    }
  }

  .line-dot {
    @apply slide-dot;
  }
}

.project {
  @apply flex justify-between border-b border-white py-10;
}

.project-title {
  @apply text-3xl lg:text-6xl font-bold;
}

.project-img {
  @apply fixed w-2/5 mr-[10%] h-[60vh] top-1/2 -translate-y-1/2 left-0 right-0 ml-auto cursor-none pointer-events-none hidden lg:block z-10;
}

.contact {
  @apply relative bg-bg-dark text-white z-1 block;
}

.footer__inside {
  @apply bg-bg block bottom-0 left-0 overflow-hidden w-full;
}

@keyframes rtl {
  0% {
    transform: translateZ(0);
    visibility: visible;
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>

<script setup lang="ts">
import TheIntro from '@/components/TheIntro.vue'

function getAge(dateString) {
  var today = new Date()
  var birthDate = new Date(dateString)
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

let yearsOld = getAge('2000/06/23')
</script>
