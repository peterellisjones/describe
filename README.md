describe
========

Wrapper for Meteor Tinytest to support 'describe', 'context' and 'it' blocks.

Example:

```coffee-script
describe 'division', ->
  context 'when the divisor is not zero', ->
    it 'returns a number', (test) ->
      test.equal 12 / 4, 3

  context 'when the divisor is zero', ->
    it 'returns infinity', (test) ->
      test.equal 12 / 0, Infinity

describe 'an asynchronous test', ->
  it 'also just works', (test, next) ->
    sendThree = (callback) -> callback(3)
    sendThree (n) ->
      test.equal n, 3
      next()
```

[More details here](http://www.peterellisjones.com/post/101970705880/unit-testing-meteor-packages-with-tinytest)
