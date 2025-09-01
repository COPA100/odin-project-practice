class LinkedList {
    constructor() {
        const node = new Node();
    }
    append = (value) => {
        
    }
    prepend = (value) => {
        
    }
    size = () => {

    }
    head = () => {

    }
    tail = () => {

    }
    at = (index) => {

    }
    pop = () => {

    }
    contains = (value) => {

    }
    find = (value) => {

    }
    toString = () => {

    }
}

class Node {
    constructor() {
        let value = null;
        let nextNode = null;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());