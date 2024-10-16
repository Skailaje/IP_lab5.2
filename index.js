class SquareIterator {
    constructor(numbers) {
      this.numbers = numbers; 
      this.index = 0; 
    }
  
    next() {
      if (this.index < this.numbers.length) {
        const square = this.numbers[this.index] ** 2; 
        this.index++; 
        return { value: square, done: false }; 
      } else {
        return { value: undefined, done: true }; 
      }
    }
  
    [Symbol.iterator]() {
      return this; 
    }
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const iterator = new SquareIterator(numbers);
  
  for (const square of iterator) {
    console.log(square); 
  }
  