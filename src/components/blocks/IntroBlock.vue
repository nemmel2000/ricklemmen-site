<template>
  <section id="about" class="container-xl mt-32">
    <div class="grid grid-cols-12">
      <div class="col-span-full relative h-full">
        <h2 class="text-gradient title-2 absolute top-0 left-0 z-[2] translate-y-1">
          Creating web <br />
          Experiences
        </h2>
        <div class="mt-6 relative size-full rounded-2xl overflow-clip w-4/5">
          <img
            src="/img/rick.jpg"
            alt="foto van Rick Lemmen"
            class="object-cover min-h-[440px] rounded-2xl ani-img-reveal"
          />
          <img
            src="/img/rick-transparant.png"
            alt="foto van Rick Lemmen"
            class="object-cover rounded-2xl absolute top-0 left-0 min-h-[440px] z-[3] ani-img-reveal"
          />
        </div>
      </div>
      <div class="col-span-6 col-start-7">
        <picture>
          <source srcset="/img/projects/makita_mockup_blured.webp" type="image/webp" />
          <source srcset="/img/projects/makita_mockup_blured.jpg" type="image/jpg" />
          <img
            src="/img/projects/makita_mockup_blured.webp"
            alt="Image"
            class="size-full relative object-cover min-h-[320px] rounded-2xl -mt-[100%] z-[3] ani-exit"
          />
        </picture>
      </div>
      <div class="col-span-full text-white font-light mt-6">
        Hoi, mijn naam is Rick Lemmen en ik ben een <span v-text="yearsOld"></span>-jarige frontend
        ontwikkelaar. Met mijn creatieve insteek geef ik graag een unieke draai aan elk project.
        Scroll verder naar onder om meer over mij en mijn werk te ontdekken.
      </div>
    </div>
  </section>
</template>

<script setup>
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

<style scoped lang="postcss"></style>
