const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


class Queue {

  getUnderlyingList() {
    return this.queue;
  }
  enqueue(x) {
    let NextItem = new node(x)
    if (!this.queue) {
      this.queue = NextItem;
    }
    else {
      let item = this.queue;
      while (item) {
        if (item.next == null) {
          item.next = NextItem;
          break;
        }
        item = item.next;
      }
    }
  }

  dequeue() {
    let item = this.queue.value;
    this.queue = this.queue.next;
    return item;
  }
}


module.exports = {
  Queue
};
