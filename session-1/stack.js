// Class named Stack, follows LIFO
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    check() {
        console.log(this.items);
    }

    pop() {
        // Display "Stack is currently empty" if empty
        if (this.items.length === 0) {
            console.log("Stack is currently empty.");
        } else {
            this.items.pop();
        }

    }

}

const stack = new Stack()
stack.push("Milk");
stack.push("Eggs");
stack.check();  // [“Milk”, “Eggs”]
stack.pop();
stack.check(); // [“Milk”]
stack.pop();
stack.check();  // []
stack.pop();    // “Stack is currently empty.”