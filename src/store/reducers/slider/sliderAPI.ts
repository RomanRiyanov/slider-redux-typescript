export default function pseudoFetch<T>(func: () => T) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise<{ data: T }>((resolve) => setTimeout(() => resolve({ data: func() }), 500));
}
