<template>
  <div class="video-container">
    <iframe
      width="100%"
      height="100%"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src?: string;
}
// withDefault 사용하여 기본값 지정할 수 있음.
withDefaults(defineProps<Props>(), {
  src: 'https://www.youtube.com/embed/zmq2zu-UsRk',
});
</script>
