import test from 'ava'
import { Parsing } from '@/index.js'

test('Parsing a single parameter', T => {
  let Input = ['--Parameter1', 'Value1', '--Parameter2', 'Value2']
  let Output = Parsing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  })
})

test('Parsing a single parameter with equal sign', T => {
  let Input = ['--Parameter1=Value1', '--Parameter2=Value2']
  let Output = Parsing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1',
    Parameter2: 'Value2'
  })
})

test('Parsing a single parameter with no upper case', T => {
  let Input = ['--parameter1', 'value1', '--parameter2', 'value2']
  let Output = Parsing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1',
    Parameter2: 'value2'
  })
})

test('Parsing a single parameter with no upper case and equal sign', T => {
  let Input = ['--parameter1', 'value1', '--parameter2', 'value2']
  let Output = Parsing<{ Parameter1: string, Parameter2: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1',
    Parameter2: 'value2'
  })
})