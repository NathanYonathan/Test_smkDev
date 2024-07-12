function calculateWeight(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function getStringWeights(s) {
    let weights = new Set();
    let n = s.length;
    let i = 0;

    while (i < n) {
        let currentChar = s[i];
        let start = i;
        
        // Menghitung panjang substring dari karakter yang berulang
        while (i < n && s[i] === currentChar) {
            i++;
        }

        // Menambahkan bobot dari substring karakter berulang
        let length = i - start;
        let totalWeight = 0;

        for (let j = 1; j <= length; j++) {
            totalWeight += calculateWeight(currentChar);
            weights.add(totalWeight * j);
        }
    }

    return weights;
}

function checkQueries(s, queries) {
    let weights = getStringWeights(s);
    return queries.map(query => weights.has(query) ? "Yes" : "No");
}

// Contoh penggunaan
let s = "aaabbccccd";
let queries = [3, 6, 12, 24];

console.log(checkQueries(s, queries)); // Output: ["Yes", "Yes", "Yes", "No"]