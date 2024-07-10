<template>
  <section id="about-me" class="mt-20">
    <div class="container-custom grid grid-cols-12">
      <div class="col-span-full lg:col-span-5 relative ani-exit group">
        <div class="flex flex-col gap-y-6 pl-10 pt-10 relative z-10">
          <div class="relative">
            <h3
              class="text-4xl xl:text-7xl 2xl:text-8xl text-split-title relative z-10"
            >
              Creative<br />
              Front-End<br />
              Ontwikkelaar
            </h3>
          </div>
        </div>
        <NuxtImg
          class="absolute top-0 left-0 w-1/3 object-cover group-hover:-translate-y-2 group-hover:-translate-x-2 animate"
          src="img/icons/book-open-cover.svg"
          alt="background image"
        />
      </div>
      <div class="col-span-full lg:col-span-6 lg:col-start-7">
        <div class="flex flex-col gap-y-3 pt-20 ani-enter">
          <p>
            Mijn expertise in de IT-wereld ligt in het samensmelten van design
            met development en mijn passie voor het creëren van interactieve en
            boeiende webervaringen. Met meerdere jaren ervaring in het
            ontwikkelen van websites, online portals, PWA's en apps, sta ik open
            voor diverse projecten.
          </p>
          <p>
            Door vanaf het allereerste ontwerp tot aan de laatste regel code
            betrokken te zijn, kan ik de visie en waarden van het project
            behouden. Ik voeg graag een vleugje extra animatie en
            micro-interacties toe om gebruikers langer op de webpagina of in de
            app te houden. Elk nieuw project biedt een kans om verder te
            innoveren.
          </p>
          <p>
            Met een vleugje animaties en eigenwijsheid er boven op ga ik voor
            het beste in ieder project.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
h3 {
  font-kerning: none;
}
</style>
