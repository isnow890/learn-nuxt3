<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="thumbnail" />
    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<!-- https://i.ibb.co/XbsPPmQ/image.png -->
<script setup lang="ts">
interface Props {
  thumbnail: string;
  title: string;
  subtitle: string;
}

defineProps<Props>();

// defineProps({
//   thumbnail: {
//     type: String,
//     default: '',
//   },
//   title: String,
//   subtitle: String,
// });
defineEmits<{
  click: [];
}>();
</script>
