export const checkUrlValidity = (url: string) => {
  try {
    return Boolean(new URL(url))
  } catch {
    return false
  }
}
