import * as ESToolkit from 'es-toolkit'
import type { JSONValue, IParsingOptions } from '../types.js'

/**
 * Parses a list of CLI-style arguments into a structured options object and positional arguments.
 *
 * @typeParam I - The shape of the options object produced from the parsed arguments.
 * @param Args - The raw argument tokens, including option flags and positional values.
 * @param FuncOptions - Configuration for post-processing behavior, such as the naming convention transformer.
 * @returns A promise resolving to an object containing the parsed options and remaining positional arguments.
 */
export async function PostProcessing<I extends JSONValue>(Args: string[], FuncOptions: IParsingOptions = {
  NamingConvention: ESToolkit.pascalCase
}): Promise<{ Options: I, Positional: string[] }> {
  const Options: Record<string, boolean | string> = Object.create(null)
  const Positional: string[] = []

  for (let I = 0; I < Args.length; I++) {
    if (Args[I] === '--') {
      Positional.push(...Args.slice(I + 1))
      break
    }

    if (Args[I].startsWith('--')) {
      if (I + 1 === Args.length || Args[I + 1].startsWith('--')) {
        Options[await FuncOptions.NamingConvention(Args[I])] = true
      } else {
        Options[await FuncOptions.NamingConvention(Args[I])] = Args[I + 1]
        I++
      }
    }
  }

  return { Options: Options as I, Positional }
}