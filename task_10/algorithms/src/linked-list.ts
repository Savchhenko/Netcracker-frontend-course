type NodeOrNull = Node | null;

class Node {
    constructor(public data: any, public prev: NodeOrNull = null, public next: NodeOrNull = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

export class LinkedList {
    public head: NodeOrNull;
    public tail: NodeOrNull;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNodeToTheEnd <T>(data: T): void {
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

    addNodeByIndex <T>(index: number, data: T): void {
        const node: Node = new Node(data);
        
        if (!this.head) {
            this.head = node;
            this.tail = node;
            console.log("Добавили первый элемент в список");
            return;
        }

        let current = this.head;

        for (let i: number = 0; i <= index; i++) {
            if (index === 0) {
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
                return;
            }

            if (current == this.tail) {
                node.prev = this.tail;
                this.tail!.next = node;
                this.tail = node;
                return;
            } else if (i === index) {
                //перезаписываем элемент
                node.prev = current.prev;
                current.prev!.next = node;
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
        let current = this.head;
        while (current) {
            output.push(current);
            current = current.next;
        }
        return output;
    }

    getNodeByIndex(index: number): Node | undefined {
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

    edit (index: number): void {
        let current = this.getNodeByIndex(index);

        if (!current) {
            console.log("Такого элемента в списке нет");
            return;
        }

        console.log(current);

        current.data = prompt("Введите новое значение элемента:");
    }

    remove(index: number): void {
        if (!this.head || !this.getNodeByIndex(index)) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head!.prev = null;
            return;
        }

        let current = this.head.next;

        for (let i: number = 1; i <= index; i++) {
            if (current == this.tail) {
                this.tail = this.tail!.prev;
                this.tail!.next = null;
                return;     
            } else if (i === index) {
                current!.prev!.next = current!.next;
                current!.next!.prev = current!.prev; 
                return;
            } else {
                current = current!.next;
            }
        }
    }
}
