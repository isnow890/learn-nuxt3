<template>
  <div>
    <div class="q-pa-md">
      <div class="q-my-xl text-center q-gutter-md">
        <q-btn
          label="default layout"
          color="dark"
          @click="changePageLayout('default')"
        />
        <q-btn
          label="admin layout"
          color="dark"
          @click="changePageLayout('admin')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// type layout = 'default' | 'admin' | 'same-layout';
// import type { LayoutKey } from '#build/types/layouts';

type layout = 'default' | 'admin' | 'same-layout';
const changePageLayout = (layout: layout) => {
  setPageLayout(layout);
};
definePageMeta({
  layout: false,
});
</script>

<style scoped></style>
