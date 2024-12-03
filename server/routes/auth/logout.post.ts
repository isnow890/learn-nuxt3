export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  deleteCookie(event, config.authCookieName);

  return {
    user: null,
  };
});
