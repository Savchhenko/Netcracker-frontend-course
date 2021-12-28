import { LinkedList } from "./linked-list";
import { quickSort } from "./quick-sort";

// work with LinkedList class:
const list: LinkedList = new LinkedList();

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


// work with quickSort function
const items: number[] = [4, 2, 6, 5, 3, 9];
console.log("Initial array: ", items);

const result: number[] = quickSort(items, 0, items.length - 1);

console.log("Array after sorting: ", result);