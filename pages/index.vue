<script lang="ts" setup>
import { use } from "h3";

const takeCart = async () => {
  const { pending, data: data } = useLazyFetch("/api/tarot");

  console.log(pending, data);
};
</script>

<template>
  <div
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
</template>

<style scoped>
button {
  font-family: "Rubik Wet Paint", cursive;
}
</style>
