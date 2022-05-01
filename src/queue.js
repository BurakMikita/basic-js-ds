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
 class ListNode {
	constructor(x) {
	  this.value = x;
	  this.next = null;
	}
 }





 class Queue {
	 
	constructor() {
		this.arr =  null
	 }

	getUnderlyingList() {
	  return this.arr
	}
 
	enqueue(value) {
	   if(!this.arr ) {
			this.arr = new ListNode(value)
			return 
		}else {
			let current = this.arr;
			while(current.next) {
				current = current.next;
			}
			current.next = new ListNode(value);
			return;
		}
	}
 
	dequeue() {
	   let startItem = this.arr.value;
    this.arr = this.arr.next;
    return startItem;
	}
 }	


module.exports = {
  Queue
};
