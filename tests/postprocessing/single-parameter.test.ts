import test from 'ava'
import { PostProcessing } from '@/index.js'

test('PostProcessing a single parameter', T => {
  let Input = ['--Parameter1', 'Value1']
  let Output = PostProcessing<{ Parameter1: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1'
  })
})

test('PostProcessing a single parameter with no upper case', T => {
  let Input = ['--parameter1', 'value1']
  let Output = PostProcessing<{ Parameter1: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})