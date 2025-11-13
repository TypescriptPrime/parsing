import test from 'ava'
import { Parsing } from '@/index.js'

test('Parsing a single parameter to return a lowercase key', T => {
  let Input = ['--parameter1', 'value1']
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Output = Parsing<{ parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    parameter1: 'value1'
  })
})

test('Parsing a single parameter to return a lowercase key with equal sign', T => {
  let Input = ['--parameter1=value1']
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Output = Parsing<{ parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    parameter1: 'value1'
  })
})

test('Parsing a single parameter to return a lowercase key (starting with upper)', T => {
  let Input = ['--Parameter1', 'value1']
  let Output = Parsing<{ Parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})

test('Parsing a single parameter to return a lowercase key with equal sign (starting with upper)', T => {
  let Input = ['--Parameter1=value1']
  let Output = Parsing<{ Parameter1: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})
