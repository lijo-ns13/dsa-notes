class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let temp = this.root;
        while (true) {
            if (temp.value === newNode.value) return undefined;
            if (temp.value > newNode.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    search(value) {
        if (!this.root) return undefined;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }

    findLargest(node = this.root) {
        if (!node) return null;
        if (!node.right) return node.value;
        return this.findLargest(node.right);
    }

    findSmallest(node = this.root) {
        if (!node) return null;
        if (!node.left) return node.value;
        return this.findSmallest(node.left);
    }

    findSecondLargest(node = this.root) {
        if (!node || (!node.left && !node.right)) return null;
        if (node.right && !node.right.left && !node.right.right) {
            return node.value;
        }
        if (!node.right) {
            return this.findLargest(node.left);
        }
        return this.findSecondLargest(node.right);
    }

    findSecondSmallest(node = this.root) {
        if (!node || (!node.left && !node.right)) return null;
        if (node.left && !node.left.left && !node.left.right) {
            return node.value;
        }
        if (!node.left) {
            return this.findSmallest(node.right);
        }
        return this.findSecondSmallest(node.left);
    }

    isBST(node = this.root, min = null, max = null) {
        if (!node) return true;
        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }
        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }

    isBalanced(node = this.root) {
        if (!node) return true;
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.abs(leftHeight - rightHeight) <= 1 &&
               this.isBalanced(node.left) &&
               this.isBalanced(node.right);
    }

    getHeight(node) {
        if (!node) return -1;
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    findLCA(node, value1, value2) {
        if (!node) return null;
        if (node.value === value1 || node.value === value2) return node;
        const leftLCA = this.findLCA(node.left, value1, value2);
        const rightLCA = this.findLCA(node.right, value1, value2);
        if (leftLCA && rightLCA) return node;
        return leftLCA ? leftLCA : rightLCA;
    }

    countLeafNodes(node = this.root) {
        if (!node) return 0;
        if (!node.left && !node.right) return 1;
        return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
    }

    deleteNode(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(node, value) {
        if (!node) return node;
        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }
            node.value = this.minValueNode(node.right).value;
            node.right = this._deleteNode(node.right, node.value);
        }
        return node;
    }

    minValueNode(node) {
        let current = node;
        while (current && current.left) {
            current = current.left;
        }
        return current;
    }

    // Level Order Traversal (BFS)
    levelOrder() {
        if (!this.root) return [];
        const queue = [this.root];
        const result = [];
        while (queue.length > 0) {
            const node = queue.shift();
            result.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }

    // Preorder Traversal (DFS)
    preorder(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    // Inorder Traversal (DFS)
    inorder(node = this.root, result = []) {
        if (node) {
            this.inorder(node.left, result);
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return result;
    }

    // Postorder Traversal (DFS)
    postorder(node = this.root, result = []) {
        if (node) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    // Check if Two Trees are Identical
    isIdentical(tree1, tree2) {
        if (!tree1 && !tree2) return true;
        if (!tree1 || !tree2) return false;
        return (
            tree1.value === tree2.value &&
            this.isIdentical(tree1.left, tree2.left) &&
            this.isIdentical(tree1.right, tree2.right)
        );
    }

    // Serialize the BST
    serialize() {
        return JSON.stringify(this.root);
    }

    // Deserialize the BST
    deserialize(data) {
        this.root = JSON.parse(data);
        return this;
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(21);
bst.insert(234);
bst.insert(100);
bst.insert(103);
bst.insert(1);
bst.insert(4);

console.log('Level Order:', bst.levelOrder()); // [12, 1, 21, 4, 100, 234, 103]
console.log('Preorder:', bst.preorder()); // [12, 1, 4, 21, 100, 103, 234]
console.log('Inorder:', bst.inorder()); // [1, 4, 12, 21, 100, 103, 234]
console.log('Postorder:', bst.postorder()); // [4, 1, 103, 100, 234, 21, 12]

const serialized = bst.serialize();
console.log('Serialized:', serialized);

const newBST = new BinarySearchTree().deserialize(serialized);
console.log('Deserialized Inorder:', newBST.inorder()); // [1, 4, 12, 21, 100, 103, 234]