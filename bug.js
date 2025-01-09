function foo(x) {
  if (x === null) {
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
console.log(foo(NaN)); // unexpected -1, should throw error or return NaN