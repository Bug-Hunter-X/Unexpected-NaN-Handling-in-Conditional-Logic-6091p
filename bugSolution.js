function foo(x) {
  if (isNaN(x)) {
    // Handle NaN appropriately.  Options:
    // return NaN; 
    // throw new Error('Input cannot be NaN');
    return -2; // Or any specific value you want to indicate error
  } else if (x === null) {
    return 0; 
  } else if (x < 0) { 
    return -1; 
  } else { 
    return 1; 
  }
}

console.log(foo(null)); // expected 0
console.log(foo(-1)); // expected -1
console.log(foo(1)); // expected 1
console.log(foo(NaN)); // now returns -2 (or throws error or returns NaN) 