// Method using 2 arrays 
class MyStack {
    private stack1: number[];
    private stack2: number[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(x: number): void {
        this.stack2.push(x);

        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.shift());
        }

        [this.stack1, this.stack2] = [this.stack2, this.stack1];
    }

    pop(): number {
        return this.stack1.shift();
    }

    top(): number {
        return this.stack1[0];
    }

    empty(): boolean {
        return this.stack1.length === 0;
    }
}


// Method using chained list, chained list implémentation first, then solution
class QueueNode { 
    private tail: Node = null;
    private head: Node = null;
    private _size: number = 0;

    enqueue(value: number) {
        const n = new Node(value);
        if (!this.tail) this.tail = this.head = n;
        else {
            this.tail.next = n;
            this.tail = n;
        }
        this._size ++;
    }

    dequeue() {
        if (!this.head) return undefined;

        const value = this.head.val;

        if (this.head.next === null) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this._size --;

        return value;
    }

    front() {
        return this.head.val;
    }

    isEmpty() {
        return this._size === 0;
    }

    size() {
        return this._size;
    }
}

class Node { 
    val : number;
    next : Node | null; 
    constructor(val: number, next: Node | null = null) {
        this.val = val;
        this.next = next;
    }
}

class MyStack {
    private stack1: QueueNode;
    private stack2: QueueNode;

    constructor() {
        this.stack1 = new QueueNode();
        this.stack2 = new QueueNode();
    }

    push(x: number): void {
        this.stack2.enqueue(x);

        while (this.stack1.size() !== 0) {
            this.stack2.enqueue(this.stack1.dequeue());
        }

        [this.stack1, this.stack2] = [this.stack2, this.stack1];
    }

    pop(): number {
        return this.stack1.dequeue();
    }

    top(): number {
        return this.stack1.front();
    }

    empty(): boolean {
        return this.stack1.size() === 0;
    }
}
