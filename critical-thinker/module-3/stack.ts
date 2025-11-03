class Stack<T> {
  arr: T[];
  constructor() {
    this.arr = [];
  }
  push(val: T) {
    this.arr.push(val);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.arr.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }
  print() {
    console.log(this.arr.slice().reverse().join(" -> "));
  }
}

export default Stack;
