import test from 'ava'
import { PostProcessing } from '@/index.js'

test('boolean flag located at beginning without value should be true', T => {
  let Input = ['--enable-feature', '--parameter', 'value']
  let Expected = {
    EnableFeature: true,
    Parameter: 'value'
  }

  T.deepEqual(PostProcessing(Input), Expected)
})

test('boolean flag located at end without value should be true', T => {
  let Input = ['--parameter', 'value', '--enable-feature']
  let Expected = {
    Parameter: 'value',
    EnableFeature: true
  }

  T.deepEqual(PostProcessing(Input), Expected)
})

test('boolean flag located in middle without value should be true', T => {
  let Input = ['--parameter1', 'value1', '--enable-feature', '--parameter2', 'value2']
  let Expected = {
    Parameter1: 'value1',
    EnableFeature: true,
    Parameter2: 'value2'
  }

  T.deepEqual(PostProcessing(Input), Expected)
})