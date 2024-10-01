import { getUserFromEvent } from '../utils/auth';

export default defineEventHandler((event) => {
  const user = getUserFromEvent(event);
  console.log('middleware user', user);
  if (user) {
    //context에 user 추가
    event.context.user = user;
  }
});
