export enum SupportedLang {
  EN = "en",
  ES = "es",
}

export type RepositoryProviderName = "static" | "cms";

export function propertyIsNotNull<T, K extends keyof T>(
  obj: T,
  key: K
): obj is T & Record<K, NonNullable<T[K]>> {
  return obj[key] !== null;
}
