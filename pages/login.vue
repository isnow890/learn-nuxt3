<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageAuthTitle title="Login" />
      <PageAuthDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['guest-only'],
});
const handleLoginSuccess = async () => {
  console.log('실행');
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());

  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>
