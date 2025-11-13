import test from 'ava'
import { Parsing } from '@/index.js'

test('Parsing a single parameter', T => {
  let Input = ['--Parameter1', 'Value1']
  let Output = Parsing<{ Parameter1: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1'
  })
})

test('Parsing a single parameter with equal sign', T => {
  let Input = ['--Parameter1=Value1']
  let Output = Parsing<{ Parameter1: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'Value1'
  })
})

test('Parsing a single parameter with no upper case', T => {
  let Input = ['--parameter1', 'value1']
  let Output = Parsing<{ Parameter1: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})

test('Parsing a single parameter with no upper case and equal sign', T => {
  let Input = ['--parameter1', 'value1']
  let Output = Parsing<{ Parameter1: string }>(Input)
  T.deepEqual(Output, {
    Parameter1: 'value1'
  })
})