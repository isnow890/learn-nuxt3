export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthUser();
  if (isAuthenticated.value) {
    if (import.meta.server) return navigateTo('/');
    return abortNavigation();
  }
});
