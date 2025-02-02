export function getAllCharecters(word,usedLetters){
    // This function will return the word with the guessed letters and the rest of the letters will be masked with '_'
    usedLetters = usedLetters.map(letter => letter.toUpperCase());
    const gussedLetters = new Set(usedLetters);
    const charecters = word.toUpperCase().split('').map(char => {
      if (gussedLetters.has(char)) {
        return char;
      }
      return '_';
    })
    return charecters.join(''); // join the array to make a string  
  }