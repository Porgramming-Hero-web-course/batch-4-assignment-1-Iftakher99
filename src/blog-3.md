# **The Necessity of Type Guards and TypeScript's Type Safety**

## TypeScript

TypeScript is a powerful programming language for JavaScript developers because it includes all of JavaScript's features while adding essential capabilities that JavaScript lacks.

## Why Are Type Guards Necessary?

One of the most useful tools TypeScript provides is the type guard. In JavaScript, there is no built-in feature like type guards. As a result, when our codebase grows from small to medium or large scale, it becomes challenging to catch bugs at runtime. look into the example below:

```
function doubleTheValue(value) {
  return value * 2;
}
// Test cases
console.log(doubleTheValue(10));    // ok, outputs 20
console.log(doubleTheValue("5"));   // Works but giving us wrong result, outputs "55"
console.log(doubleTheValue(true));  // Problem: outputs NaN
```

in this example we can see that by depending on our input the javascript Function behaves deferently

To solve this problem The typeScript provides in built type guards. Look into the example below:

```
function doubleTheValue(value: number): number {
  return value * 2;
}

// Test cases
console.log(doubleTheValue(10));    // Outputs 20
// console.log(doubleTheValue("5")); // * error: Argument of type 'string' is not assignable to parameter of type 'number'*
// console.log(doubleTheValue(true)); //  * error: Argument of type 'boolean' is not assignable to parameter of type 'number' *
```

Here we defined the parameter must be a number and we also ensured that output also will be number. If we want to pass some other parameter my mistake or intentionaly ,we will get the error while writing the Program, we dont have to wait for runtime checking.

There ara a lot of feature that javasript dont have .The Some common type guard features are mentioned below:

- typeof type guards
- instanceof type guards
- in operator type guards
- Litaral type guards
- custom type guards

### Conclusion

Type guards are fundamental features of typeScript which allow us to more control over our codebase by type safety and error prevention by using various type guards they also make the code easier to read, safer to modify, and more predictable because we know and can tell that code what kind of data to pass and what kind of data will get. so definitely it'll make a huge impact for Programming world.
