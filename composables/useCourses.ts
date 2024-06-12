import type { CourseWithPath } from '~/types/course';
import coursesData from './coursesData';
interface CoursesReturn {
  courses: CourseWithPath[];
}

export const useCourses = (): CoursesReturn => {
  const courses = coursesData.map((item) => ({
    ...item,
    rating: item.rating.toFixed(1), //5.0
    reviewsCount: item.reviewsCount.toLocaleString(), //1000 -> 1,000
    studentCount: item.studentCount.toLocaleString(), //
    path: `/course/${item.courseSlug}`,
  }));
  return { courses };
};
