import type { EventHandler, EventHandlerRequest } from 'h3';

export const verifyPassword = (userPassword: string, password: string) => {
  return userPassword === password;
};
