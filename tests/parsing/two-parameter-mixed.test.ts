import test from 'ava'
import { Parsing } from '@/index.js'

test('Parsing two mixed parameters', T => {
  let Input = ['--Parameter1', 'Value1', '--parameter2=Value2']
  let Output = Parsing<{ Parameter1: string; Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  })
})

test('Parsing two mixed parameters with no upper case', T => {
  let Input = ['--parameter1', 'value1', '--parameter2=value2']
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Output = Parsing<{ parameter1: string; parameter2: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    parameter1: 'value1',
    parameter2: 'value2'
  })
})

test('Parsing two mixed parameters with no upper case 2', T => {
  let Input = ['--Parameter1', 'value1', '--parameter2=value2']
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let Output = Parsing<{ Parameter1: string; parameter2: string }>(Input, {
    UpperStartingCase: false
  })
  T.deepEqual(Output, {
    Parameter1: 'value1',
    parameter2: 'value2'
  })
})