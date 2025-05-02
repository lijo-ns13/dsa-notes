function heapSort(arr) {
    const size = arr.length;
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        heapify(arr, size, i);
    }
    for (let i = size - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr; // Now sorted in ascending order
}
function heapify(arr, size, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child index
    const right = 2 * i + 2; // Right child index
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, size, largest);
    }
}
const arr = [234, 97, 23, 2424, 100, 1234, 2342];
console.log("Original Array:", arr);

const sortedArray = heapSort(arr);
console.log("Sorted Array:", sortedArray); // Output: [23, 97, 100, 234, 1234, 2342, 2424]