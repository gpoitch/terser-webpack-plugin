export type MinimizedResult = import("./index.js").MinimizedResult;
/** @typedef {import("./index.js").MinimizedResult} MinimizedResult */
/**
 * @template T
 * @param {import("./index.js").InternalOptions<T>} options
 * @returns {Promise<MinimizedResult>}
 */
export function minify<T>(
  options: import("./index.js").InternalOptions<T>
): Promise<MinimizedResult>;
/**
 * @param {string} options
 * @returns {Promise<MinimizedResult>}
 */
export function transform(options: string): Promise<MinimizedResult>;
