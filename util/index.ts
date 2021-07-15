/**
 * Check if module is available.
 * @param path Module to check for
 * @return True if module exists
 */
export const canRequire = (path: string) => {
  try {
    require.resolve(path)
    return true
  } catch {
    return false
  }
}
