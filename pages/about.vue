<script lang="ts" setup></script>

<template>
  <div class="min-h-screen p-6">
    <div class="">
      <nav class="p-4">
        <NuxtLink to="/" class="text-red-800 animate-pulse"
          >Retourner tirer les cartes...</NuxtLink
        >
      </nav>
      <div class="text-white">
        <h1 class="pb-12 text-6xl text-center">Kult Tarot</h1>
        <p class="p-4">
          Il s'agit d'une application développée à partir de contenu mis
          gratuitement à disposition par l'éditeur sur son site internet.

          <NuxtLink class="text-red-800" to="https://kultdivinitylost.com/"
            >voir officiel de la VO
          </NuxtLink>
          ,
          <NuxtLink class="text-red-800">voir officiel de la VF</NuxtLink>
        </p>
        <p class="p-4">
          Elle a été développée pour le fun et pour aider la communauté lors de
          ses parties de Kult.
        </p>
      </div>
    </div>
    <div class="p-4 text-white">
      <h2 class="text-2xl pb-4">Info sur le dévelopeur :</h2>
      <p>
        Vous me connaissez peut être sur le pseudonyme de DrV0dka, je développe
        de manière professionnel des sit internet ainsi que des applications web
        comme celle-ci Vous pouvez vous rendre sur mon site pro à cette adresse
        :
        <NuxtLink class="text-red-800" to="https://jb-studio.be"
          >jb-studio.be</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
