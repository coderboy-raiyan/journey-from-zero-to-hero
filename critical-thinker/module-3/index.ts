import Stack from "./stack";

const stack = new Stack<number>();
stack.push(20);
stack.push(30);
stack.push(90);
stack.push(100);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.print());
