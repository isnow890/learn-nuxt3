export default defineI18nConfig(() => {
  const locale =
    (useCookie('locale').value as 'en' | 'ko') || useDefaultLocale().value;

  return {
    legacy: false,
    globalInjection: true,
    locale,
    messages: {
      en: {
        home: 'Home',
        about: 'About',
        youtube: 'Youtube',
        admin: 'Admin',
        login: 'Login',
        logout: 'Logout',
      },
      ko: {
        home: '홈',
        about: '어바웃',
        youtube: '유튜브',
        admin: '관리자',
        login: '로그인',
        logout: '로그아웃',
      },
    },
  };
});
