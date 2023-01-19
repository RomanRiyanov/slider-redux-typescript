/* eslint-disable no-promise-executor-return */
export function pseudoFetch<T>(func: () => T) {
  return new Promise<{ data: T }>((resolve) => setTimeout(() => resolve({ data: func() }), 500));
}

export const setLikeApi = (id: string) => id;
