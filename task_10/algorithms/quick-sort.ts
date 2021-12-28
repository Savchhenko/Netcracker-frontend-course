function swap(items: number[], firstIndex: number, secondIndex: number): void {
    const temp: number = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items: number[], left: number, right: number): number {
    const pivot: number = items[Math.floor((right + left) / 2)];
    let i: number = left;
    let j: number = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

function quickSort(items: number[], left: number, right: number): number[] {
    let index: number;

    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }

    return items;
}

const items: number[] = [4, 2, 6, 5, 3, 9];
console.log("Initial array: ", items);

const result: number[] = quickSort(items, 0, items.length - 1);

console.log("Array after sorting: ", result);
