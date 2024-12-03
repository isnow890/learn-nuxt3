// auth/post (POST)

import { getUserByEmail } from '~/server/models/user';
import { verifyPassword } from '~/server/utils/password';

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email: string; password: string }>(event);

  const { email, password } = body;

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email address and password are required',
    });
  }

  const userWithPassword = getUserByEmail(email);

  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }

  const verified = verifyPassword(password, userWithPassword.password);

  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  const config = useRuntimeConfig();
  setCookie(event, config.authCookieName, JSON.stringify(userWithoutPassword));

  return {
    user: userWithPassword,
  };
});
