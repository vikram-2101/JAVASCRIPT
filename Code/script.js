s// let modebtn = document.querySelector("#mode");
// let currMode = "light";
// let body = document.querySelector("body");
// modebtn.addEventListener("click", () => {
//   if (currMode == "light") {
//     currMode = "dark";
//     // document.querySelector("body").style.backgroundColor = "black";
//     body.classList.add("dark");
//     body.classList.remove("light"); //
//   } else {
//     currMode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }

//   console.log(currMode);
// });

function cyclicSort(nums) {
  const n = nums.length;

  for (let i = 0; i < n; ) {
    // Check if the current number is in its correct position
    if (nums[i] === i + 1) {
      i++;
    } else {
      // Swap the current number with the one at its correct position
      const temp = nums[i];
      nums[i] = nums[temp - 1];
      nums[temp - 1] = temp;
    }
  }
}

// Example usage:
const exampleArray = [3, 5, 2, 1, 4];
cyclicSort(exampleArray);

console.log("Sorted Array:", exampleArray);

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Already sorted if the array has 1 or 0 elements
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  // Recursively sort each half
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from the left and right arrays and merge them
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in either array, append them to the result
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [8, 3, 1, 7, 0, 10, 2];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
