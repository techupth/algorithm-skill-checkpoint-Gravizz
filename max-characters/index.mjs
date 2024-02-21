// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const collectStr = {};
  let max = 0;
  let letter;
  for (let i = 0; i < str.length; i++) {
    if (!collectStr[str[i]]) {
      collectStr[str[i]] = 1;
    } else {
      collectStr[str[i]]++;
    }
  }
  for (let i in collectStr) {
    if (collectStr[i] > max) {
      max = collectStr[i];
      letter = i;
    }
  }
  return letter;
};
