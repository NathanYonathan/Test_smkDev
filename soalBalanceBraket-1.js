function isBalanced(s) {
    let stack = [];
    let matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return "No";
            }
        }
    }

    return stack.length === 0 ? "Yes" : "No";
}

let s1 = "({[]})";
let s2 = "({[})";

console.log(isBalanced(s1)); 
console.log(isBalanced(s2)); 