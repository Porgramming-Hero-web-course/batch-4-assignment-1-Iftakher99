{
  //types
  type Circle = {
    shape: 'circle';
    radius: number;
  };
  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };

  type Shape = Rectangle | Circle;
  //fn
  function calculateShapeArea(shape: Shape): number {
    let area: number;
    switch (shape.shape) {
      case 'circle':
        area = Math.PI * shape.radius ** 2;
        break;
      case 'rectangle':
        area = shape.width * shape.height;
        break;
      default:
        throw new Error('unknown shape');
    }
    return Math.round(area * 100) / 100;
  }

  //   const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 });
  //   // Sample Input 2:
  //   const rectangleArea = calculateShapeArea({
  //     shape: 'rectangle',
  //     width: 4,
  //     height: 6,
  //   });

  //   console.log(rectangleArea);
}
