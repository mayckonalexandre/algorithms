/**
 * Performs a binary search on a sorted array to find the index of a specified item.
 *
 * @param {number[] | string[]} orderedList - The array of numbers | string sorted in ascending order.
 * @param {number} item - The number | string to search for in the array.
 * @returns {number | null} - The index of the found item, or null if the item is not found.
 */
function binarySearch(
  orderedList: string[] | number[],
  item: string | number
): number | null {
  console.time("binarySearch");
  let start = 0;
  let end = orderedList.length - 1;
  let attempts = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let guess = orderedList[middle];
    attempts++;
    if (guess === item) {
      console.log({ index: middle, value: orderedList[middle], attempts });
      console.timeEnd("binarySearch");
      return middle;
    } else if (guess > item) end = middle - 1;
    else start = middle + 1;
  }
  console.timeEnd("binarySearch");
  return null;
}

/**
 * Performs a linear search on an array to find the index of a specified item.
 *
 * @param {number[] | string[]} orderedList - The array of numbers or strings.
 * @param {number | string} item - The number or string to search for in the array.
 * @returns {number | null} - The index of the found item, or null if the item is not found.
 */
function search(orderedList: string[] | number[], item: string | number) {
  console.time("search");
  const check = orderedList.indexOf(item as never);
  console.log(check);
  console.timeEnd("search");
  return check === -1 ? null : check;
}

/**
 * Generates an array of numbers from 1 to the specified size.
 *
 * @param {number} size - The size of the array to generate.
 * @returns {number[]} - The generated array of numbers.
 */
function generateArray(size: number): number[] {
  return Array.from({ length: size }, (_, i) => i + 1);
}

const sortedNames = [
  "Alice",
  "Bruno",
  "Carlos",
  "Daniela",
  "Eduardo",
  "Fernanda",
  "Gabriel",
  "Helena",
  "Igor",
  "Julia",
  "Leonardo",
  "Mariana",
  "Nicolas",
  "Olivia",
  "Paulo",
  "Quintino",
  "Rafael",
  "Sofia",
  "Tiago",
  "Valeria",
  "Yara",
  "Zeca",
];

const smallArray = generateArray(20);
const mediumArray = generateArray(1000);
const largeArray = generateArray(100000000);

binarySearch(largeArray, 100000000);
search(largeArray, 100000000);

//Difference between algorithms with large Array
//{ index: 99999999, value: 100000000, attempts: 27 }
//binarySearch: 16.857ms
//99999999
//search: 144.302ms