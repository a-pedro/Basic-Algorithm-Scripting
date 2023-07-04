function findLongestWordLength(str) {
  
  return Math.max(...str
  .split(" ")
  .map(text => text.length))
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));