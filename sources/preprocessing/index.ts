import type * as Process from 'node:process'

type DropFirstANDTwo<T extends readonly unknown[]> = T extends readonly [unknown, unknown, ...infer Tail] ? Tail : []
type DropFirst<T extends readonly unknown[]> = T extends readonly [unknown, ...infer Tail] ? Tail : []

/**
 * Returns a filtered `process.argv` with only options and their values.
 * 
 * @param {string} Args - A value of `process.argv`.
 * @returns A filtered `process.argv` with only options and their values.
 */
export function PreProcessing<Args extends typeof Process.argv>(Args: Args): DropFirstANDTwo<Args> | DropFirst<Args> {
  if (Args[2].startsWith('--')) {
    return Args.slice(2) as DropFirstANDTwo<Args>
  } else {
    return Args.slice(1) as DropFirst<Args>
  }
}