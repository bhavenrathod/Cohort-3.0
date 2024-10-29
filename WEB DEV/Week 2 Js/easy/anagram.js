/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  function sortString(str) {
    return str.toLowerCase().split("").sort().join("");
  }

  return sortString(str1) === sortString(str2);
}

console.log(isAnagram("hello", "olleh"));
console.log(isAnagram("anagram", "naga"));

module.exports = isAnagram;