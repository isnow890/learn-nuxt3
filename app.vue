<template>
  <NuxtLayout>
    <!-- <NuxtPage page-key="static" /> -->
    <!-- <NuxtPage /> -->
    <NuxtPage />
    <!-- <RouterView /> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log(nuxtApp);

// vue application instance
// nuxtApp.vueApp.component()
// nuxtApp.vueApp.directive()
// nuxtApp.vueApp.use()

// provide 활용
// nuxtApp.provide('hello', (msg: string) => {
//   return `Hello ${msg}`;
// });
</script>

<style scoped></style>
