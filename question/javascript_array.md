# JavaScript Array Interview Questions and Coding Examples
---

## 1. Reverse an Array

```javascript
function reverseArray(arr) {
  return arr.reverse();
}

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
````

---

## 2. Find the Maximum and Minimum in an Array

```javascript
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

console.log(findMaxMin([5, 1, 8, -2])); // { max: 8, min: -2 }
```

---

## 3. Remove Duplicates from an Array

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
```

---

## 4. Check if Two Arrays are Equal

```javascript
function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, i) => val === b[i]);
}

console.log(arraysEqual([1, 2], [1, 2])); // true
console.log(arraysEqual([1, 2], [2, 1])); // false
```

---

## 5. Flatten a Nested Array

```javascript
function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
```

---

## 6. Find the Intersection of Two Arrays

```javascript
function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
```

---

## 7. Rotate an Array to the Right by K Steps

```javascript
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
```

---

## 8. Find the First Non-Repeating Element

```javascript
function firstNonRepeating(arr) {
  return arr.find(item => arr.indexOf(item) === arr.lastIndexOf(item));
}

console.log(firstNonRepeating([1, 2, 2, 3, 3, 4])); // 1
```

---

## 9. Group Elements by Frequency

```javascript
function groupByFrequency(arr) {
  const map = {};
  arr.forEach(el => map[el] = (map[el] || 0) + 1);
  return map;
}

console.log(groupByFrequency([1, 2, 2, 3, 1, 4]));
// { '1': 2, '2': 2, '3': 1, '4': 1 }
```

---

## 10. Chunk an Array

```javascript
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
```

---

## 11. Remove Falsy Values

```javascript
function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, 1, false, 2, '', 3])); // [1, 2, 3]
```

---

## 12. Count Occurrences of a Value

```javascript
function countOccurrences(arr, val) {
  return arr.reduce((acc, item) => item === val ? acc + 1 : acc, 0);
}

console.log(countOccurrences([1, 2, 2, 3], 2)); // 2
```

---

## Summary

| Problem                     | Method Used                 |
| --------------------------- | --------------------------- |
| Reverse array               | `.reverse()`                |
| Max/Min                     | `Math.max()`, `Math.min()`  |
| Remove duplicates           | `Set`                       |
| Check equality              | `every()`                   |
| Flatten nested arrays       | `.flat(Infinity)`           |
| Find intersection           | `.filter()` + `.includes()` |
| Rotate array                | `slice()` + `concat()`      |
| First non-repeating element | `find()`                    |
| Group by frequency          | Object/map                  |
| Chunk array                 | Manual loop + `slice()`     |
| Remove falsy values         | `filter(Boolean)`           |
| Count occurrences           | `reduce()`                  |

```

```
