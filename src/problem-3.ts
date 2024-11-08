{
  // Function
  function countWordOccurrences(sentence: string, word: string): number {
    //make the whole sentence and the word to lower case
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    //split the sentence itnto words
    const words = lowerCaseSentence.split(' ');
    //now check the count
    let count: number = 0;
    for (let occurrence of words) {
      if (occurrence === lowerCaseWord) {
        count++;
      }
    }
    return count;
  }

  //   console.log(countWordOccurrences('I love typescript', 'typescript'));
}
