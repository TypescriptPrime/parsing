import test from 'ava'
import { PostProcessing } from '@/index.js'

test('PostProcessing a single parameter', T => {
  let Input = ['--Parameter1', 'Value1', '--Parameter2', 'Value2']
  let Output = PostProcessing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  })
})

test('PostProcessing a single parameter with equal sign', T => {
  let Input = ['--Parameter1=Value1', '--Parameter2=Value2']
  let Output = PostProcessing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  })
})

test('PostProcessing a single parameter with no upper case', T => {
  let Input = ['--parameter1', 'value1', '--parameter2', 'value2']
  let Output = PostProcessing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1',
    Parameter2: 'value2'
  })
})

test('PostProcessing a single parameter with no upper case and equal sign', T => {
  let Input = ['--parameter1', 'value1', '--parameter2', 'value2']
  let Output = PostProcessing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1',
    Parameter2: 'value2'
  })
})