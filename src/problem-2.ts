{
  //Function
  function removeDuplicates(arr: number[]): number[] {
    let newArray: number[] = [];
    arr.forEach((item) => {
      if (!newArray.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  }
  // array
  const arr: number[] = [1, 2, 2, 3, 4, 4, 5];
  //   console.log(removeDuplicates(arr));
}
