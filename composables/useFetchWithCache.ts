import { StorageSerializers } from '@vueuse/core';
import type { CourseWithPath } from '~/types/course';

export default async <T>(url: string): Promise<T> => {
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url, {
      headers: useRequestHeaders(['cookie']),
    });
    if (error.value) {
      throw createError({
        ...error.value,
      });
    }

    cached.value = data.value as T;
  } else {
    console.log(`Getting value from cache from ${url}`);
  }

  return cached.value;

  // const { data, error } = await useFetch();

  // return data.value as CourseReturn;
};
