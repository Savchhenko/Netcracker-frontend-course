// узел списка
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNodeToTheEnd(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    addNodeByIndex(index, data) {
        const node = new Node(data);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
            console.log("Добавили первый элемент в список");
            return;
        }

        let current = this.head;

        for (let i = 0; i <= index; i++) {
            if (index === 0) {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
                return;
            }

            if (current == this.tail) {
                node.prev = this.tail;
                this.tail.next = node;
                this.tail = node;
                return;
            } else if (i === index) {
                //перезаписываем элемент
                node.prev = current.prev;
                current.prev.next = node;
                node.next = current;
                current.prev = node;
                return;
            } else {
                current = current.next;
            }            
        }
    }

    toArray() {
        const output = [];
        let current = this.head;
        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    }

    getNodeByIndex(index) {
        if (!this.head) {
            console.log("Список пуст");
            return;
        }
        
        let current = this.head;

        for (let i = 0; i < index; i++) {
            if (current.next) {
                current = current.next;
            } else {
                console.log(`Элемента номер ${index} в списке нет`);
                return;
            }
        }

        return current;
        
    }

    edit(data) {
        let current = this.find(data);
        if (!current) {
            console.log("Такого элемента в списке нет");
            return;
        }
        console.log(current);

        current.data = prompt("Введите новое значение элемента:");
    }

    remove(data) {
        if (!this.head) {
            return;
        }
        if (!this.find(data)) {
            console.log("Элемент в списке отсутствует, поэтому удалить нельзя");
            return;
        }
        while (this.head && this.head.data === data) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        let current = this.head;
        if (this.tail.data === data) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        while (current.next) {
            if (current.next.data === data) {
                //remove
                current.next = current.next.next;
                current.next.prev = current;
            } else {
                current = current.next;
            }
        }
    }
}

const list = new LinkedList();

list.addNodeToTheEnd("Hi");
list.addNodeToTheEnd("world!");
list.addNodeToTheEnd(":)");
list.addNodeToTheEnd("The last")

console.log(list);
console.log(list.toArray());

list.addNodeByIndex(0, "WOW");
list.addNodeByIndex(1, "Double WOW");
list.addNodeByIndex(3, "wild");
list.addNodeByIndex(7, "No, that is the last");
list.addNodeByIndex(10, {value: "Something"});
console.log(list.toArray());
