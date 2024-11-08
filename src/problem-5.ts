{
  //fn
  function getProperty<T, Q extends keyof T>(object: T, property: Q): T[Q] {
    return object[property];
  }
  //   const person = { name: 'Alice', age: 30 };
  //   console.log(getProperty(person, 'name'));
}
