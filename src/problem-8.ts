{
  //fn
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true; //if exist all keys
  }
  // Sample Input
  //   const person2 = { name: 'Alice', age: 25, email: 'alice@example.com' };
  //   console.log(validateKeys(person2, ['name', 'age']));
}
