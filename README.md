# Unexpected NaN Handling in Conditional Logic

This repository demonstrates a common JavaScript bug related to how functions handle the special value `NaN` (Not a Number).

## The Bug

The `foo` function attempts to handle `null` and negative numbers correctly. However, it doesn't account for `NaN`, resulting in unexpected behavior when `NaN` is passed as input.

## The Solution

The solution involves explicitly checking for `isNaN(x)` before proceeding with the comparisons.  This ensures that the function handles `NaN` appropriately, either by returning `NaN`, throwing an error, or providing a designated return value.

## How to Run

1. Clone the repository.
2. Open `bug.js` to see the buggy code and `bugSolution.js` to see the corrected code.
3. Run the JavaScript files in a browser's console or Node.js environment.