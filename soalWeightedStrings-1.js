function calculateWeight(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
}

function getStringWeights(s) {
    let weights = new Set();
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let weight = 0;
        for (let j = i; j < n; j++) {
            weight += calculateWeight(s[j]);
            weights.add(weight);
        }
    }
    return weights;
}

function checkQueries(s, queries) {
    let weights = getStringWeights(s);
    return queries.map(query => weights.has(query) ? "Yes" : "No");
}


let s = "deeffggg";
let queries = [5, 10, 21, 15];

console.log(checkQueries(s, queries))