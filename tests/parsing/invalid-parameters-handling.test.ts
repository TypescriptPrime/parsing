import test from 'ava'
import { Parsing } from '@/index.js'

test('throws error for spanning across tokens without close (inner is double quote)', T => {
  let Input = ['--parameter1', '"value', 'is', 'wrong"']
  T.throws(() => {
    Parsing(Input)
  })
})