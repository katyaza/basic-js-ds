const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null;
  }

  root() {
    if(!this.rootTree) {
      return null;
    } else {
      return this.rootTree;
    }
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchData(this.rootTree, data);

    function searchData(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if(data < node.data) {
        return searchData(node.left, data);
      } else {
        return searchData(node.right, data);
      }
    }
  }

  find(data) {
    return findhData(this.rootTree, data);

    function findhData(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        return findhData(node.left, data);
      } else {
        return findhData(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootTree = removesNode(this.rootTree, data);

    function removesNode(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = removesNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removesNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removesNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if(!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.treeRoot) {
      return null;
    }
    let node = this.treeRoot;
    
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}
module.exports = {
  BinarySearchTree
};