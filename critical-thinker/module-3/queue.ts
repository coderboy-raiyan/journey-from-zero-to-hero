class Node<T> {
  val: T;
  next: Node<T> | null;
  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

class queue<T> {
  tail: Node<T> | null;
  head: Node<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val: T) {
    this.length++;
    if (this.head === null && this.tail === null) {
      this.head = new Node(val);
      this.tail = this.head;
      return;
    }
    const newNode = new Node(val);
    this.tail!.next = newNode;
    this.tail = newNode;
  }

  dequeue(val: T) {
    this.length++;
    if (this.head === null && this.tail === null) {
      this.head = new Node(val);
      this.tail = new Node(val);
      return;
    }

    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  insert(val: T, index: number) {
    if (index > this.length) {
      console.log("Invalid position ", index);
      return;
    }

    if (index === 0) {
      this.enqueue(val);
      return;
    }
    if (index === this.length) {
      this.dequeue(val);
      return;
    }

    let newNode = new Node(val);
    let prevNode = this.findPrevNode(index);
    newNode.next = prevNode!.next;
    prevNode!.next = newNode;
    this.length++;
  }
  peek() {
    return this.head?.val || "Empty";
  }
  removeHead() {
    if (this.head === null) return;
    this.head = this.head.next;
    this.length--;
  }
  removeTail() {
    if (this.tail === null) return;
    let prevNode = this.findPrevNode(this.length - 1);
    prevNode!.next = null;
    this.tail = prevNode;
    this.length--;
  }

  remove(index: number) {
    if (index || index > this.length) {
      console.log("Invalid position ", index);
      return;
    }
    if (index && index === 0) {
      this.removeHead();
      return;
    }
    if (index && index === this.length) {
      this.removeTail();
      return;
    }

    if (index) {
      let prevNode = this.findPrevNode(index);
      prevNode!.next = prevNode!.next!.next;
      this.length--;
    }
  }

  searchNode(val: T) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.val === val) {
        return temp;
      }
      temp = temp.next;
    }
  }

  private findPrevNode(index: number) {
    let i = 0;
    let temp = this.head;
    while (temp !== null && i < index - 1) {
      temp = temp.next;
      i++;
    }
    return temp;
  }

  private lastNode() {
    let temp = this.head;
    while (temp !== null && temp?.next !== null) {
      temp = temp.next;
    }
    return temp;
  }

  public print() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp?.val);
      temp = temp.next;
    }
  }
}

const list = new queue();
list.peek();
list.print();

console.log(`size : ${list.length}`);
