import test from 'ava'
import { PostProcessing } from '@/index.js'

test('PostProcessing two mixed parameters', T => {
  let Input = ['--Parameter1', 'Value1', '--parameter2=Value2']
  let Output = PostProcessing<{ Parameter1: string; Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  })
})