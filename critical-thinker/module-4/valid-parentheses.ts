class Node<T> {
  val: T;
  next: Node<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

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

const bracketChecker = (str: string) => {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === ")" || char === "]" || char === "}") {
      if (stack.isEmpty()) return false;
    }

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" && stack.peek() === "(") {
      stack.pop();
    } else if (char === "]" && stack.peek() === "[") {
      stack.pop();
    } else if (char === "}" && stack.peek() === "{") {
      stack.pop();
    }
  }
  return stack.isEmpty();
};

const bracketCheckerMapSystem = (str: string) => {
  const stack = new Stack();

  const bracketMap: { [key: string]: string } = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.isEmpty() || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
};

console.log(bracketCheckerMapSystem("())"));
