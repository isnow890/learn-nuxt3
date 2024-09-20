<template>
  <q-padding pading>
    <div class="text-center q-py-xl">
      <PageTitle :title="route.path" />
    </div>
  </q-padding>
</template>

<script lang="ts">
const route = useRoute();
export default {};
console.log('prefetching-2');
</script>
<script setup lang="ts"></script>
<style scoped></style>
