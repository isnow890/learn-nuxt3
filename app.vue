<template>
  <NuxtLayout>
    <!-- <NuxtPage page-key="static" /> -->
    <!-- <NuxtPage /> -->
    <NuxtPage />
    <!-- <RouterView /> -->
  </NuxtLayout>
</template>

<script setup lang="ts">
// const nuxtApp = useNuxtApp();
// console.log('nuxtApp :', nuxtApp);

// nuxtApp.vueApp.component();

// vue application instance
// nuxtApp.vueApp.component()
// nuxtApp.vueApp.directive()
// nuxtApp.vueApp.use()

// nuxtApp.provide('hello', (msg: string) => {
//   return `Hello ${msg}`;
// });

// provide 활용
// nuxtApp.provide('hello', (msg: string) => {
//   return `Hello ${msg}`;
// });
const title = ref('Vue & Nuxt Mastery Class');

const description = ref('짐코딩과 함께 Vue3 기초부터');

// useHead({
//   title,
//   meta: [{ name: 'description', content: description }],
// });
useSeoMeta({
  title,
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 짘` : '짘';
  },
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: '/img/og-imge.png',
});
</script>

<style scoped></style>
