import { getCourses } from '~/server/models/course';

export default defineEventHandler(async (event) => {
  console.log('호출');
  const courses = getCourses();
  console.log('courses', courses);
  return courses;
});
