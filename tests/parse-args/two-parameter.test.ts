import test from 'ava'
import { ParseArgumentsAndOptions } from '@/index.js'

test('ParseArgumentsAndOptions a single parameter',async T => {
  let Input = ['--Parameter1', 'Value1', '--Parameter2', 'Value2']
  let Expected = {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  }
  
  T.deepEqual(await ParseArgumentsAndOptions(Input), { Options: Expected, Positional: []})
})

test('ParseArgumentsAndOptions a single parameter with no upper case', async T => {
  let Input = ['--parameter1', 'value1', '--parameter2', 'value2']
  let Expected = {
    Parameter1: 'value1',
    Parameter2: 'value2'
  }
  
  T.deepEqual(await ParseArgumentsAndOptions(Input), { Options: Expected, Positional: []})
})