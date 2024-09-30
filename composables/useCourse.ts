import { useCourses } from './useCourses';
import type { CourseWithPath } from '~/types/course';

interface CourseReturn {
  course: Maybe<CourseWithPath>; // Course | null | undefined
  prevCourse: Maybe<CourseWithPath>; // Course | null | undefined
  nextCourse: Maybe<CourseWithPath>; // Course | null | undefined
}

export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
  const { data, error } = await useFetch(`/api/courses/${courseSlug}`);

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return data.value as CourseReturn;
};
