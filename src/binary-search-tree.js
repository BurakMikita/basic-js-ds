const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
	  this.data = data;
	  this.left = null;
	  this.right = null;
	}
 }
 
 class BinarySearchTree {
	constructor() {
		this.tree = null
	}
	 root() {
		return this.tree
	 }
 
	add(data) {
	  this.tree = addWithin(this.tree, data);
 
	  function addWithin(node, data) {
		 if (!node) {
			return new Node(data);
		 }
		 if (node.data === data) {
			return node;
		 }
		data < node.data ? node.left = addWithin(node.left, data) : node.right = addWithin(node.right, data)
		 return node;
	  }
	}
	has(data) {
	  return searchHas(this.tree, data);
 
	  function searchHas(node, data) {
		 if (!node) {
			return false;
		 }
 
		 if (node.data === data) {
			return true;
		 }
 
		 return data < node.data ? 
		 searchHas(node.left, data) : 
		 searchHas(node.right, data);
	  }
	}


	find(data) {
		return findItem(this.tree, data);
  
		function findItem(node, data) {
		  if(!node) return null;
		  if(node.data === data) return node;
  
		  if(node.data > data) {
			 return findItem(node.left, data);
		  } else {
			 return findItem(node.right, data);
		  }
		}
	 }
 
	remove(data) {
	  this.tree = removeValue(this.tree, data);
 
	  function removeValue(node, data) {
		 if (!node) {
			return null;
		 }
 
		 if (data < node.data) {
			node.left = removeValue(node.left, data);
			return node;
		 } else if (node.data < data) {
			node.right = removeValue(node.right, data);
			return node;
		 } else {
			if (!node.left && !node.right) {
			  return null;
			}
 
			if (!node.left) {
			  node = node.right;
			  return node;
			}
			if (!node.right) {
			  node = node.left;
			  return node;
			}
 			let current = node.right;
			while (current.left) {
				current = current.left;
			}
			node.data = current.data;
			node.right = removeValue(node.right, current.data);
 
			return node;
		 }
	  }
	}
 
	min() {
	  if (!this.tree) {
		 return;
	  }
 
	  let node = this.tree;
	  while (node.left) {
		 node = node.left;
	  }
 
	  return node.data;
	}
 
	max() {
	  if (!this.tree) {
		 return;
	  }
 
	  let node = this.tree;
	  while (node.right) {
		 node = node.right;
	  }
 
	  return node.data;
	}
 
	
	
 }


module.exports = {
  BinarySearchTree
};