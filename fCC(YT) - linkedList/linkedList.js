class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

//Print linke list - iterative
const printLinkedList = (node) => {
    while (node) {
        console.log(node.val);
        node = node.next;
    }
}

//Print linke list - recurssion
const printLinkedListRecurssion = (node) => {
    if (!node) return ;
    console.log(node.val);
    printLinkedListRecurssion(node.next);
}

printLinkedList(a);
printLinkedListRecurssion(a);