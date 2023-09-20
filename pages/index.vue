<script lang="ts" setup>
import { useUtils } from "../composables/utils";

const { pending, data: data } = useLazyFetch("/api/tarot");

const isClick = ref(false);
const cartTitle = ref("");
const cartText = ref("");
const phrases = ref([]);

const takeCart = async () => {
  if (!data.value) {
    return;
  }
  isClick.value = true;
  const cartTotal: number = Object.keys(data.value).length;
  const randmonNumber: number = useUtils(cartTotal);
  cartTitle.value = Object.keys(data.value)[randmonNumber];
  cartText.value = data.value[cartTitle.value];
  const regex = /(\w+:\s[^.]+\.)/g;
  const matches = cartText.value[1].match(regex);
  if (matches) {
    phrases.value = matches;
    console.log(phrases.value);
  }
};
</script>

<template>
  <div
    class="min-h-screen flex flex-auto items-center flex-wrap justify-center"
  >
    <div
      v-if="!isClick"
      class="min-h-screen flex flex-auto items-center flex-wrap justify-center"
    >
      <div>
        <button
          @click="takeCart"
          class="text-red-800 text-4xl hover:text-red-900"
        >
          Tirez moi les cartes
        </button>
      </div>
      <img
        class="overflow-hidden"
        alt="image created by drV0dka"
        :src="'./img/Kult_image.png'"
      />
    </div>
    <div
      class="p-12 min-h-screen flex flex-auto items-center flex-wrap justify-center text-white text-2xl"
      v-else
    >
      <div>
        <h2>
          {{ cartTitle }}
        </h2>
        <h3 class="pt-6 pb-6">{{ cartText[0] }}</h3>
        <ul>
          <li class="pt-4" v-for="phrase in phrases">
            {{ phrase }}
          </li>
        </ul>
        <button
          @click="takeCart"
          class="text-red-800 text-2xl hover:text-red-900 pt-12"
        >
          Tirez moi encore les cartes
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  font-family: "Rubik Wet Paint", cursive;
}
</style>
