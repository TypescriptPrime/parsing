import test from 'ava'
import { PostProcessing } from '@/index.js'

test('throws error for spanning across tokens without close at end (inner is double quote)', T => {
  let Input = ['--parameter1', '"value', 'is', 'wrong']
  T.throws(() => {
    PostProcessing(Input)
  })
})

test('throws error for spanning across tokens without close at end (inner is single quote)', T => {
  // eslint-disable-next-line quotes
  let Input = ['--parameter1', "'value", 'is', "wrong"]
  T.throws(() => {
    PostProcessing(Input)
  })
})

test('throws error for spanning across tokens without close at beginning (inner is double quote)', T => {
  let Input = ['--parameter1', 'value', 'is', 'wrong"']
  T.throws(() => {
    PostProcessing(Input)
  })
})

test('throws error for spanning across tokens without close at beginning (inner is single quote)', T => {
  // eslint-disable-next-line quotes
  let Input = ['--parameter1', "value", 'is', "wrong'"]
  T.throws(() => {
    PostProcessing(Input)
  })
})