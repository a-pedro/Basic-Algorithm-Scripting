function frankenSplice(arr1, arr2, n) {
  let newArr = [];
newArr.push(...arr2.slice(0, n), ...arr1, ...arr2.slice(n))
  return newArr ;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));