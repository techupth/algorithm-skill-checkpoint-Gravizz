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
  for (let i of str) {
    collectStr[i] = (collectStr[i] || 0) + 1;
    if (collectStr[i] > max) {
      max = collectStr[i];
      letter = i;
    }
  }
  return letter;
};
