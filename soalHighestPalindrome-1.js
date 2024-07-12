function makeHighestPalindromeRecursive(s, k) {
    function makePalindrome(arr, l, r, k, changes) {
        if (l >= r) {
            return [arr, k, changes];
        }

        if (arr[l] !== arr[r]) {
            arr[l] = arr[r] = Math.max(arr[l], arr[r]);
            changes[l] = changes[r] = 1;
            k--;
        } else {
            changes[l] = changes[r] = 0;
        }

        if (k < 0) {
            return [arr, k, changes];
        }

        return makePalindrome(arr, l + 1, r - 1, k, changes);
    }

    function maximizePalindrome(arr, l, r, k, changes) {
        if (l > r) {
            return arr;
        }

        if (l === r && k > 0) {
            arr[l] = '9';
        }

        if (arr[l] < '9') {
            if (changes[l] === 1 && k >= 1) {
                arr[l] = arr[r] = '9';
                k--;
            } else if (changes[l] === 0 && k >= 2) {
                arr[l] = arr[r] = '9';
                k -= 2;
            }
        }

        return maximizePalindrome(arr, l + 1, r - 1, k, changes);
    }

    let arr = s.split('');
    let changes = new Array(arr.length).fill(0);
    let [newArr, remainingK, changesMade] = makePalindrome(arr, 0, arr.length - 1, k, changes);

    if (remainingK < 0) {
        return '-1';
    }

    let result = maximizePalindrome(newArr, 0, newArr.length - 1, remainingK, changesMade);

    return result.join('');
}

let s1 = "12321";
let k1 = 1;
console.log(makeHighestPalindromeRecursive(s1, k1));

let s2 = "45654";
let k2 = 2;
console.log(makeHighestPalindromeRecursive(s2, k2));