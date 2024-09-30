import type { CourseWithPath } from '~/types/course';
interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = async (): Promise<CoursesReturn> => {
  const { data, error } = await useFetch('/api/courses');
  if (error.value) {
    console.log('errorrororr');
    throw createError({
      ...error.value,
    });
  }
  return { courses: data.value as CourseWithPath[] };
};
