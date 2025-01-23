# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript error:  'Type 'string' is not assignable to type 'number'.  The error arises when attempting to use a string value where a number is expected, often in arithmetic operations.

## The Bug

The provided `add` function is designed to accept two numbers and return their sum. However, the example shows a string ('10') being passed as the second argument, causing the type error.

## The Solution

The solution involves ensuring that both arguments passed to the `add` function are indeed numbers. This can be done via type checking or explicit type conversion before performing the addition.