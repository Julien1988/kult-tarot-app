<script lang="ts" setup>
import { useUtils } from "../composables/utils";

const { pending, data: data } = await useLazyFetch("/api/tarot", {
  server: false,
});

const isClick = ref(false);
const cartTitle = ref("");
const cartText = ref("");
const phrases = ref([]);
const isTimeToDie = ref(false);
const messageOfDeath = ref("");
const notThisTime = ref(false);
const textToShowFront = ref("");
const acceptYourDeath = ref(false);

const message = "Je viendrais vous chercher dans 7 jours...";
const messageArray = message.split("");
let finalMessage = "";
let currentIndex = 0;

const typeWriter = () => {
  if (currentIndex < messageArray.length) {
    acceptYourDeath.value = false;
    finalMessage += messageArray[currentIndex];
    currentIndex++;
    messageOfDeath.value = finalMessage;
    const randmonNumberToDie: number = useUtils(200);
    setTimeout(typeWriter, randmonNumberToDie);
  } else {
    acceptYourDeath.value = true;
  }
  notThisTime.value = true;
};

const takeCart = async () => {
  console.log(notThisTime.value);
  if (!data.value) {
    return;
  }
  isClick.value = true;
  const randomNumberToDie: number = useUtils(66);
  if (randomNumberToDie === 1 && notThisTime.value === false) {
    isTimeToDie.value = true;
    typeWriter();
    exit;
  }
  notThisTime.value = false;

  isTimeToDie.value = false;
  const cartTotal: number = Object.keys(data.value).length;
  const randomNumber: number = useUtils(cartTotal);
  cartTitle.value = Object.keys(data.value)[randomNumber];
  cartText.value = data.value[cartTitle.value];

  phrases.value = cartText.value[1].split(": ");
  const textToShow: array = [];
  phrases.value.forEach((e) => {
    let cleanTest = e.split(".");
    cleanTest.pop();
    cleanTest = cleanTest.toString();

    textToShow.push(cleanTest);
  });

  textToShowFront.value = textToShow;
};
</script>

<template>
  <nav class="p-4">
    <NuxtLink to="/about" class="text-slate-800 animate-pulse text-[0.5em]"
      >Voir de l'autre côté du voile</NuxtLink
    >
  </nav>
  <div
    v-if="!isTimeToDie"
    class="min-h-screen flex flex-auto items-center flex-wrap justify-center pt-6 pb-6"
  >
    <div
      v-if="!isClick"
      class="min-h-screen flex items-center flex-wrap content-center justify-center"
    >
      <div
        v-if="pending"
        class="text-red-800 text-4xl hover:text-red-900 pt-2 pb-2 text-center animate-pulse"
      >
        Un instant, je termine un sacrifice...
      </div>
      <div
        v-else
        class="min-h-screen flex items-center flex-wrap content-center justify-center"
      >
        <div class="pt-2 pb-2">
          <button
            @click="takeCart"
            class="text-red-800 text-4xl hover:text-red-900"
          >
            Tirez moi les cartes
          </button>
        </div>
        <img
          class="overflow-hidden pt-2 pb-2"
          alt="image created by drV0dka"
          :src="'./img/Kult_image.png'"
        />
      </div>
    </div>
    <div
      class="p-12 min-h-screen flex flex-auto items-center flex-wrap justify-center text-white text-2xl"
      v-else
    >
      <div class="flex flex-wrap flex-col">
        <h2 class="text-red-800 font-bold">
          {{ cartTitle }}
        </h2>
        <h3 class="pt-6 pb-6 italic">{{ cartText[0] }}</h3>
        <ul>
          <li class="pt-4" v-for="(phrase, index) in textToShowFront">
            <p v-if="index === 0"></p>
            <p v-if="index === 1">
              <span class="font-bold">Individu : </span> {{ phrase }}
            </p>
            <p v-if="index === 2">
              <span class="font-bold">Lieu : </span> {{ phrase }}
            </p>
            <p v-if="index === 3">
              <span class="font-bold">Organisation : </span> {{ phrase }}
            </p>
            <p v-if="index === 4">
              <span class="font-bold">Situation : </span> {{ phrase }}
            </p>
            <p v-if="index === 5">
              <span class="font-bold">Créature : </span> {{ phrase }}
            </p>
            <p v-if="index === 6">
              <span class="font-bold">Objet : </span> {{ phrase }}
            </p>
          </li>
        </ul>
        <button
          @click="takeCart"
          class="text-red-800 text-3xl hover:text-red-900 pt-12 animate-pulse"
        >
          Tirez moi encore les cartes
        </button>
      </div>
    </div>
  </div>
  <div
    v-else
    class="min-h-screen flex flex-auto items-center flex-wrap justify-center pt-6 pb-6"
  >
    <h2
      class="text-red-800 text-6xl hover:text-red-900 p-10 animate-pulse text-center"
    >
      {{ messageOfDeath }}
    </h2>

    <button
      v-if="acceptYourDeath"
      class="text-red-800 text-3xl hover:text-red-900 p-10 animate-pulse text-center"
      @click="takeCart"
    >
      J'accepte de servir de sacrifice
    </button>
  </div>
</template>

<style scoped>
button {
  font-family: "Rubik Wet Paint", cursive;
}
</style>
