import test from 'ava'
import { PostProcessing } from '@/index.js'

test('PostProcessing a single parameter',async T => {
  let Input = ['--Parameter1', 'Value1', '--Parameter2', 'Value2']
  let Expected = {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  }
  
  T.deepEqual(await PostProcessing(Input), { Options: Expected, Positional: []})
})

test('PostProcessing a single parameter with no upper case', async T => {
  let Input = ['--parameter1', 'value1', '--parameter2', 'value2']
  let Expected = {
    Parameter1: 'value1',
    Parameter2: 'value2'
  }
  
  T.deepEqual(await PostProcessing(Input), { Options: Expected, Positional: []})
})