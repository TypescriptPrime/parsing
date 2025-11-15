import test from 'ava'
import { PostProcessing } from '@/index.js'

test('PostProcessing a single parameter to return a lowercase key', T => {
  let Input = ['--parameter1', 'value1']
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Output = PostProcessing<{ parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    parameter1: 'value1'
  })
})

test('PostProcessing a single parameter to return a lowercase key with equal sign', T => {
  let Input = ['--parameter1=value1']
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Output = PostProcessing<{ parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    parameter1: 'value1'
  })
})

test('PostProcessing a single parameter to return a lowercase key (starting with upper)', T => {
  let Input = ['--Parameter1', 'value1']
  let Output = PostProcessing<{ Parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})

test('PostProcessing a single parameter to return a lowercase key with equal sign (starting with upper)', T => {
  let Input = ['--Parameter1=value1']
  let Output = PostProcessing<{ Parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})
