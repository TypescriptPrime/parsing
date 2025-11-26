import test from 'ava'
import { PreProcessing } from '@/index.js'

test('PreProcessing strips Node executable from argv (nvm and 24.11.1)', T => {
  let Input = ['/usr/local/share/nvm/versions/node/v24.11.1/bin/node', '/path/to/node.js', '--sample', 'sample1']
  let Expected = ['--sample', 'sample1']
  
  let Processed = PreProcessing(Input)
  T.deepEqual(Processed, Expected)
})

test('PreProcessing strips Node executable from argv (alpine package manager)', T => {
  let Input = ['/usr/bin/node', '/path/to/node.js', '--sample', 'sample1']
  let Expected = ['--sample', 'sample1']
  
  let Processed = PreProcessing(Input)
  T.deepEqual(Processed, Expected)
})

test('PreProcessing strips Node executable from argv (node:24-alpine container)', T => {
  let Input = ['/usr/local/bin/node', '/path/to/node.js', '--sample', 'sample1']
  let Expected = ['--sample', 'sample1']
  
  let Processed = PreProcessing(Input)
  T.deepEqual(Processed, Expected)
})