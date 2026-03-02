import test from 'ava'
import { ParseArgumentsAndOptions } from '@/index.js'

test('ParseArgumentsAndOptions a single parameter', async T => {
  let Input = ['--Parameter1', 'Value1']
  let Expected = {
    Parameter1: 'Value1'
  }

  T.deepEqual(await ParseArgumentsAndOptions(Input), { Options: Expected, Positional: []})
})

test('ParseArgumentsAndOptions a single parameter with no upper case', async T => {
  let Input = ['--parameter1', 'value1']
  let Expected = {
    Parameter1: 'value1'
  }

  T.deepEqual(await ParseArgumentsAndOptions(Input), { Options: Expected, Positional: []})
})