import { StorageSerializers } from '@vueuse/core';
import type { CourseReturn, CourseWithPath } from '~/types/course';

// interface CourseReturn {
//   course: Maybe<CourseWithPath>; // Course | null | undefined
//   prevCourse: Maybe<CourseWithPath>; // Course | null | undefined
//   nextCourse: Maybe<CourseWithPath>; // Course | null | undefined
// }
export const useCourse = (courseSlug: string): Promise<CourseReturn> =>
  useFetchWithCache<CourseReturn>(`/api/courses/${courseSlug}`);
