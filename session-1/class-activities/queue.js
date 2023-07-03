class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if(this.items.length === 0) {
            console.log("Queue is currently empty.");
        }
        else {
            this.items.shift();
        }
    }

    check() {
        console.log(this.items);
    }
}

const my_queue = new Queue();
my_queue.enqueue('Milk');
my_queue.enqueue('Eggs');
my_queue.check();       // ['Milk', 'Eggs']
my_queue.dequeue();
my_queue.check();       // ['Eggs']
my_queue.dequeue();
my_queue.check();       // []
my_queue.dequeue();     // Queue is currently empty
my_queue.dequeue();     // Queue is currently empty
my_queue.dequeue();     // Queue is currently empty