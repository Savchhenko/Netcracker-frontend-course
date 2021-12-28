// узел списка
class Node {
    constructor(public data: any, public prev: Node | null = null, public next: Node | null = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

export class LinkedList {
    public head: Node | null;
    public tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNodeToTheEnd(data: any): void {
        const node: Node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    addNodeByIndex(index: number, data: any): void {
        const node: Node = new Node(data);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
            console.log("Добавили первый элемент в список");
            return;
        }

        let current: Node = this.head;

        for (let i: number = 0; i <= index; i++) {
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

    toArray(): Array<Node> {
        const output: Array<Node> = [];
        let current: Node = this.head;
        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    }

    getNodeByIndex(index: number): Node {
        if (!this.head) {
            console.log("Список пуст");
            return;
        }
        
        let current: Node = this.head;

        for (let i: number = 0; i < index; i++) {
            if (current.next) {
                current = current.next;
            } else {
                console.log(`Элемента номер ${index} в списке нет`);
                return;
            }
        }

        return current;
    }

    edit(data: any): void {
        let current: Node = this.getNodeByIndex(data);
        if (!current) {
            console.log("Такого элемента в списке нет");
            return;
        }
        console.log(current);

        current.data = prompt("Введите новое значение элемента:");
    }

    remove(data: any): void {
        if (!this.head) {
            return;
        }

        if (!this.getNodeByIndex(data)) {
            console.log("Элемент в списке отсутствует, поэтому удалить нельзя");
            return;
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next;
            this.head.prev = null;
        }

        let current: Node = this.head;

        if (this.tail.data === data) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                current.next.prev = current;
            } else {
                current = current.next;
            }
        }
    }
}
