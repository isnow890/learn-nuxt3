export default defineNuxtRouteMiddleware((to, from) => {
  const { isAdmin, isAuthenticated } = storeToRefs(useAuthStore());
  if (isAuthenticated.value) {
    if (import.meta.server) return navigateTo('/');
    return abortNavigation();
  }
});
